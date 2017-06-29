(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ui.bootstrap'])
        .config(config)

    function config($routeProvider, $locationProvider) {

        //Menu
        $routeProvider.when('/', {
            templateUrl: 'app/features/chamado/chamado.html',
            controller: 'chamadoCtrl'
        })

        $routeProvider.when('/abrirChamado', {
            templateUrl: 'app/features/abrir-chamado/abrir-chamado.html',
            controller: 'chamadoCtrl'
        })

        $routeProvider.when('/usuario', {
            templateUrl: 'app/features/usuario/usuario.html',
            controller: 'usuarioCtrl'
        })

        //Hash url
        $locationProvider.hashPrefix('');
    }

}());