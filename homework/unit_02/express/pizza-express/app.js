// app.js

//require express package
var express = require('express');
//require hbs
var hbs = require('hbs');
//save an express module as 'app'
var app     = express();
// assigning 3000 as our port
var port    = 3000;

// tells the server to listen for requests on port 3000

app.set('view engine', 'hbs'); //tells Express what to use for rendering templates
app.set('views', './views');

app.get('/', function(req, res) {
  // when a request comes in at localhost:3000, it will respond
  res.send('Welcome to Pizza Express!');
});

app.get('/topping/:type', function(req, res, next) {
  // res.send(req.params.type + " pizza! Good choice");
  res.render();
});

app.get('/order/:amount/:size', function(req, res, next) {
  // res.send('Your order for '+req.params.amount+' '+req.params.size+' pizzas will be ready in 1 minute!');
  res.render();
});

app.get('')

app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});
