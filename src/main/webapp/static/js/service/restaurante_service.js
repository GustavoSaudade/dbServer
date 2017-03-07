'use strict';

App.factory('RestauranteService', ['$http', '$q', function($http, $q){

    var REST_SERVICE_URI = 'http://localhost:8080/almocoDemocratico/restaurante/';

    var factory = {
    	fetchAllRestaurantes: fetchAllRestaurantes,
        createRestaurante: createRestaurante,
        updateRestaurante: updateRestaurante,
        deleteRestaurante: deleteRestaurante
    };

    return factory;

    function fetchAllRestaurantes() {
        var deferred = $q.defer();
        $http.get(REST_SERVICE_URI)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while fetching Restaurantes');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

    function createRestaurante(restaurante) {
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI, restaurante)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while creating Restaurante');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }


    function updateRestaurante(restaurante, id) {
        var deferred = $q.defer();
        $http.put(REST_SERVICE_URI+id, restaurante)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while updating Restaurante');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

    function deleteRestaurante(id) {
        var deferred = $q.defer();
        $http.delete(REST_SERVICE_URI+id)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while deleting RestauranteService');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

}]);
