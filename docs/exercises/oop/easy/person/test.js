const assert = require('chai').assert;
const Person = require('./solution/Person');

describe('Person', () => {
    describe('constructor', () => {
        it('should throw RangeError if name is empty', () => {
            assert.throws(() => new Person('', 33));
        });
        it('should throw RangeError if age is negative', () => {
            assert.throws(() => new Person('Rosenkrantz', -33));
        });
    });

    describe('sayHi', () => {
        it('should return an introduction string', () => {
            const p = new Person('Guildenstern', 32);
            
            assert.equal(p.sayHi(), "Hi, my name is Guildenstern and I'm 32 years old.");
        });
    });
    
    describe('growOlder', () => {
        it('should increment the person age by one', () => {
            const p = new Person('Lemmy', 60);

            p.growOlder();

            assert.equal(p._age, 61);

        })
    })
});