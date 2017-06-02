var express = require('express');
var path = require('path');
var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/presidents-app');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

var presidentsController = require("./controllers/presidents.js");
app.use('/presidents', presidentsController);

app.use(cors());

app.use(express.static('public'));

app.listen(3000);
