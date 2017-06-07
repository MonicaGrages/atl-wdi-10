const angular = require('angular');
require('angular-ui-router');

angular.module('RonSwansonApp', ['ui.router'])
  .config(uiRouterSetup);

// Set up your UI Router
uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

function uiRouterSetup($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('quotes', {
      url: '/quotes',
      template: '<quotes></quotes'
    });
}
