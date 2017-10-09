(function () {
    'use strict';

    angular
        .module('app')
        .factory('handleResponseError', handleResponseError)

    function handleResponseError($q, $window, $rootScope) {
        function responseError(errorResponse) {
            if (errorResponse.status === 403) {
                localStorage.removeItem($rootScope.key)
                $window.location.href = '/'
            }
            return $q.reject(errorResponse)
        }
        return { responseError }
    }
})();