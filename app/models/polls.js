'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Polls = new Schema({
    poll: {
        name: String,
        options: Array,
        votes: Array,
        user: String
    }
});

module.exports = mongoose.model('Polls', Polls);