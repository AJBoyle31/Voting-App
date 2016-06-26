'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//maybe need two new Schemas? var user and var poll?


var User = new Schema({
	github: {
		id: String,
		displayName: String,
		username: String,
      publicRepos: Number
	},
   polls: {
      name: String,
      options: Array,
      votes: Array
   }
});

module.exports = mongoose.model('User', User);
