const angular = require('angular');
require('angular-ui-router');

angular
	.module('criminals', ['ui.router'])
	.config(uiRouterSetup);
	//uiRouterSetup is a fx we write. see below.

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

//this is where we set up the different states of our app
function uiRouterSetup($stateProvider, $urlRouterProvider) {
	$stateProvider
<<<<<<< HEAD
		.state('home', { //this is a reference to the ui-sref or state reference on the index.html
			url: '/', //this is the url you want in your browser
			template: '<home></home>' //this is the name of the component you created
=======
		.state('homePage', {
			url: '/', // telling the browser where to go
			template: '<home></home>' // calling the component that we have created
>>>>>>> 9cc7d65c9018b274e774f628b23a8e539134c1d3
		})
		.state('about', {
			url: '/about',
			// template: '<about></about>' // LAB Goal #1 -- get this line to work
			template: '<h1>About</h1><a ui-sref="home">Home</a>'
		})
		.state('criminals', {
			url: '/criminals',
			template: '<criminals></criminals>'
		})
		.state('criminalsNew', {
			url: '/criminals/new',
			template: '<criminals-new></criminals-new>'
			//this corresponds to criminalsNew in the component name (criminals.new.component)
		})
		.state('criminalsShow', {
			url: '/criminals/:criminalId',
			template: '<criminals-show></criminals-show>'
		});

	// default state
	$urlRouterProvider.otherwise('/');
}
