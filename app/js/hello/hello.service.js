(function () {
    'use strict';
    
    angular.module('angularMockSample')
        .service('HelloService', HelloService);
    
    function HelloService($log, UserService) {
        return {
            getMessage: getMessage    
        };
        
        function getMessage() {
            return UserService.getUser().then(onSuccess);
        }
        
        function onSuccess(user) {
            $log.debug(user);
            return 'Hello, ' + user.name + " "  + user.surname;
        }
    }
})();
