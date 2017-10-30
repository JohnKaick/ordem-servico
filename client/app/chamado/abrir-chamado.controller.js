(function () {
    'use strict';

    angular
        .module('app')
        .controller('abrirChamadoCtrl', abrirChamadoCtrl);

    abrirChamadoCtrl.$inject = ['$location', 'chamadoAPI'];

    function abrirChamadoCtrl($location, chamadoAPI) {

        var vm = this;
        vm.chamado = {};
        vm.salvar = salvar;

        function salvar(chamado) {
            chamadoAPI.create(chamado).then(function () {
                $location.path('/chamado');
            }).catch(function (err) {
                console.log('Error: ' + err)
            });
        };
    };

}());