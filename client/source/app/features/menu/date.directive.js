(function () {
    'use strict';

    angular
        .module('app')
        .controller('dateCtrl', dateCtrl)
        .directive('uiDate', uiDate)

    function dateCtrl($scope) {
        $scope.format = 'dd/MM/yyyy'
        $scope.opened = false
        $scope.open = function () {
            $scope.opened = !$scope.opened
        }
    }

    function uiDate($routeParams) {
        return {
            templateUrl: '/app/features/menu/date.html',
            controller: dateCtrl,
            scope: {
                ngModel: '=',
                required: '='
            },
        }
    }

}());