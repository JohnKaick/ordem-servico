(function () {
    'use strict';

    angular
        .module('app')
        .controller('loginCtrl', loginCtrl)

    function loginController($scope, $rootScope, $location, authorization) {

        $scope.credenciais = {}
        $scope.mensagem = null
        $scope.disconected = $rootScope.disconected

        $scope.login = function (credenciais) {
            authorization.login(credenciais.email, credenciais.senha, (erro) => erro ? $scope.mensagem = erro : $location.path('/chamado'))
        }

        $scope.logout = function () {
            authorization.logout((erro) => erro ? $scope.mensagem = erro : $location.path('/login'))
        }

    }

}());