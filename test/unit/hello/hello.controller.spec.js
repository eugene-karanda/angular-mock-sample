(function () {
    'use strict';

    describe('HelloController', function () {
        beforeEach(module('angularMockSample'));

        var controller;

        beforeEach(inject(function ($controller) {
            controller = $controller('HelloController', {});
        }));

        it('message must be equals to hello', function () {
            expect(controller.message).toEqual('Hello');
        })
    });
})();