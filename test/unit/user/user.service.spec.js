(function () {
    'use strict';

    describe('UserService', function () {
        beforeEach(module('angularMockSample'));

        var UserService;
        var httpBackend;

        beforeEach(inject(function (_UserService_, $httpBackend) {
            UserService = _UserService_;
            httpBackend = $httpBackend;
        }));

        it('should return user promise', function () {
            var data = {
                name: 'TestName',
                surname: 'TestSurname'
            };

            httpBackend.expectGET('data/user.json').respond(200, data);

            UserService.getUser().then(function (user) {
                expect(user).toEqual(data);
            });

            httpBackend.flush();
        });


    });
})();