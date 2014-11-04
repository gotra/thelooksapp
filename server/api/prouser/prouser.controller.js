'use strict';

var _ = require('lodash');
var Prouser = require('./prouser.model');

// Get list of prousers
exports.index = function(req, res) {
  Prouser.find(function (err, prousers) {
    if(err) { return handleError(res, err); }
    return res.json(200, prousers);
  });
};

// Get a single prouser
exports.show = function(req, res) {
  Prouser.findById(req.params.id, function (err, prouser) {
    if(err) { return handleError(res, err); }
    if(!prouser) { return res.send(404); }
    return res.json(prouser);
  });
};

// Creates a new prouser in the DB.
exports.create = function(req, res) {
  Prouser.create(req.body, function(err, prouser) {
    if(err) { return handleError(res, err); }
    return res.json(201, prouser);
  });
};

// Updates an existing prouser in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Prouser.findById(req.params.id, function (err, prouser) {
    if (err) { return handleError(res, err); }
    if(!prouser) { return res.send(404); }
    var updated = _.merge(prouser, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, prouser);
    });
  });
};

// Deletes a prouser from the DB.
exports.destroy = function(req, res) {
  Prouser.findById(req.params.id, function (err, prouser) {
    if(err) { return handleError(res, err); }
    if(!prouser) { return res.send(404); }
    prouser.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}