(function () {
    'use strict';

    angular
        .module('app')
        .service('usuarioAPI', usuarioAPI)

    function usuarioAPI($http) {

        this.getAll = function () {
            return $http.get('/ordem-servico/usuario')
        }
        this.getOne = function (sid) {
            return $http.get('/ordem-servico/usuario/' + sid)
        }
        this.create = function (usuario) {
            return $http.put('/ordem-servico/usuario', usuario)
        }
        this.update = function (usuario) {
            return $http.post('/ordem-servico/usuario/' + usuario.id, usuario)
        }
    }

}());