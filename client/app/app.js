(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ui.bootstrap'])
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider']
    function config($routeProvider, $locationProvider, $httpProvider) {

        $routeProvider
            .when('/chamado', {
                templateUrl: 'app/chamado/chamado.html',
                controller: 'chamadoCtrl',
                controllerAs: 'vm'
            })
            .when('/abrir-chamado', {
                templateUrl: 'app/chamado/abrir-chamado.html',
                controller: 'abrirChamadoCtrl',
                controllerAs: 'vm'
            })
            .when('/usuario', {
                templateUrl: 'app/usuario/usuario.html',
                controller: 'usuarioCtrl',
                controllerAs: 'vm'
            })
            .when('/chamado/:chamadoSid/chamado-detalhes', {
                templateUrl: 'app/chamado/chamado-detalhes.html',
                controller: 'chamadoDetalhesCtrl',
                controllerAs: 'vm'
            })
            .when('/chamado/:chamadoSid/atividades', {
                templateUrl: 'app/atividade/atividade.html',
                controller: 'atividadeCtrl',
                controllerAs: 'vm'
            })
            .when('/chamado/:chamadoSid/feedback', {
                templateUrl: 'app/feedback/feedback.html',
                controller: 'feedbackCtrl',
                controllerAs: 'vm'
            })

        $routeProvider.otherwise({ redirectTo: '/chamado' });

        $locationProvider.hashPrefix('');

    };

    /*
    run.$inject = ['$rootScope', '$http', ' $window', '$location', 'authorization'];
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

    }*/

}());