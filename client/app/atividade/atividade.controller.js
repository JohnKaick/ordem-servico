(function () {
    'use strict';

    angular
        .module('app')
        .controller('atividadeCtrl', atividadeCtrl);

    atividadeCtrl.$inject = ['$routeParams', 'atividadeAPI', 'scopeGlobalService'];

    function atividadeCtrl($routeParams, atividadeAPI, scopeGlobalService) {

        var vm = this;
        vm.lista = [];
        vm.cadastro = {};
        vm.data = scopeGlobalService.value;
        vm.load = load;
        vm.finalizar = finalizar;
        vm.abrir = abrir;
        vm.salvar = salver;
        vm.excluir = excluir;

        load();

        function load() {
            atividadeAPI.getAll($routeParams.chamadoSid).then(function (result) {
                vm.lista = result.data;
            }).catch(function (err) {
                console.log('Error: ' + err);
            });
        };

        function finalizar(atividade) {
            atividade.status = 'fechado';
            atividadeAPI.create($routeParams.chamadoSid, atividade).then(function (result) {
                scopeGlobalService.set(atividade.status, 'status');
                load();
            }).catch(function (err) {
                console.log('Error: ' + err);
            });
        };

        function abrir(atividade) {
            atividade.status = 'aberto';
            atividadeAPI.create($routeParams.chamadoSid, atividade).then(function (result) {
                scopeGlobalService.set(atividade.status, 'atividade');
                load();
            }).catch(function (err) {
                console.log('Error: ' + err);
            });
        };

        function salvar(atividade) {
            atividade.status = 'pendente';
            atividadeAPI.create($routeParams.chamadoSid, atividade).then(function (result) {
                scopeGlobalService.set(atividade.status, 'status');
                load();
            }).catch(function (err) {
                console.log('Error: ' + err);
            });
        };

        function excluir(atividade) {
            atividadeAPI.destroy(atividade).then(function (result) {
                load();
            }).catch(function (err) {
                console.log('Error: ' + err);
            });
        };

    };

}());