(function () {
    'use strict';

    angular
        .module('app')
        .controller('menuDetalhesCtrl', menuDetalhesCtrl)
        .directive('uiMenuDetalhes', uiMenuDetalhes)

    function menuDetalhesCtrl() {
    }

    function uiMenuDetalhes($routeParams) {
        return {
            restrict: 'E',
            templateUrl: 'app/features/menu/menu-detalhes.html',
            controller: menuDetalhesCtrl,
            link: function (scope, elem, attrs) {
                scope.chamadoSid = $routeParams.chamadoSid
            }
        }
    }

}());