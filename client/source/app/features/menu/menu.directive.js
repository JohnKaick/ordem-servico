(function () {
    'use strict';

    angular
        .module('app')
        .controller('menuCtrl', menuCtrl)
        .directive('uiMenu', uiMenu)

    function menuCtrl($scope) {
    }

    function uiMenu() {
        return {
            restrict: 'E',
            templateUrl: 'app/features/menu/menu.html',
            controller: 'menuCtrl',
            scope: {
                ngModel: '='
            }
        }
    }

}());