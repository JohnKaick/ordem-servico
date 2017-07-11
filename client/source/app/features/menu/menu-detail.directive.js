(function () {
    'use strict';

    angular
        .module('app')
        .controller('menuDetailCtrl', menuDetailCtrl)
        .directive('uiMenuDetail', uiMenuDetail)

    function menuDetailCtrl($scope) {
    }

    function uiMenuDetail() {
        return {
            restrict: 'E',
            templateUrl: 'app/features/menu/menu-detail.html',
            controller: 'menuDetailCtrl',
            scope: {
                ngModel: '='
            }
        }
    }

}());