(function () {
    'use strict';

    angular
        .module('app')
        .directive('uiMenuDetalhes', uiMenuDetalhes)

    function uiMenuDetalhes($routeParams, scopeGlobalService) {
        return {
            restrict: 'E',
            templateUrl: 'app/features/menu/menu-detalhes.html',
            link: function (scope, elem, attrs) {
                scope.chamadoSid = $routeParams.chamadoSid
                scope.data = scopeGlobalService.value
            }
        }
    }

}());