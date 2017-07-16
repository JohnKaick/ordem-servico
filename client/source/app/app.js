(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ui.bootstrap'])
        .config(config)

    function config($routeProvider, $locationProvider) {

        $routeProvider.when('/chamado', {
            templateUrl: 'app/features/chamado/chamado.html',
            controller: 'chamadoCtrl'
        }).when('/abrir-chamado', {
            templateUrl: 'app/features/chamado/abrir-chamado.html',
            controller: 'abrirChamadoCtrl'
        }).when('/usuario', {
            templateUrl: 'app/features/usuario/usuario.html',
            controller: 'usuarioCtrl'
        }).when('/chamado/:chamadoSid/chamado-detalhes', {
            templateUrl: 'app/features/chamado/chamado-detail.html',
            controller: 'chamadoDetailCtrl'
        }).when('/chamado/:chamadoSid/acompanhamento', {
            templateUrl: 'app/features/acompanhamento/acompanhamento.html',
            controller: 'acompanhamentoCtrl'
        }).when('/chamado/:chamadoSid/feedback', {
            templateUrl: 'app/features/feedback/feedback.html',
            controller: 'feedbackCtrl'
        }).otherwise({ redirectTo: '/chamado' })

        $locationProvider.hashPrefix('');

    }

}());