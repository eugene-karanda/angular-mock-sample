(function () {
    'use strict';
    
    angular.module('angularMockSample')
        .controller('HelloController', HelloController);

    function HelloController(HelloService) {
        var vm = this;

        vm.message = 'Waiting for data';

        HelloService.getMessage().then(function (message) {
            vm.message = message;
        });
    }
    
})();
