(function () {
    'use strict';

    angular
        .module('app')
        .controller('usuarioCtrl', usuarioCtrl)

    function usuarioCtrl($scope, $uibModal, usuarioAPI) {

        $scope.lista = []

        $scope.load = function () {
            usuarioAPI.getAll().then(function (result) {
                $scope.lista = result.data
            }).catch(function (data) {
                $scope.message = 'Error: ' + data
            })
        }

        $scope.cadastrar = function () {
            $uibModal.open({
                templateUrl: 'app/features/usuario/usuario.cadastro.html',
                controller: 'usuarioCadastroCtrl',
                resolve: {
                    usuario: function () {
                        return null
                    }
                }
            }).result.then(function () {
                $scope.load()
            })
        }

        $scope.editar = function (u) {
            $uibModal.open({
                templateUrl: 'app/features/usuario/usuario.cadastro.html',
                controller: 'usuarioCadastroCtrl',
                resolve: {
                    usuario: function () {
                        return angular.copy(u)
                    }
                }
            }).result.then(function () {
                $scope.load()
            })
        }

        $scope.load()
    }

}());