(function () {
    'use strict';

    angular
        .module('app')
        .controller('chamadoDetalhesCtrl', chamadoDetalhesCtrl);

    chamadoDetalhesCtrl.$inject = ['$routeParams', '$uibModal', 'chamadoAPI', 'scopeGlobalService'];

    function chamadoDetalhesCtrl($routeParams, $uibModal, chamadoAPI, scopeGlobalService) {

        var vm = this;
        vm.chamado = {};
        vm.data = scopeGlobalService.value;
        vm.load = load;
        vm.editar = editar;

        load();

        function load() {
            chamadoAPI.getOne($routeParams.chamadoSid).then(function (result) {
                vm.chamado = result.data;
                scopeGlobalService.set(vm.chamado.status, 'status');
            }).catch(function (err) {
                console.log('Error: ' + err)
            })
        };

        function editar(c) {
            $uibModal.open({
                templateUrl: 'app/chamado/chamado-cadastro.html',
                controller: 'chamadoCadastroCtrl',
                resolve: {
                    chamado: function () {
                        return angular.copy(c)
                    }
                }
            }).result.then(function () {
                load();
            })
        };

    };

}());