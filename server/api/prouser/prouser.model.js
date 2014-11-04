'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ProuserSchema = new Schema({
	active: Boolean,
	firstName: String,
	lastName: String,
	imageId: String,
	email: String,
	website: String,
	address : {
		line: String,
		postalCode: String,
		city: String,
		country: String,
		state: String
	}


});

module.exports = mongoose.model('Prouser', ProuserSchema);