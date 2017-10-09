(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ui.bootstrap'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];
    run.$inject = ['$rootScope', '$http', ' $window', '$location', 'authorization'];

    function config($routeProvider, $locationProvider, $httpProvider) {

        $routeProvider
            .when('/chamado', {
                templateUrl: 'app/features/chamado/chamado.html',
                controller: 'chamadoCtrl'
            })
            .when('/abrir-chamado', {
                templateUrl: 'app/features/chamado/abrir-chamado.html',
                controller: 'abrirChamadoCtrl'
            })
            .when('/usuario', {
                templateUrl: 'app/features/usuario/usuario.html',
                controller: 'usuarioCtrl'
            })
            .when('/chamado/:chamadoSid/chamado-detalhes', {
                templateUrl: 'app/features/chamado/chamado-detalhes.html',
                controller: 'chamadoDetalhesCtrl'
            })
            .when('/chamado/:chamadoSid/atividades', {
                templateUrl: 'app/features/atividade/atividade.html',
                controller: 'atividadeCtrl'
            })
            .when('/chamado/:chamadoSid/feedback', {
                templateUrl: 'app/features/feedback/feedback.html',
                controller: 'feedbackCtrl'
            })

        $locationProvider.hashPrefix('');

        $httpProvider.interceptors.push('handleResponseError')

    }

    function run($rootScope, $http, $window, $location, authorization) {

        $rootScope.globals = {}
        $rootScope.globals.connected = false
        $rootScope.globals.key = 'jd3wTRlyZxWsCHUTZF1sEGl7QQr3gLWGJkQkEBNkTdHMrdd9AAM8RnQ2GWDdnV5'

        validateUser()

        $rootScope.$on('$locationChangeStart', function () {
            validateUser()
        })

        function validateUser() {
            let user = authorization.check()
            let authPage = '/login.html'
            let isAuthPage = $window.location.href.includes(authPage)

            if (!user && !isAuthPage) {
                $window.location.href = authPage
            } else if (user && !user.isValid) {
                authorization.validate(user.token, (err, valid) => {
                    if (!valid) {
                        $window.location.href = authPage
                    } else {
                        user.isValid = true
                        $http.defaults.headers.common.Authorization = user.token
                        isAuthPage ? $window.location.href = '/' : $location.path('/chamado')
                    }
                })
            }

        }

    }

}());