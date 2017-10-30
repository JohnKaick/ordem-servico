/*
(function () {
    'use strict';

    angular
        .module('app')
        .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$rootScope', '$location', 'authorization'];

    function loginController($rootScope, $location, authorization) {

        var vm = this;
        vm.credenciais = {};
        vm.mensagem = null;
        vm.disconected = $rootScope.disconected;
        vm.login = login;
        vm.logout = logout;

        function login(credenciais) {
            authorization.login(credenciais.email, credenciais.senha, (erro) => erro ? $scope.mensagem = erro : $location.path('/chamado'))
        }

        function logout() {
            authorization.logout((erro) => erro ? $scope.mensagem = erro : $location.path('/login'))
        }

    }

}());
*/