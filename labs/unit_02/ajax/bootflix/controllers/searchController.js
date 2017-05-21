var express = require('express');
var searchRouter = express.Router();
// var jquery = require('jquery'); //don't need this because not using JQuery on server side

searchRouter.get('/', function (request, response) {
  response.render('search/index');
});


searchRouter.get('/:id', function (request, response) {
  response.render('search/show', {
    id : request.params.id

  })
})


module.exports = searchRouter;
