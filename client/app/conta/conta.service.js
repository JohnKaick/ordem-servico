(function () {
    'use strict';

    angular
        .module('app')
        .service('contaAPI', contaAPI);

    contaAPI.$inject = ['$http'];

    function contaAPI($http) {

        this.authenticate = function (email, senha) {
            return $http.post('/ordem-servico/conta/authenticate', {
                login: email,
                password: senha
            })
        };
        this.validate = function (token) {
            return $http.post('/ordem-servico/conta/authenticate/' + token);
        };
        this.recoverAccount = function (email) {
            return $http.post('/ordem-servico/conta/recover-account', email);
        };
        this.confirmRecover = function (token) {
            return $http.post('/ordem-servico/conta/confirm-recover/' + token);
        };
        this.changePassword = function (SenhaAtual, NovaSenha) {
            return $http.post('/ordem-servico/conta/change-password', {
                SenhaAtual: SenhaAtual,
                NovaSenha: NovaSenha
            });
        };
        this.blockAccess = function (usuarioId) {
            return $http.post('/ordem-servico/conta/block-access/' + usuarioId);
        };
    };

}());