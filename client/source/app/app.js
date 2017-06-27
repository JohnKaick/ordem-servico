(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ui.bootstrap'])
        .config(config)

    function config($routeProvider) {
        //Home
        $routeProvider.when('/home', {
            templateUrl: 'app/features/home/home.html',
            controller: 'homeCtrl'
        })

        $routeProvider.otherwise({
            redirectTo: '/home'
        })

        //Menu
        $routeProvider.when('/chamado', {
            templateUrl: 'app/features/chamado/chamado.html',
            controller: 'chamadoCtrl'
        })

        $routeProvider.when('/abrirChamado', {
            templateUrl: 'app/features/abrir-chamado/abrir-chamado.html',
            controller: 'abrirChamadoCtrl'
        })

        $routeProvider.when('/usuario', {
            templateUrl: 'app/features/usuario/usuario.html',
            controller: 'usuarioCtrl'
        })
    }

}());