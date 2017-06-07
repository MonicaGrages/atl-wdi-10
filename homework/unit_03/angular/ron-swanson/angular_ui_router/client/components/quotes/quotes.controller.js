console.log("Quotes Controller Works!")

QuotesController.$inject = ['QuotesService'];

//Your QUOTES CONTROLLER HERE!
function QuotesController(QuotesService) {
  let vm = this;
    // vm.quote = {};
    vm.quote="Ron Swanson Quote Goes Here";


  vm.getQuote = getQuote;
  function getQuote() {
    console.log('make an API call to get a quote');
    QuotesService.getQuote()
      .then(function (response) {
        // console.log(response.data[0]);
        vm.quote = response.data[0];
      })
  }

}

module.exports = QuotesController;
