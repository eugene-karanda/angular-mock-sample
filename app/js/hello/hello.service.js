(function () {
    'use strict';

    angular.module('angularMockSample')
        .service('HelloService', HelloService);

    function HelloService(UserService) {
        return {
            getMessage: getMessage    
        };
        
        function getMessage() {
            return 'Hello, ' + UserService.getUsername();
        }
    }
})();
