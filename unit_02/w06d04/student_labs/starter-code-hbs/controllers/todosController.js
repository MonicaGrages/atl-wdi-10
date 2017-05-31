var express = require('express');
var router = express.Router();


var data = require('../data.js');

router.get('/', function(req,res) { //this is the index route (show everything)
  res.render('todos/index', {
    todos: data.seededTodos,
    length: data.seededTodos.length
  });
});

router.get('/new', function (req, res) {
  res.render('todos/new');
});


router.get('/:id', function(req, res) {   //this is the show route (show just one thing)
  var oneTodo = data.seededTodos[req.params.id];
  res.render('todos/show', {
    description : oneTodo.description,
    urgent : oneTodo.urgent,
    id : req.params.id
  })
});


router.post('/', function (req, res) {
  data.seededTodos.push(req.body);  //the names in the form need to match up to the key values in the array of objects
  res.redirect('/todos');
});


//edit todos
router.get('/:id/edit', function (req, res) {
  res.render('todos/edit', {
    todo : {
      description : data.seededTodos[req.params.id].description,
      urgent : data.seededTodos[req.params.id].urgent,
      id : req.params.id
    }
  });
})


//update todos
router.put ('/:id', function(req, res) {
  var todoToEdit = data.seededTodos[req.params.id];
  console.log("to do to edit: "+data.seededTodos[req.params.id]);
  todoToEdit.description = req.body.description;
  todoToEdit.urgent = req.body.urgent;
  res.redirect('/todos');
});



//delete todos
router.delete('/:id', function (req, res) {
  data.seededTodos.splice(req.params.id, 1);
  res.redirect('/todos');
})

module.exports = router;
