class Person {
    constructor(cash, accounts) {
        this._cash = cash;
        this._accounts = accounts;
    }

    totalAssets() {
        return this._cash + this._accountsValue();
    }

    _accountsValue() {
        let sum = 0;
        for (let i = 0; i < this._accounts.length; i++) {
            sum += this._accounts[i].balance();
        }

        return sum;
    }
}

module.exports = Person;