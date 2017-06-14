angular
  .module('RonSwansonApp')
  .service('QuotesService', QuotesService);

QuotesService.$inject = ['$http'];

function QuotesService($http) {
  const self = this;
  self.getQuote = getQuote;
  self.getSavedQuotes = getSavedQuotes;
  self.saveQuote = saveQuote;
  self.deleteQuote = deleteQuote;

  function getQuote() {
    let quote = $http
      .get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
    return quote;
  }

  function getSavedQuotes() {
    let savedQuotes = $http
      .get('/quotes');
      return savedQuotes;
  }

  function saveQuote(quoteString) {
    let savedQuote = $http
      .post('/quotes', {quote: quoteString});
      return savedQuote;
  }

  function deleteQuote(quoteId) {

  }


}
