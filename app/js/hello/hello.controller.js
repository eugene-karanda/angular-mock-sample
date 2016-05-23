(function () {
    'use strict';
    
    angular.module('angularMockSample')
        .controller('HelloController', HelloController);
    
    function HelloController() {
        var vm = this;

        vm.message = 'Hello';
    }
    
})();
