(function () {

    angular
        .module('app')
        .factory('scopeGlobalService', scopeGlobalService);

    function scopeGlobalService() {

        var data = {};

        function set(value, field) {
            data[field] = value;
        }

        return {
            set: set,
            value: data
        };

    }

})();