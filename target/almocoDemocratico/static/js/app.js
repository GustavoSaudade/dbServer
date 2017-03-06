'use strict';

var App = angular.module('almocoDemocraticoApp',['ngRoute']);

App.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : './static/pages/login.html',
            controller  : 'login_controller'
        })
        .when('/almocoDemocratico', {
            templateUrl : './static/pages/gestaoDeUsuarios.html',
            controller  : 'UserController'
        });
});


