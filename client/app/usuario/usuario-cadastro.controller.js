(function () {
    'use strict';

    angular
        .module('app')
        .controller('usuarioCadastroCtrl', usuarioCadastroCtrl);

    usuarioCadastroCtrl.$inject = ['$uibModalInstance', 'usuarioAPI', 'usuario'];

    function usuarioCadastroCtrl($uibModalInstance, usuarioAPI, usuario) {

        var vm = this;
        vm.usuario = usuario || {};
        vm.salvar = salvar;
        vm.cancelar = cancelar;

        function salvar(usuario) {
            if (!usuario.id) {
                usuarioAPI.create(usuario).then(function () {
                    $uibModalInstance.close();
                }).catch(function (data) {
                    console.log('Error:' + data);
                })
            } else {
                usuarioAPI.update(usuario).then(function () {
                    $uibModalInstance.close();
                }).catch(function (data) {
                    console.log('Error:' + data);
                })
            };

        };

        function cancelar() {
            $uibModalInstance.dismiss();
        };
    }
}());