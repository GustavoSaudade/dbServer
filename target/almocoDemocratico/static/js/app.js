'use strict';

var App = angular.module('almocoDemocraticoApp',['ngRoute']);

App.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : './static/pages/login.html',
            controller  : 'login_controller'
        })
        .when('/logado', {
            templateUrl : './static/pages/logado.html',
            controller  : 'logado_Controller'
        })
        .when('/errologin', {
            templateUrl : './static/pages/erroLogin.html',
            controller  : 'erroLogin_Controller'
        })
        .when('/almocoDemocratico', {
            templateUrl : './static/pages/gestaoDeUsuarios.html',
            controller  : 'UserController'
        });
});


