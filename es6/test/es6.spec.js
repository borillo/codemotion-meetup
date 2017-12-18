import dep from './../dependency';

describe('es6', function () {
    describe('let and const', function () {
        it('can defined variables with let', function () {
            let value = 32;
            expect(value).toEqual(32);
        });

        it('can define const values', function () {
            const value = 32;
            //value = 23;
            expect(value).toEqual(32);
        });

        it('variables are block-scoped', function () {
            var es5Value = 32;
            let value = 32;

            if (true) {
                var es5Value = 23;
                let value = 23;
            }

            expect(es5Value).toEqual(23);
            expect(value).toEqual(32);
        });
    });

    describe('template literals', function () {
        it('all kinds of quotes', function () {
            expect(`I'm "amazed"`).toEqual('I\'m "amazed"');
        });

        it('multiline', function () {
            let greeting = `Hi
My
Friends`;

            expect(greeting).toEqual('Hi\nMy\nFriends');
        });

        it('interpolate variables', function () {
            let name = 'Ricardo';

            expect(`Hi ${name}`).toEqual('Hi Ricardo');
        });
    });

    describe('arrow functions', function () {
        it('inline functions', function () {
            let result = [1, 2, 3].map(num => num * 2);

            expect(result).toEqual([2, 4, 6]);
        });

        it('multiple block lines', function () {
            let result = [1, 2, 3, 4].map(num => {
                let multiplier = 2;
                return num * multiplier;
            });

            expect(result).toEqual([2, 4, 6, 8]);
        });
    });

    describe('destructuring', function () {
        it('arrays', function () {
            var [a, , b] = [1, 2, 3];

            expect(a).toEqual(1);
            expect(b).toEqual(3);
        });

        it('objects', function () {
            var user = {name: 'Ricardo Borillo', age: 40};
            var {name, age} = user;

            expect(name).toEqual('Ricardo Borillo');
            expect(age).toEqual(40);
        });

        it('aliases', function () {
            var user = {name: 'Ricardo Borillo', age: 40};
            var {name: myName, age} = user;

            expect(myName).toEqual('Ricardo Borillo');
        });

        it('default values', function () {
            let {foo=3} = {foo: 2};
            expect(foo).toEqual(2);

            var {fooo=3} = {bar: 2};
            expect(fooo).toEqual(3);
        });

        it('optional parameters', function () {
            const mult = (a = 2, b = 30) => a * b;

            expect(mult()).toEqual(60);
            expect(mult(7, 8)).toEqual(56);
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

            expect(user.show()).toEqual('Ricardo')
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
            expect(user._name).toEqual('Ricardo');
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
            expect(es5Car.fuel).toEqual(9);

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
            expect(car.fuel).toEqual(9);

            class ExpensiveCar extends Car {
                move() {
                    this.fuel-= 5;
                }
            }

            let expensiveCar = new ExpensiveCar();
            expensiveCar.move();
            expect(expensiveCar.fuel).toEqual(5);
        });
    });

    describe('modules', function () {
        it('import statements', function () {
            expect(dep.value).toEqual(23);
            expect(dep.one()).toEqual('one');
            expect(dep.two()).toEqual('two');
        });
    });

    describe('property values', function () {
        it('no need to define prop and value', function () {
            let name = 'Ricardo';
            let surname = 'Borillo';
            let user = {name, surname};

            expect(user).toEqual({name: 'Ricardo', surname: 'Borillo'});
        });
    });

    describe('rest parameters', function () {
        it('destructuring', function () {
            const list = [1, 2, 3, 4];
            let a = list[0], rest = list.slice(1);

            expect(a).toEqual(1);
            expect(rest).toEqual([2, 3, 4]);

            [a, ...rest] = list;
            expect(a).toEqual(1);
            expect(rest).toEqual([2, 3, 4]);
        });

        it('function array argument', function () {
            function concatES5() {
                return Array.prototype.slice.call(arguments).join(' ');
            }

            function concatES6(...words) {
                return words.join(' ');
            }

            expect(concatES5('Hola', 'Ricardo', '!!')).toEqual('Hola Ricardo !!');
            expect(concatES6('Hola', 'Ricardo', '!!')).toEqual('Hola Ricardo !!');
        });

        it('concatenate arrays', function () {
            expect([1, 2].concat([3, 4])).toEqual([1, 2, 3, 4]);
            expect([1, 2, ...[3, 4]]).toEqual([1, 2, 3, 4]);
        });
    });
});
