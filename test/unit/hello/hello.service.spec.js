(function () {
    'use strict';

    describe('HelloService', function () {
        beforeEach(module('angularMockSample'));

        var HelloService;
        var UserService;

        beforeEach(inject(function ($q, _HelloService_, _UserService_) {
            HelloService = _HelloService_;
            UserService = _UserService_;
            spyOn(UserService, 'getUser').and.returnValue($q.when('Jasmine'));
        }));

        it('greeting must be equals to hello', function () {
            HelloService.getMessage().then(function (message) {
                expect(message).toEqual('Hello, Jasmine');
            });

            expect(UserService.getUser).toHaveBeenCalled();
        });
    });
})();