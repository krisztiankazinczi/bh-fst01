class Person {
    constructor(name, age) {
        if (name === '') throw new RangeError('name must not be empty string');
        if (age < 0) throw new RangeError('age must be non-negative');

        this._name = name;
        this._age = age;
    }

    sayHi() {
        return `Hi, my name is ${this._name} and I'm ${this._age} years old.`
    }

    growOlder() {
        this._age++;
    }
}

module.exports = Person;