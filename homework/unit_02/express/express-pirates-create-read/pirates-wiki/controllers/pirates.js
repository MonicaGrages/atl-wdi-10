//your code below
var express = require('express');
var router = express.Router();
var seededPirates = require('../models/pirates.js'); //what?



// all routes for /pirates go here


router.get('/', function (request, response) {
  //index route
  // this should show all the pirates
  response.render('pirates/index', {
    seededPirates : seededPirates
  });
});


router.get('/new', function (request, response) {
  //a form should appear here
  response.render('pirates/new');
});

router.get('/:id', function(request, response) { //this is the show route and has to be below the new route
  //show one pirate
  var theChosenPirate = seededPirates[request.params.id];
  response.render('pirates/show', {
      name : theChosenPirate.name,
      birthplace : theChosenPirate.birthplace,
      death_year : theChosenPirate.death_year,
      base : theChosenPirate.base,
      nickname : theChosenPirate.nickname
  });
});

router.post('/', function (request, response) {
  //things happen here
  seededPirates.push(request.body)
  response.redirect('/pirates');
});



module.exports = router;






