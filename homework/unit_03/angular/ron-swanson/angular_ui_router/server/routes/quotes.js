var express = require('express');
var router = express.Router();
var Quote = require('../../models/quote.js');

//your routes here

router.get('/', function (request, response) {
  console.log('backend router.get');
})

module.exports = router;
