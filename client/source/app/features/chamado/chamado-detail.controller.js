(function () {
    'use strict';

    angular
        .module('app')
        .controller('chamadoDetailCtrl', chamadoDetailCtrl)

    function chamadoDetailCtrl($scope, $routeParams, $uibModal, chamadoAPI) {

        $scope.load = function () {
            chamadoAPI.getOne($routeParams.chamadoSid).then(function (result) {
                $scope.chamado = result.data
            }).catch(function (data) {
                $scope.message = 'Error: ' + data
            })
        }

        $scope.editar = function (c) {
            $uibModal.open({
                templateUrl: 'app/features/chamado/chamado.cadastro.html',
                controller: 'chamadoCadastroCtrl',
                resolve: {
                    chamado: function () {
                        return angular.copy(c)
                    }
                }
            }).result.then(function () {
                $scope.load()
            })
        }

        $scope.load()
    }
}());