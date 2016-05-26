var _port = 3002;

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pets');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

var petRoutes = require('./routes/pet.js')(app);

var server = app.listen(_port, function() {
  console.log('Server running at localhost on port:' + _port);
});
