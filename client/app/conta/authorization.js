(function () {
    'use strict';

    angular
        .module('app')
        .factory('authorization', authorization);

    authorization.$inject = ['$http', '$location', '$rootScope', 'contaAPI'];

    function authorization($http, $location, $rootScope, contaAPI) {

        let user = null;

        function check() {
            if (!user) {
                user = JSON.parse(localStorage.getItem($rootScope.globals.key));
            }
            return user
        };

        function login(email, senha, callback) {
            contaAPI.authenticate(email, senha).then(function (response) {
                if (response.data.token) {
                    localStorage.setItem($rootScope.globals.key, response.data.token);
                    $http.defaults.headers.common.Authorization = response.data.token;
                    $rootScope.globals.connected = true;
                    $rootScope.globals.loginTime = new Date();
                    $rootScope.globals.usuario = response.data.usuario;
                    $rootScope.globals.permissao = response.data.permissao;
                    if (callback) callback(null, response.data);
                } else {
                    if (callback) callback(response.data.errors, null);
                }
            }).catch(function (response) {
                if (callback) callback(response.data.errors, null);
            });
        };

        function logout(callback) {
            user = null;
            localStorage.removeItem($rootScope.globals.key);
            $http.defaults.headers.common.Authorization = null;
            $rootScope.globals.connected = false;
            $rootScope.globals.loginTime = null;
            $rootScope.globals.usuario = null;
            $rootScope.globals.permissao = null;
            if (callback) callback(null);
        };

        function validate(token, callback) {
            if (token) {
                contaAPI.validate(token).then(response => {
                    if (!response.data.valid) {
                        logout();
                    } else {
                        $http.defaults.headers.common.Authorization = check().token;
                    }
                    if (callback) callback(null, response.data.valid);
                }).catch(function (response) {
                    if (callback) callback(response.data.errors);
                })
            } else {
                if (callback) callback('Token inválido.');
            }
        };

        return { check, login, logout, validate }
    };

}());