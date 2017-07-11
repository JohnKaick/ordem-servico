(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ui.bootstrap'])
        .config(config)

    function config($routeProvider, $locationProvider) {

        //Menu
        $routeProvider.when('/chamado', {
            templateUrl: 'app/features/chamado/chamado.html',
            controller: 'chamadoCtrl'
        })

        $routeProvider.when('/abrir-chamado', {
            templateUrl: 'app/features/chamado/abrir-chamado.html',
            controller: 'abrirChamadoCtrl'
        })

        $routeProvider.when('/chamado-detail', {
            templateUrl: 'app/features/chamado/chamado-detail.html',
            controller: 'chamadoDetailCtrl'
        })

        $routeProvider.when('/usuario', {
            templateUrl: 'app/features/usuario/usuario.html',
            controller: 'usuarioCtrl'
        })

        //Hash url
        $locationProvider.hashPrefix('');

    }

}());