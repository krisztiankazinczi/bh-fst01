class Transaction {
    constructor(value) {
        this._value = value;
    }

    value() {
        return this._value;
    }
}

module.exports = Transaction;