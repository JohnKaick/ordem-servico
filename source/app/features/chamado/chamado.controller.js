(function () {
    'use strict';

    angular
        .module('app')
        .controller('chamadoCtrl', chamadoCtrl)

    function chamadoCtrl($scope, chamadoAPI) {

        $scope.load = function () {
            chamadoAPI.getAll().then(function (result) {
                $scope.lista = result.data
            }).catch(function (data) {
                $scope.message = 'Error: ' + data
            })
        }

        $scope.load()
    }

}());