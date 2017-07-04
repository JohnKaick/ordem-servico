(function () {
    'use strict';

    angular
        .module('app')
        .controller('usuarioCtrl', usuarioCtrl)

    function usuarioCtrl($scope, $uibModal, usuarioAPI) {

        $scope.carregaLista = function () {
            usuarioAPI.obterLista().then(function (result) {
                $scope.listas = result.data
            }).catch(function (data) {
                $scope.message = 'Error: ' + data
            })
        }

        $scope.cadastrar = function () {
            $uibModal.open({
                templateUrl: '/features/usuario/usuario.cadastro.html',
                controller: 'usuarioCtrl',
            }).result.then(function () {
                $scope.carregaLista()
            })
        }
    }

}());