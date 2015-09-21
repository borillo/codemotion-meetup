import { one, two, value } from './../dependency.js';
import should from 'should';

describe('es6', function () {
    describe('let and const', function () {
        it('can defined variables with let', function () {
            let value = 32;
            value.should.equal(32);
        });

        it('can define const values', function () {
            const value = 32;
            //value = 23;
            value.should.equal(32);
        });

        it('variables are block-scoped', function () {
            var es5Value = 32;
            let value = 32;

            if (true) {
                var es5Value = 23;
                let value = 23;
            }

            es5Value.should.equal(23);
            value.should.equal(32);
        });

        it('reference error when no function defined', function () {
            (function () {
                nonExistingVariable = 32;
            }).should.throwError(/^.*is not defined$/)
        });
    });

    describe('template literals', function () {
        it('all kinds of quotes', function () {
            `I'm "amazed"`.should.equal('I\'m "amazed"');
        });

        it('multiline', function () {
            let greeting = `Hi
My
Friends`;

            greeting.should.equal('Hi\nMy\nFriends');
        });

        it('interpolate variables', function () {
            let name = 'Ricardo';

            `Hi ${name}`.should.equal('Hi Ricardo');
        });
    });

    describe('arrow functions', function () {
        it('inline functions', function () {
            let result = [1, 2, 3].map(num => num * 2);

            result.should.deepEqual([2, 4, 6]);
        });

        it('multiple block lines', function () {
            let result = [1, 2, 3, 4].map(num => {
                let multiplier = 2;
                return num * multiplier;
            });

            result.should.deepEqual([2, 4, 6, 8]);
        });
    });

    describe('destructuring', function () {
        it('arrays', function () {
            var [a, , b] = [1, 2, 3];

            a.should.equal(1);
            b.should.equal(3);
        });

        it('objects', function () {
            var user = {name: 'Ricardo Borillo', age: 38};
            var {name, age} = user;

            name.should.equal('Ricardo Borillo');
            age.should.equal(38);
        });

        it('aliases', function () {
            var user = {name: 'Ricardo Borillo', age: 38};
            var {name: myName, age} = user;

            myName.should.equal('Ricardo Borillo');
        });

        it('default values', function () {
            let {foo=3} = {foo: 2};
            foo.should.equal(2);

            var {fooo=3} = {bar: 2};
            fooo.should.equal(3);
        });

        it('optional parameters', function () {
            const mult = (a = 2, b = 30) => a * b;

            mult().should.equal(60);
            mult(7, 8).should.equal(56);
        });
    });

    describe('method definition', function () {
        it('methods', function () {
            let user = {
                _name: 'Ricardo',
                show() {
                    return this._name;
                }
            };

            user.show().should.equal('Ricardo')
        });

        it('getters and setters', function () {
            let user = {
                _name: 'Not defined',
                get name() {
                    return this._name;
                },
                set name(name) {
                    this._name = name;
                }
            };

            user.name = 'Ricardo';
            user._name.should.equal('Ricardo');
        });
    });

    describe('classes', function () {
        it('definition and inheritance', function () {
            function OldCar () {
                this.fuel = 10;
            }

            OldCar.prototype.move = function () {
                this.fuel--;
            };

            let es5Car = new OldCar();
            es5Car.move();
            es5Car.fuel.should.equal(9);

            class Car {
                constructor() {
                    this.fuel = 10;
                }

                move() {
                    this.fuel --;
                }
            }

            let car = new Car();
            car.move();
            car.fuel.should.equal(9);

            class ExpensiveCar extends Car {
                move() {
                    this.fuel-= 5;
                }
            }

            let expensiveCar = new ExpensiveCar();
            expensiveCar.move();
            expensiveCar.fuel.should.equal(5);
        });
    });

    describe('modules', function () {
        it('import statements', function () {
            value.should.equal(23);
            one().should.equal('one');
            two().should.equal('two');
        });
    });

    describe('property values', function () {
        it('no need to define prop and value', function () {
            let name = 'Ricardo';
            let surname = 'Borillo';
            let user = {name, surname};

            user.should.deepEqual({name: 'Ricardo', surname: 'Borillo'});
        });
    });

    describe('rest parameters', function () {
        it('destructuring', function () {
            const list = [1, 2, 3, 4];
            let a = list[0], rest = list.slice(1);

            a.should.equal(1);
            rest.should.deepEqual([2, 3, 4]);

            [a, ...rest] = list;
            a.should.equal(1);
            rest.should.deepEqual([2, 3, 4]);
        });

        it('function array argument', function () {
            function concatES5() {
                return Array.prototype.slice.call(arguments).join(' ');
            }

            function concatES6(...words) {
                return words.join(' ');
            }

            concatES5('Hola', 'Ricardo', '!!').should.equal('Hola Ricardo !!');
            concatES6('Hola', 'Ricardo', '!!').should.equal('Hola Ricardo !!');
        });

        it('concatenate arrays', function () {
            [1, 2].concat([3, 4]).should.deepEqual([1, 2, 3, 4]);
            [1, 2, ...[3, 4]].should.deepEqual([1, 2, 3, 4]);
        });
    });
});
