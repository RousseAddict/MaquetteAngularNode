'use strict';


var app = angular.module('app', ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    //mes routes
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'app/pages/register.html',
        controller: 'registerCtrl'
    })
}]);