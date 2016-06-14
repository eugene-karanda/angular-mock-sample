(function(){
    "use strict";
    
    angular.module('angularMockSample')
        .controller('GreetingController', GreetingController);
    
    function GreetingController($scope, GreetingFactory){
        var greeting = GreetingFactory('Eugene');

        $scope.message = greeting.getGreeting();
    }
    
})();