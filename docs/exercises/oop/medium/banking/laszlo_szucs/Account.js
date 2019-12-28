class Account {
    constructor(initialBalance) {
        this._balance = initialBalance;
    }

    balance() {
        return this._balance;
    }

    transfer(amount, account) {
        if (!(account instanceof Account)) throw new TypeError();

        let isPossible = this._balance >= amount;
        if (isPossible) {
            this._balance = this._balance - amount;
            account._balance = account._balance + amount;
        }

        return isPossible;
    }
}

module.exports = Account;