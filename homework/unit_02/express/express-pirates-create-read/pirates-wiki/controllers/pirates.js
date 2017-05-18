//your code below
var express = require('express');
var router = express.Router();
var seededPirates = require('../models/pirates.js');

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


//get pirate making form
router.post('/', function (request, response) {
  //things happen here
  var addedPirate = request.body;
  seededPirates.push(addedPirate);
  response.redirect('/pirates');
});

//get pirate editing form
router.get('/:id/edit', function (request, response) {
  response.render('pirates/edit', {
    pirate : {
      name : seededPirates[request.params.id].name,
      birthplace : seededPirates[request.params.id].birthplace,
      death_year : seededPirates[request.params.id].death_year,
      base : seededPirates[request.params.id].base,
      nickname : seededPirates[request.params.id].nickname,
      id : request.params.id
    }
  });
});

//edit the pirate after filling out edit form
router.put('/:id', function(request, response) {
  var pirateToEdit = seededPirates[request.params.id];
  console.log('pirate to edit is: '+pirateToEdit.name);
  pirateToEdit.name = request.body.name;
  pirateToEdit.birthplace = request.body.birthplace;
  pirateToEdit.death_year = request.body.death_year;
  pirateToEdit.base = request.body.base;
  pirateToEdit.nickname = request.body.nickname;
  console.log('now the edited pirate is: '+pirateToEdit.name);
  response.redirect('/pirates/'+request.params.id);
});

router.delete('/:id', function (request, response) {
  seededPirates.splice(request.params.id, 1);
  response.redirect('/pirates');
});

module.exports = router;

