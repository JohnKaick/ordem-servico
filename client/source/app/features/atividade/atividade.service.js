(function () {
    'use strict';

    angular
        .module('app')
        .service('atividadeAPI', atividadeAPI)

    function atividadeAPI($http) {

        this.getAll = function (chamadoSid) {
            return $http.get('/ordem-servico/atividade/chamado/' + chamadoSid)
        }
        this.getOne = function (sid) {
            return $http.get('/ordem-servico/atividade/' + sid)
        }
        this.create = function (chamadoSid, atividade) {
            return $http.put('/ordem-servico/atividade/' + chamadoSid, atividade)
        }
        this.destroy = function (atividade) {
            return $http.delete('/ordem-servico/atividade/' + atividade.sid)
        }

    }

}());