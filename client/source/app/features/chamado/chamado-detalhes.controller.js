(function () {
    'use strict';

    angular
        .module('app')
        .controller('chamadoDetalhesCtrl', chamadoDetalhesCtrl)

    function chamadoDetalhesCtrl($scope, $routeParams, $uibModal, chamadoAPI, scopeGlobalService) {

        $scope.data = scopeGlobalService.value;

        $scope.load = function () {
            chamadoAPI.getOne($routeParams.chamadoSid).then(function (result) {
                $scope.chamado = result.data
                scopeGlobalService.set($scope.chamado.status, 'status')
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