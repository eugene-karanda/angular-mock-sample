(function () {
    'use strict';
    
    describe('GreetingController', function () {
        var greetingFactoryMock = function() {
            return {
                getGreeting: function () {
                    return 'Hello Test';
                }
            }
        };

        beforeEach(module('angularMockSample', function ($provide) {
            $provide.value('GreetingFactory', greetingFactoryMock)
        }));

        var $scope, controller;

        beforeEach(inject(function ($controller, $rootScope) {
            $scope = $rootScope.$new(true);

            controller = $controller('GreetingController', {
                $scope: $scope
            });
        }));

        it('some case', function () {
            expect($scope.message).toEqual('Hello Test');
        });
    });
    
})();