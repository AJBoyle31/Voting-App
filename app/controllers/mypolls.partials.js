'use strict';

var apiUrl = appUrl + '/api/:id';
var Polls = require('../models/polls.js');
var username = '';

ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, function (data) {
      var userObject = JSON.parse(data);

      var username = userObject['username'];
}));

    
function returnPolls() {
    Polls.find({username: username}).toArray(function(err, results){
        if(err) throw err;
        
        return results;
        
    });
}

module.exports = returnPolls();