(function () {
    'use strict';

    angular
        .module('app')
        .directive('uiMenu', uiMenu);

    function uiMenu() {
        return {
            restrict: 'E',
            templateUrl: 'app/menu/menu.html',
            scope: {
                ngModel: '='
            }
        }
    }

}());