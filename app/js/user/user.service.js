(function () {
    'use strict';

    angular.module('angularMockSample')
        .service('UserService', UserService);

    function UserService($http) {
        return {
            getUser: getUser
        };

        function getUser() {
            return $http.get('data/user.json').then(function (response) {
                return response.data;
            });
        }
    }

})();
