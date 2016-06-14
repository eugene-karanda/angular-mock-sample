(function () {
    'use strict';

    angular.module('angularMockSample')
        .factory('GreetingFactory', GreetingFactory);

    function GreetingFactory() {
        return function (name) {
            if(!name) {
                throw new IllegalArgumentException('name must be defined');
            }

            return {
                getGreeting: getGreeting
            };

            function getGreeting() {
                return 'Hello ' + name + '. I am helper.';
            }
        };
    }
    
})();

function IllegalArgumentException(message) {
    this.name = 'IllegalArgumentException';
    this.message = message;
}

IllegalArgumentException.prototype = new Error();
IllegalArgumentException.prototype.constructor = IllegalArgumentException;