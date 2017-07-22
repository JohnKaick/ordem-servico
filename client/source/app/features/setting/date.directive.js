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

    function uiDate() {
        return {
            templateUrl: '/app/features/setting/date.html',
            controller: dateCtrl,
            scope: {
                ngModel: '=',
                required: '='
            },
        }
    }

}());