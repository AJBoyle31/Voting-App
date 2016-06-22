//mongodb://<dbuser>:<dbpassword>@ds021434.mlab.com:21434/voting-app
//I think I need to use server.js and change the coding throughout this in order to get my app to work


var express = require('express');
var app = express();
var mongo = require('mongodb').MongoClient;
var obtainUrl = require('./mongopass.js');
var passport = require('passport');
var expressSession = require('express-session');

app.use(expressSession({secret: 'itsasecret'}));
app.use(passport.initialize());
app.use(passport.session());

var url = obtainUrl.getUrl();
//var appurl = TBD

mongo.connect(url);






app.listen(process.env.PORT || 3000, function() {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.'); 
});