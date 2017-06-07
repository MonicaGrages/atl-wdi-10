// console.log("Quotes Controller Works!")

QuotesController.$inject = ['QuotesService'];

//Your QUOTES CONTROLLER HERE!
function QuotesController(QuotesService) {
  let vm = this;
  vm.quote="Ron Swanson Quote Goes Here";
  vm.savedQuotes = ['Clear alcohols are for rich women on diets.'];


  vm.getQuote = getQuote;
  function getQuote() {
    QuotesService.getQuote()
      .then(function (response) {
        vm.quote = response.data[0];
        //this should all just be an ng-show, right?
        // var quotePlace = document.getElementById('ronSwansonQuote');
        // var saveButton = document.createElement("button");
        // quotePlace.appendChild(saveButton);
      })
  }

  vm.saveQuote = saveQuote;
  function saveQuote(quoteToSave) {
    QuotesService.saveQuote();
  }

  vm.getSavedQuotes = getSavedQuotes;
  function getSavedQuotes() {
    QuotesService.getSavedQuotes();
  }


}

module.exports = QuotesController;
