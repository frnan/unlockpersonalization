'use strict';

var tlApp = angular.module('tlApp', ['ct.ui.router.extras', 'ngAnimate']);

var socket = io.connect('http://localhost:1337');

tlApp.config([ '$stateProvider', '$urlRouterProvider','$stickyStateProvider', '$httpProvider',
		function($stateProvider, $urlRouterProvider, $stickyStateProvider, $httpProvider) {

		$urlRouterProvider.otherwise("/main");

		$stateProvider
			.state("main",{
				url : "/main",
				templateUrl : "modules/main/views/main.view.html",
				controller : 'MainCtrl'
			})
			.state("adviser", {
				url : "/adviser",
				templateUrl : "modules/adviser/views/adviser.view.html",
				controller : 'AdviserCtrl'
			})
			.state("client",{
				url : "/client",
				templateUrl : "modules/adviser/views/client.view.html",
				controller: 'ClientCtrl'
			});

}]);
