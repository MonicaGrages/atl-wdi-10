const angular = require('angular');
require('angular-ui-router');

angular.module('RonSwansonApp', ['ui.router'])
  .config(uiRouterSetup);

// Set up your UI Router
uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];


