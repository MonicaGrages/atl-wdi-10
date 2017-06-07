// console.log("Quotes Controller Works!")

QuotesController.$inject = ['QuotesService'];

//Your QUOTES CONTROLLER HERE!
function QuotesController(QuotesService) {
  let vm = this;
  vm.quote="";
  vm.savedQuotes = null;

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
        // console.log(response.data.$$state.value.config.data);
        console.log(response);
        // savedQuotes.push(response);
      })
    vm.quote = '';
  }

  vm.getSavedQuotes = getSavedQuotes;
  function getSavedQuotes() {
    vm.savedQuotes = ['Clear alcohols are for rich women on diets.'];
    QuotesService.getSavedQuotes();
  }

  vm.hideSavedQuotes = hideSavedQuotes;
  function hideSavedQuotes() {
    vm.savedQuotes = null;
  }


}

module.exports = QuotesController;
