/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var ProUser = require('../api/prouser/prouser.model');
var Images = require ('../api/image/image.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

ProUser.find({}).remove(function() {
  ProUser.create({
    firstName: 'Rajeev',
    lastName: 'Guru',
    imageId: 'http://techgeekblog.com/wp-content/uploads/2008/08/manga-avatar-2.jpg',
    email: 'guru.rajeev@gmail.com',
    website: 'www.tgc.be',
    address : {
      line: 'Rue Joseph II,30',
      postalCode: '1030',
      city: 'Brussels',
      country: 'Belgium',
      state: 'Brussels Capital Region'
    }

  }, {
    firstName: 'Nele',
    lastName: 'Van Geem',
    imageId: 'http://imalbum.aufeminin.com/album/D20070915/340034_1TCYIMPPTGZVIZUYJ88M7G5JWKL78Q_saligun-avatar_H223423_L.jpg',
    email: 'nelevangeem@yahoo.com',
    website: 'www.nvg.com',
    address : {
      line: 'Papenhoffdreef,5',
      postalCode: '4900',
      city: 'Mechelen',
      country: 'Belgium',
      state: 'Antwerp Province'
    }

  }, function() {
      console.log('finished populating pro users');
    }
  );
});


Images.find({}).remove(function() {
  Images.create({
    imageId: 'http://28.media.tumblr.com/tumblr_ltueurkwOW1qft5t6o1_500.jpg',
    imageWidth: '280',
    imageHeight: '389',
    tags: ['blond', 'short', 'male', 'classic']
    

  }, {
    imageId: 'http://26.media.tumblr.com/tumblr_lk0hdcDvTa1qjoblyo1_500.jpg',
    imageWidth: '280',
    imageHeight: '389',
    tags: ['blond', 'short', 'female', 'classic']

  }, function() {
      console.log('finished populating images');
    }
  );
});

