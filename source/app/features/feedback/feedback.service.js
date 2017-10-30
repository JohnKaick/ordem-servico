(function () {
    'use strict';

    angular
        .module('app')
        .service('feedbackAPI', feedbackAPI)

    function feedbackAPI($http) {

        this.create = function (chamadoSid, feedback) {
            return $http.put('/ordem-servico/feedback/' + chamadoSid, feedback)
        }

    }

}());