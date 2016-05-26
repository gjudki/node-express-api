var _port = 3001;

var express = require('express');

var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dogs');



app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

var dogRoutes = require('./routes/dog.js')(app);

var server = app.listen(_port, function() {
  console.log('Server running at localhost on port:' + _port);
});
