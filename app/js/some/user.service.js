(function () {
    'use strict';

    angular.module('angularMockSample')
        .service('UserService', UserService);

    function UserService() {
        return {
            getUsername: getUsername
        };

        function getUsername() {
            return 'Eugene';
        }
    }

})();
