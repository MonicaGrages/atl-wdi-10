angular.module('worldbank', [])
  .controller('WorldBankController', WorldBankController);

WorldBankController.$inject = ['$http'];

function WorldBankController($http) {
  console.log('hello');
  var vm = this;
  vm.all = [];
  vm.count = 0;


  function getWbInfo() {
    $http
      .get('/wbinfo/count')
      .then(function(response) {
        vm.count = response.data;
        console.log(vm.count);
    });
  }

  getWbInfo();






};
