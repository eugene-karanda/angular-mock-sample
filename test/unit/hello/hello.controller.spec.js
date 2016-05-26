(function () {
    'use strict';

    describe('HelloController', function () {
        beforeEach(module('angularMockSample'));

        it('message must be equals to hello', inject(function ($q, $controller, _HelloService_) {
            var HelloController = $controller('HelloController', {});
            var HelloService = _HelloService_;

            spyOn(HelloService, 'getMessage').and.returnValue($q.when('Some message', function () {
                expect(HelloController.message).toEqual('Some message');
            }));

            expect(HelloController.message).toEqual('Waiting for data');
        }));
    });
})();