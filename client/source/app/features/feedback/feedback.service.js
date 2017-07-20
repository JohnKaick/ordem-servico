(function () {
    'use strict';

    angular
        .module('app')
        .service('feedbackAPI', feedbackAPI)

    function feedbackAPI($http) {

        this.create = function (feedback) {
            return $http.put('/ordem-servico/feedback', feedback)
        }

    }

}());