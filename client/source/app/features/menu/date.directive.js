(function () {
    'use strict';

    angular
        .module('app')
        .controller('dateCtrl', dateCtrl)
        .directive('uiDate', uiDate)

    function dateCtrl() {
    }

    function uiDate($routeParams) {
        return {
            restrict: 'E',
            templateUrl: 'app/features/menu/date.html',
            controller: dateCtrl,
        }
    }

}());