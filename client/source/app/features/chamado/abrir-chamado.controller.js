(function () {
    'use strict';

    angular
        .module('app')
        .controller('abrirChamadoCtrl', abrirChamadoCtrl)

    function abrirChamadoCtrl($scope, $location, chamadoAPI) {

        $scope.salvar = function (chamado) {
            chamadoAPI.create(chamado).then(function () {
                $location.path('/chamado')
            }).catch(function (data) {
                $scope.message = 'Error:' + data
            })
        }
    }

}());