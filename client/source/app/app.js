(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ui.bootstrap'])
        .config(config)

    function config($routeProvider, $locationProvider) {

        //Hash url
        $locationProvider.hashPrefix('');

        //Menu
        $routeProvider.when('/chamado', {
            templateUrl: 'app/features/chamado/chamado.html',
            controller: 'chamadoCtrl'
        }).otherwise({ redirectTo: '/chamado' });

        $routeProvider.when('/abrir-chamado', {
            templateUrl: 'app/features/chamado/abrir.chamado.html',
            controller: 'abrirChamadoCtrl'
        })

        $routeProvider.when('/usuario', {
            templateUrl: 'app/features/usuario/usuario.html',
            controller: 'usuarioCtrl'
        })

    }

}());