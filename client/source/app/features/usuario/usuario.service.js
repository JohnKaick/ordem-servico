(function () {
    'use strict';

    angular
        .module('app')
        .service('usuarioAPI', usuarioAPI)

    function usuarioAPI($http) {
        return {
            getAll: function () {
                return $http.get('/ordem-servico/usuario')
            },
            getOne: function (sid) {
                return $http.get('/ordem-servico/usuario/' + sid)
            },
            create: function (usuario) {
                return $http.put('/ordem-servico/usuario', usuario)
            },
            update: function (usuario) {
                return $http.post('/ordem-servico/usuario/' + usuario.sid, usuario)
            },
            destroy: function (usuario) {
                return $http.delete('/ordem-servico/usuario/' + usuario.sid)
            }
        }
    }
}());