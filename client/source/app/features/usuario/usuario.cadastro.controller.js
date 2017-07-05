(function () {
    'use strict';

    angular
        .module('app')
        .controller('usuarioCadastroCtrl', usuarioCadastroCtrl)

    function usuarioCadastroCtrl($scope, usuarioAPI, $uibModalInstance) {

        $scope.salvar = function (usuario) {
            if (!usuario.sid) {
                usuarioAPI.create(usuario).then(function () {
                    $uibModalInstance.close();
                }).catch(function (data) {
                    $scope.message = 'Error:' + data
                })
            } else {
                usuarioAPI.update(usuario).then(function () {
                    $uibModalInstance.close();
                }).catch(function (data) {
                    $scope.message = 'Error:' + data
                })
            }

        }

        $scope.cancelar = function () {
            $uibModalInstance.dismiss();
        }
    }
}());