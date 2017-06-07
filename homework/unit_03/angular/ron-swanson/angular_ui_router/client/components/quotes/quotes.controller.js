console.log("Quotes Controller Works!")

QuotesController.$inject = ['$http'];

//Your QUOTES CONTROLLER HERE!
function QuotesController($http) {
  let vm = this;
    // vm.quote = {};
    vm.quote="hi i'm ron swanson";

  // activate();
  // function activate () {
  //   getQuote();
  // }

  vm.getQuote = getQuote;
  function getQuote() {
    console.log('make an API call to get a quote');
    let quote = $http
      .get('http://ron-swanson-quotes.herokuapp.com/v2/quotes');
    console.log(quote);
    return quote;

  }

}

module.exports = QuotesController;
