//requirements: require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create your donut schema:
var donutSchema = new Schema({
  name: String,
  description: String,
  img: String,
  price: Number,
  qty: Number
});


var DonutModel = mongoose.model('Donut', donutSchema);

//export your donut with module.exports()
  module.exports = DonutModel;
