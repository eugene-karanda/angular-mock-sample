(function () {
    'use strict';

    angular.module('angularMockSample')
        .service('HelloService', HelloService);

    function HelloService(UserService) {
        var service = {
            getMessage: getMessage
        };

        function getMessage() {
            return 'Hello, ' + UserService.getUsername();
        }

        return service;
    }
})();
