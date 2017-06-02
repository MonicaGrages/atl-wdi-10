angular.module('worldbank', [])
  .controller('WorldBankController', WorldBankController);

WorldBankController.$inject = ['$http'];

function WorldBankController($http) {
  var vm = this;
  // vm.all = [];
  vm.recordCount = 0;


  function getRecordCount() {
    $http
      .get('/wbinfo/count')
      .then(function(response) {
        vm.recordCount = response.data;
    });
  }
  getRecordCount();

  function getRegionList() {
    $http
      .get('/wbinfo/uniqueRegions')
      .then(function(response) {
        vm.regionList = response.data;
        console.log(vm.regionList);
      })
  }
  getRegionList();





};
