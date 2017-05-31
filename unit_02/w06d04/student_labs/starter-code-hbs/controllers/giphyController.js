var express = require('express');
var giphyRouter = express.Router();
var jquery = require('jquery');

giphyRouter.get('/newGif', function (request, response) {
  response.render('giphy/index');
});



module.exports = giphyRouter;
