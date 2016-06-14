(function () {
    'use strict';

    describe('HelloController', function () {
        beforeEach(module('angularMockSample'));

        it('greeting must be equals to hello', inject(function ($q, $controller, HelloService) {
            var HelloController = $controller('HelloController', {});
            spyOn(HelloService, 'getMessage').and.returnValue($q.when('Some greeting', function () {
                expect(HelloController.message).toEqual('Some greeting');
            }));

            expect(HelloController.message).toEqual('Waiting for data');
        }));
    });
})();