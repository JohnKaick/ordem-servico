(function () {
    'use strict';

    angular
        .module('app')
        .controller('dateCtrl', dateCtrl)
        .directive('uiDate', uiDate);

    function dateCtrl() {

        var vm = this;
        vm.format = 'dd/MM/yyyy';
        vm.opened = false;
        vm.open = open;

        function open() {
            vm.opened = !vm.opened
        };
    };

    function uiDate() {
        return {
            templateUrl: '/app/features/config/date.html',
            controller: dateCtrl,
            scope: {
                ngModel: '=',
                required: '='
            },
        }
    };

}());