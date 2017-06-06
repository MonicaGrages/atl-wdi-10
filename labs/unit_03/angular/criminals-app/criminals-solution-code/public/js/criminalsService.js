CriminalsService.$inject = ['$http'];

function CriminalsService($http) {

  var self = this;


  self.getCriminals = function() {
    // console.log('getCriminals in CriminalsService');
    return $http.get('/criminals');
  }

  self.addCriminal = function(newCriminal) {
    // console.log('addCriminal - CriminalsService');
    var newCriminalPromise = $http.post('/criminals', newCriminal);
    return newCriminalPromise;
  }

  self.deleteCriminal = function(criminalId) {
    var criminalDeletePromise = $http.delete('/criminals/'+criminalId);
    return criminalDeletePromise;
  }

}

angular.module('InfamousCriminals')
  .service('CriminalsService', CriminalsService);

