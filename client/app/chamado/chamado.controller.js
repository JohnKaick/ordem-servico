(function () {
    'use strict';

    angular
        .module('app')
        .controller('chamadoCtrl', chamadoCtrl);

    chamadoCtrl.$inject = ['chamadoAPI'];

    function chamadoCtrl(chamadoAPI) {

        var vm = this;
        vm.chamados = [];
        vm.load = load;

        load();

        function load() {
            chamadoAPI.getAll().then(function (result) {
                vm.chamados = result.data;
            }).catch(function (err) {
                console.log('Error: ' + err);
            });
        };

    };

}());