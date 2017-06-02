angular.module('thePresidentsApp')
  .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['$http'];

function PresidentsController($http) {
  var vm = this;
  //vm stands for view model. some people also call this self instead of vm
  vm.all = [];

  function getPresidents() {
    $http
      .get('/presidents')
      .then(function(response) {
        vm.all = response.data.presidents;
    });
  }

  getPresidents();

  vm.newPresident = {};

  vm.addPresident = function addPresident() {
    $http
    .post('/presidents', vm.newPresident)
    .then(function(response) {
      if(vm.newPresident) {
        vm.all.push(response.data.president);
        vm.newPresident = {};
      }
    })
  }


  vm.deletePresident = function deletePresident(presidentToDeleteId) {
    console.log('delete president called');
    $http
    .delete('/presidents/'+presidentToDeleteId)
    .then(function(response) {
      getPresidents();
    })
  }


// ...
}

// function PresidentsController(){
//   this.all = [
//     // { name: 'George Washington', start: 1789, end: 1797 },
//     // { name: 'John Adams', start: 1797, end: 1801 },
//     // { name: 'Thomas Jefferson', start: 1801, end: 1809 },
//     // { name: 'James Madison', start: 1809, end: 1817 }
//   ];

//   this.addPresident = addPresident;
//   this.newPresident = {};

//   function addPresident(){
//     this.all.push(this.newPresident);
//     this.newPresident = {};
//   }
// }
