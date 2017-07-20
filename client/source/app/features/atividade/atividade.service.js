(function () {
    'use strict';

    angular
        .module('app')
        .service('atividadeAPI', atividadeAPI)

    function atividadeAPI($http) {

        this.getAll = function () {
            return $http.get('/ordem-servico/atividade')
        }
        this.getOne = function (sid) {
            return $http.get('/ordem-servico/atividade/' + sid)
        }
        this.create = function (atividade) {
            return $http.put('/ordem-servico/atividade', atividade)
        }
        this.destroy = function (atividade) {
            return $http.delete('/ordem-servico/atividade/' + atividade.sid)
        }

    }

}());