(function () {
    'use strict';

    angular
        .module('app')
        .controller('menuDetailCtrl', menuDetailCtrl)
        .directive('uiMenuDetail', uiMenuDetail)

    function menuDetailCtrl() {
    }

    function uiMenuDetail($routeParams) {
        return {
            restrict: 'E',
            templateUrl: 'app/features/menu/menu-detail.html',
            controller: menuDetailCtrl,
            link: function (scope, elem, attrs) {
                scope.chamadoSid = $routeParams.chamadoSid
            }
        }
    }

}());