var express = require('express');
var router = express.Router();
var Quote = require('../../models/quote.js');

//your routes here

router.get('/', function (request, response) {
  console.log('backend router.get');
})


//FOR SAVING A FAVORITE QUOTE
router.post('/', function (request, response) {
  console.log('this is the backend post fx');
  console.log(request.body.quote);
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
