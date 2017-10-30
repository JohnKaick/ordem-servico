(function () {
    'use strict';

    angular
        .module('app')
        .controller('usuarioCtrl', usuarioCtrl)

    usuarioCtrl.$inject = ['$uibModal', 'usuarioAPI'];

    function usuarioCtrl($uibModal, usuarioAPI) {

        var vm = this;
        vm.lista = [];
        vm.usuario = {};
        vm.load = load;
        vm.cadastrar = cadastrar;
        vm.editar = editar;

        load();

        function load() {
            usuarioAPI.getAll().then(function (result) {
                vm.lista = result.data;
            }).catch(function (data) {
                console.log('Error:' + data);
            })
        };

        function cadastrar() {
            $uibModal.open({
                templateUrl: 'app/usuario/usuario-cadastro.html',
                controller: 'usuarioCadastroCtrl',
                resolve: {
                    usuario: function () {
                        return null
                    }
                },
            }).result.then(function () {
                load();
            });
        };

        function editar(user) {
            $uibModal.open({
                templateUrl: 'app/usuario/usuario-cadastro.html',
                controller: 'usuarioCadastroCtrl',
                resolve: {
                    usuario: function () {
                        return angular.copy(user)
                    }
                },
            }).result.then(function () {
                load();
            })
        };

    };

}());