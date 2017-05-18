//your code here
var express = require('express');
var hbs = require('hbs');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;
var pirateController = require('./controllers/pirates.js');

app.use(bodyParser.urlencoded({
  extended: false
}));
  app.use(bodyParser.json());
app.use( logger('dev'));
app.set('view engine', 'hbs');
app.set('views', './views');
app.use('/pirates', pirateController);














app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});
