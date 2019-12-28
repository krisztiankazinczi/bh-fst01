class Person {
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }

    id() {
        return this._id;
    }

    name() {
        return this._name;
    }
}

module.exports = Person;