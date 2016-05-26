var _port = 3000;
var express = require('express');

var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cats');



app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

var catRoutes = require('./routes/cat.js')(app);

var server = app.listen(_port, function() {
  console.log('Server running at localhost on port:' + _port);
});
