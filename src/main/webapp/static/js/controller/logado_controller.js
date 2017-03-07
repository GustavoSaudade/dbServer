'use strict';

App.controller('logado_Controller', ['$scope', '$location', 'RestauranteService', function($scope, $location, RestauranteService) {
    
    $scope.headerTitle = 'BEM-VINDO!';
    
    var self = this;
    self.restaurante={id:null,nome:'',tipo:'',aceitaVale:false};
    self.restaurantes=[];

    self.submit = submit;
    self.edit = edit;
    self.remove = remove;
    self.reset = reset;


    fetchAllRestaurantes();

    function fetchAllRestaurantes(){
        RestauranteService.fetchAllRestaurantes()
            .then(
            function(d) {
                self.restaurantes = d;
            },
            function(errResponse){
                console.error('Error while fetching Restaurantes');
            }
        );
    }

    function createRestaurante(restaurante){
        RestauranteService.createRestaurante(restaurante)
            .then(
            fetchAllRestaurantes,
            function(errResponse){
                console.error('Error while creating Restaurante');
            }
        );
    }

    function updateRestaurante(restaurante, id){
        RestauranteService.updateRestaurante(restaurante, id)
            .then(
            fetchAllRestaurantes,
            function(errResponse){
                console.error('Error while updating Restaurante');
            }
        );
    }

    function deleteRestaurante(id){
        RestauranteService.deleteRestaurante(id)
            .then(
            fetchAllRestaurantes,
            function(errResponse){
                console.error('Error while deleting Restaurante');
            }
        );
    }

    function submit() {
        if(self.restaurante.id===null){
            console.log('Saving New restaurante', self.restaurante);
            createRestaurante(self.restaurante);
        }else{
            updateRestaurante(self.restaurante, self.restaurante.id);
            console.log('Restaurante updated with id ', self.restaurante.id);
        }
        reset();
    }

    function edit(id){
        console.log('id to be edited', id);
        for(var i = 0; i < self.restaurantes.length; i++){
            if(self.restaurantes[i].id === id) {
                self.restaurante = angular.copy(self.restaurantes[i]);
                break;
            }
        }
    }

    function remove(id){
        console.log('id to be deleted', id);
        if(self.restaurante.id === id) {//clean form if the restaurante to be deleted is shown there.
            reset();
        }
        deleteRestaurante(id);
    }


    function reset(){
        self.restaurante={id:null,nome:'',tipo:'',aceitaVale:false};
        $scope.myForm.$setPristine(); //reset Form
    }
    
}]);