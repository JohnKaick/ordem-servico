(function () {
    'use strict';

    angular
        .module('app')
        .controller('feedbackCtrl', feedbackCtrl)

    function feedbackCtrl($scope, $routeParams, feedbackAPI) {

        $scope.salvar = function (feedback) {
            feedbackAPI.create($routeParams.chamadoSid, feedback).then(function () {
                $scope.message = 'Obrigado pelo feedback!'
            }).catch(function (data) {
                $scope.message = 'Error: ' + data
            })
        }
    }

}());