'use strict';

App.controller('login_controller', ['$scope','UserService', function($scope, UserService) {
    
    $scope.titulo = 'ALMOÇO DEMOCRÁTICO';
    $scope.message = 'Look! I am an about page.';

    $scope.usuario = {
        username: '',
        password: ''
    };

    $scope.requestAutenticacao = function() {
    	UserService.logar($scope.usuario.username)
        .then(
        function(data){
        	console.log("sucesso!" + data)
        },
        function(errResponse){
            console.log('Error while Login' + errResponse);
        }
    );
    }
}]);