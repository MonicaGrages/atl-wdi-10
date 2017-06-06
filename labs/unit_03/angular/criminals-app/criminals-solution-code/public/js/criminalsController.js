angular.module('InfamousCriminals')
.controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['CriminalsService'];

function CriminalsController(CriminalsService){
  var vm = this;

  vm.all = [];
  vm.newCriminal = {};
  vm.getCriminals = getCriminals;
  vm.addCriminal = addCriminal;
  vm.deleteCriminal = deleteCriminal;


  function getCriminals(){
    CriminalsService.getCriminals()
      .then(function(response){
      vm.all = response.data.criminals;
    });
  }
  getCriminals();

  function addCriminal(){
    CriminalsService.addCriminal(vm.newCriminal)
      .then(function() {
        vm.getCriminals();
        vm.newCriminal = {};
      })
    };


  function deleteCriminal(criminal){
    CriminalsService.deleteCriminal(criminal._id)
    .then(function (response) {
      var index = vm.all.indexOf(criminal);
      vm.all.splice(index, 1);
    });

  };

}
