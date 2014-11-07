'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ImageSchema = new Schema({
	imageId: String,
    creationDate: { type : Date, default: Date.now },
    imageWidth: Number,
    imageHeight: Number,
    tags: [],
    ownerId: String


});

module.exports = mongoose.model('Image', ImageSchema);