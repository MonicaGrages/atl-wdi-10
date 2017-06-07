angular
  .module('RonSwansonApp')
  .service('QuotesService', QuotesService);

QuotesService.$inject = ['$http'];

function QuotesService($http) {
  const self = this;

  self.getQuote = getQuote;

  function getQuote() {
    let quote = $http
      .get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
    // console.log(quote);
    return quote;
  }

}
