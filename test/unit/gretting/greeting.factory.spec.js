(function () {
    'use strict';

    describe('GreetingFactory', function () {
        beforeEach(module('angularMockSample'));

        var GreetingFactory;

        beforeEach(inject(function (_GreetingFactory_) {
            GreetingFactory = _GreetingFactory_;
        }));

        it('should get instance of factory', function () {
            expect(GreetingFactory).toBeDefined();
        });

        it('should throw exception of `name` not pass', function () {
            expect(function () {
                GreetingFactory();
            }).toThrow(new IllegalArgumentException('name must be defined'));
        });

        it('should return new instance every time', function () {
            expect(GreetingFactory('Karma')).not.toBe(GreetingFactory('Karma'));
        });

        describe('Greeting', function () {

            var Greeting;

            beforeEach(function () {
                Greeting = GreetingFactory('Eugene');
            });

            it('must return greeting',function () {
                expect(Greeting.getGreeting()).toEqual('Hello Eugene. I am helper.');
            });
        });
    });

})();