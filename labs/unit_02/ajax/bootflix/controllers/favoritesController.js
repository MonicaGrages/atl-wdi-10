var express = require('express');
var favoritesRouter = express.Router();

var seededFaveMovies = require('../favoriteMovies.js');

favoritesRouter.get('/', function (request, response) {
  response.render('favorites/index', {
    favoriteMovies : seededFaveMovies.seededFaveMovies
  });
});

favoritesRouter.get('/:id', function(request, response) {
  var faveMovie = seededFaveMovies.seededFaveMovies[request.params.id];
  response.render('favorites/show', {
    Title : faveMovie.Title,
    Year : faveMovie.Year,
    Poster : faveMovie.Poster,
    id : request.params.id
  });
});

favoritesRouter.post("/", function(request, response) {
  seededFaveMovies.seededFaveMovies.push(request.body);
  response.render('favorites/index');
});

favoritesRouter.get('/:id/edit', function (request, response) {
  response.render('favorites/edit')
});


favoritesRouter.delete('/:id', function (request, response) {
  seededFaveMovies.seededFaveMovies.splice(request.params.id, 1);
  response.redirect('/favorites');
});

module.exports = favoritesRouter;
