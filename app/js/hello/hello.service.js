(function () {
    'use strict';
    
    angular.module('angularMockSample')
        .service('HelloService', HelloService);
    
    function HelloService(UserService) {
        return {
            getMessage: getMessage    
        };
        
        function getMessage() {
            return UserService.getUser().then(onSuccess);
        }
        
        function onSuccess(user) {
            return 'Hello, ' + user.name + " "  + user.surname;
        }
    }
})();
