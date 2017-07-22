(function () {
    'use strict';

    angular
        .module('app')
        .directive('uiMenu', uiMenu)

    function uiMenu() {
        return {
            restrict: 'E',
            templateUrl: 'app/features/menu/menu.html',
            scope: {
                ngModel: '='
            }
        }
    }

}());