// console.log("Quotes Controller Works!")

QuotesController.$inject = ['QuotesService'];

//Your QUOTES CONTROLLER HERE!
function QuotesController(QuotesService) {
  let vm = this;
  vm.quote="";
  vm.savedQuotes = [];

  vm.getQuote = getQuote;
  function getQuote() {
    QuotesService.getQuote()
      .then(function (response) {
        vm.quote = response.data[0];
      })
  }

  vm.saveQuote = saveQuote;
  function saveQuote() {
    QuotesService.saveQuote(vm.quote)
      .then(function (response) {
        vm.savedQuotes.push({quote: vm.quote});
      })
  }

  vm.getSavedQuotes = getSavedQuotes;
  function getSavedQuotes() {
    vm.savedQuotes = ['Clear alcohols are for rich women on diets.'];
    QuotesService.getSavedQuotes()
      .then(function(response) {
        vm.savedQuotes = response.data.quotes;
      })
  }

}

module.exports = QuotesController;
