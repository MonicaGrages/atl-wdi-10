var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var QuoteSchema = new Schema({
  quote: String,
});


var QuoteModel = mongoose.model('Quote', QuoteSchema);

module.exports = {
  Quote: QuoteModel
};
