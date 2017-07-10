(function () {
    'use strict';

    angular
        .module('app')
        .service('chamadoAPI', chamadoAPI)

    function chamadoAPI($http) {

        return {
            getAll = function () {
                return $http.get('/ordem-servico/chamado')
            },
            getOne = function (sid) {
                return $http.get('/ordem-servico/chamado/' + sid)
            },
            create = function (chamado) {
                return $http.put('/ordem-servico/chamado', chamado)
            },
            update = function (chamado) {
                return $http.post('/ordem-servico/chamado/' + chamado.sid, chamado)
            },
        }

    }

}());