(function () {
    'use strict';

    angular
        .module('app')
        .controller('feedbackCtrl', feedbackCtrl);

    feedbackCtrl.$inject = ['$routeParams', 'feedbackAPI'];

    function feedbackCtrl($routeParams, feedbackAPI) {

        var vm = this;
        vm.feedback = {};
        vm.message = '';
        vm.salvar = salvar;

        function salvar(feedback) {
            feedbackAPI.create($routeParams.chamadoSid, feedback).then(function () {
                vm.message = 'Obrigado pelo feedback!';
            }).catch(function (data) {
                console.log('Error:' + data);
            });
        };
    };

}());