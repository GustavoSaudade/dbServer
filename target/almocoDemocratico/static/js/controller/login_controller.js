'use strict';

App.controller('login_controller', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {
    
    $scope.headerTitle = 'ALMOÇO DEMOCRÁTICO';
    $scope.message = 'Look! I am an about page.';

    $scope.usuario = {
        username: '',
        password: ''
    };

    $scope.requestAutenticacao = function() {
    	UserService.logar($scope.usuario.username)
        .then(
        function(data){
        	console.log("sucesso!" + data);
            $location.path("/logado");

        },
        function(errResponse){
            console.log('Erro de Login' + errResponse);
            $location.path("/errologin");
        }
    );
    }
}]);