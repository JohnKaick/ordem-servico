(function () {
    'use strict';

    angular.module('app')
        .controller('chamadoCadastroCtrl', chamadoCadastroCtrl)

    function chamadoCadastroCtrl($scope, $uibModalInstance, chamado, chamadoAPI) {

        $scope.chamado = chamado || {}

        $scope.salvar = function (chamado) {
            chamadoAPI.update(chamado).then(function (result) {
                $uibModalInstance.close();
            }).catch(function (err) {
                console.log('Error: ' + err)
            })
        }

        $scope.cancelar = function() {
            $uibModalInstance.dismiss();
        }

    }
}());