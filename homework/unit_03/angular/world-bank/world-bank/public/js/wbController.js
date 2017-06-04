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
        // console.log(vm.regionList);
      })
  }
  getRegionList();

  vm.getRecordsByRegionName = getRecordsByRegionName;
  function getRecordsByRegionName (regionName) {
    $http
      .get('/wbinfo/byName/'+regionName)
      .then(function(response) {
        //this returns an array
        vm.recordsByRegion = response.data;
        console.log(vm.recordsByRegion);
      })
  }

  // vm.regionSearch = regionSearch;
  // function regionSearch (regionNameSearched) {
  //   console.log('region search called');
  //   for(var i=0; i<vm.regionList.length; i++) {
  //     if (vm.regionList[i] != regionNameSearched) {
  //       regionNameSearched.notSearchedFor = true;
  //     }
  //   }
  // }
  // regionSearch('Federal Democratic Republic of Ethiopia');





};
