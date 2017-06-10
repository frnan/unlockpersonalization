'use strict';

var tlApp = angular.module('tlApp', ['ct.ui.router.extras']);

var socket = io.connect('http://localhost:1337');

tlApp.config([ '$stateProvider', '$urlRouterProvider','$stickyStateProvider', '$httpProvider',
		function($stateProvider, $urlRouterProvider, $stickyStateProvider, $httpProvider) {

		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state("main",{
				url : "/",
				templateUrl : "modules/main/views/main.view.html",
				controller : 'MainCtrl'
			});

}]);
