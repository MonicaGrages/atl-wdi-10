angular
  .module('RonSwansonApp')
  .service('QuotesService', QuotesService);

QuotesService.$inject = ['$http'];

function QuotesService($http) {
  const self = this;
  self.getQuote = getQuote;
  self.getSavedQuotes = getSavedQuotes;
  self.saveQuote = saveQuote;

  function getQuote() {
    let quote = $http
      .get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
    return quote;
  }

  function getSavedQuotes() {
    console.log('service needs to get saved quotes now');
  }

  function saveQuote() {
    console.log('service needs to save this quote now');
  }

}
