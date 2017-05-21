var express = require('express');
var hbs = require('hbs');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
var searchController = require('./controllers/searchController.js');
var favoritesController = require('./controllers/favoritesController.js');
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname+'/public'));

app.set('view engine', 'hbs');
app.use('/search', searchController);
app.use('/favorites', favoritesController);

app.get('/', function (request, response) {
  response.send('this is the home page');
});



app.listen(port, function() {
  console.info('Server Up on port', port,"//", new Date());
});


