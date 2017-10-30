(function () {

    angular
        .module('app')
        .filter('ellipsis', ellipsis);

    function ellipsis() {

        return function (input, size) {
            if (input.length <= size) return input;
            var output = input.substring(0, size) + '...';
            return output
        };

    }

}());