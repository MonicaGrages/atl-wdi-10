console.log("Quotes Controller Works!")

//Your QUOTES CONTROLLER HERE!
function QuotesController() {
  let vm = this;
    // vm.quote = {};
    vm.quote="hi i'm ron swanson";

  activate();
  function activate () {
    getQuote();
  }

  function getQuote() {
    console.log('make an API call to get a quote');
  }

}

module.exports = QuotesController;
