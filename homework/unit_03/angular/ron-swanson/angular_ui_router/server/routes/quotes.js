var express = require('express');
var router = express.Router();
var Quote = require('../../models/quote.js');

//your routes here

//GET ALL THE QUOTES
router.get('/', function (request, response) {
  Quote.find(function(error, quotes) {
    if(error) {
      response.json({message: error});
      return;
    }
    response.json({quotes: quotes});
  })
})


//BACKEND ROUTE FOR SAVING A FAVORITE QUOTE
router.post('/', function (request, response) {
  var quote = new Quote({quote: request.body.quote});
  quote.save(function(error) {
    if(error){
      console.log('error saving new quote: '+error);
      return;
    }
    response.json({quote: quote});
  });
});

module.exports = router;
