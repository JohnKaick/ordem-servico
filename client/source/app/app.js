(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ui.bootstrap'])
        .config(config)

    function config($routeProvider, $locationProvider) {

        // Menu
        $routeProvider.when('/chamado', {
            templateUrl: 'app/features/chamado/chamado.html',
            controller: 'chamadoCtrl'
        })

        $routeProvider.when('/abrir-chamado', {
            templateUrl: 'app/features/chamado/abrir-chamado.html',
            controller: 'abrirChamadoCtrl'
        })

        $routeProvider.when('/usuario', {
            templateUrl: 'app/features/usuario/usuario.html',
            controller: 'usuarioCtrl'
        })

        // Menu-detail
        $routeProvider.when('/chamado-detalhes', {
            templateUrl: 'app/features/chamado/chamado-detail.html',
            controller: 'chamadoDetailCtrl'
        })

        $routeProvider.when('/acompanhamento', {
            templateUrl: 'app/features/acompanhamento/acompanhamento.html',
            controller: 'acompanhamentoCtrl'
        })

        $routeProvider.when('/feedback', {
            templateUrl: 'app/features/feedback/feedback.html',
            controller: 'feedbackCtrl'
        })

        // Hash url
        $locationProvider.hashPrefix('');

    }

}());