(function () {
    'use strict';

    angular.module('app')
        .controller('chamadoCadastroCtrl', chamadoCadastroCtrl);

    chamadoCadastroCtrl.$inject = ['$uibModalInstance', 'chamado', 'chamadoAPI'];

    function chamadoCadastroCtrl($uibModalInstance, chamado, chamadoAPI) {

        var vm = this;
        vm.chamado = chamado || {};
        vm.salvar = salvar;
        vm.cancelar = cancelar;

        function salvar(chamado) {
            chamadoAPI.update(chamado).then(function (result) {
                $uibModalInstance.close();
            }).catch(function (err) {
                console.log('Error: ' + err);
            })
        };

        function cancelar() {
            $uibModalInstance.dismiss();
        };

    };

}());