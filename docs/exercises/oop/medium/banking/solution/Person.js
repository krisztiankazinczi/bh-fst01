class Person {
    constructor(cash, accounts) {
        this._cash = cash;
        this._accounts = accounts;
    }

    totalAssets() {
        return this._cash + this._accountsValue();
    }

    _accountsValue() {
        if (!this._accounts.length) return 0;

        let sum = 0;
        for(let i = 0; i < this._accounts.length; i++) {
            sum += this._accounts[i].balance();
        }

        return sum;
        // return this._accounts.reduce((accumulator, account) => accumulator + account.balance(), 0);
    }
}

module.exports = Person;