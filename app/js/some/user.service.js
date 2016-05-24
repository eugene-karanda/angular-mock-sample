(function () {
    'use strict';

    angular.module('angularMockSample')
        .service('UserService', UserService);

    function UserService() {
        var service = {
            getUsername: getUsername
        };

        function getUsername() {
            return 'Eugene';
        }

        return service;
    }

})();
