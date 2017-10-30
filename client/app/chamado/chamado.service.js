(function () {
    'use strict';

    angular
        .module('app')
        .service('chamadoAPI', chamadoAPI)

    chamadoAPI.$inject = ['$http'];
    
    function chamadoAPI($http) {

        this.getAll = function () {
            return $http.get('/ordem-servico/chamado')
        }
        this.getOne = function (sid) {
            return $http.get('/ordem-servico/chamado/' + sid)
        }
        this.create = function (chamado) {
            return $http.put('/ordem-servico/chamado', chamado)
        }
        this.update = function (chamado) {
            return $http.post('/ordem-servico/chamado/' + chamado.sid, chamado)
        }

    }

}());