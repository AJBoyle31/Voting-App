'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Poll = new Schema({
    poll: {
        name: String,
        choices: Array,
        user: String
    }
});

module.exports = mongoose.model('Poll', Poll);