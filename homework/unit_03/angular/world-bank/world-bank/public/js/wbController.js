angular.module('worldbank', [])
  .controller('WorldBankController', WorldBankController);

WorldBankController.$inject = ['$http'];

function WorldBankController($http) {
  var vm = this;
  vm.activate = activate;

  function activate() {
    vm.getRecordsByRegionName = getRecordsByRegionName;
    vm.addRecord = addRecord;
    getRecordCount();
    getRegionList();
  }

  function getRecordCount() {
    $http
      .get('/wbinfo/count')
      .then(function(response) {
        vm.recordCount = response.data;
    });
  }

  function getRegionList() {
    $http
      .get('/wbinfo/uniqueRegions')
      .then(function(response) {
        vm.regionList = response.data;
        // console.log(vm.regionList);
      })
  }

  function getRecordsByRegionName (regionName) {
    $http
      .get('/wbinfo/byName/'+regionName)
      .then(function(response) {
        //this returns an array
        vm.recordsByRegion = response.data;
        console.log(vm.recordsByRegion);
      })
  }

  function addRecord() {
    $http
      .post('/wbinfo', vm.newRecord)
      .then(function(response) {
        vm.activate();
        vm.getRecordsByRegionName(response.data.region);
      })
  }

  activate();
};
