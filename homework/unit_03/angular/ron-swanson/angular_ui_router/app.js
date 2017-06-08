var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var path = require('path');
var port = 3000;
var path = require('path');

mongoose.connect('mongodb://localhost:27017/angular-hw-app');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

var quotesController = require('./server/routes/quotes.js');
app.use('/quotes', quotesController);

var netflixController = require('./server/routes/netflix.js');
app.use('/netflix', netflixController);

app.listen(port, function(){
  console.log('listening on port ' + port);
});
