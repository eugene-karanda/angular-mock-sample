(function () {
    'use strict';

    describe('HelloService', function () {
        beforeEach(module('angularMockSample'));

        var HelloService;
        var UserService;

        beforeEach(inject(function (_HelloService_, _UserService_) {
            HelloService = _HelloService_;
            UserService = _UserService_;
            spyOn(UserService, 'getUsername').and.returnValue('Jasmine');
        }));

        it('message must be equals to hello', function () {
            expect(HelloService.getMessage()).toEqual('Hello, Jasmine');
            expect(UserService.getUsername).toHaveBeenCalled();
        });
    });
})();