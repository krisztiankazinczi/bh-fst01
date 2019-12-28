const Transaction = require('./Transaction');

class Account {
    constructor(initialDeposit) {

        if (initialDeposit < 0) throw new RangeError();

        this._transactions = initialDeposit? [new Transaction(initialDeposit)] : [];
    }

    balance() {
        let balance = 0;

        for(let i = 0; i < this._transactions.length; i++) {
            balance += this._transactions[i].value()
        }

        return balance;
        // return this._transactions.reduce((accumulator, t) => accumulator + t.value(), 0);
    }

    transfer(amount, toAccount) {
        if (!(toAccount instanceof Account)) throw new TypeError();
        if (this.balance() < amount) return false;

        this._transactions.push(new Transaction(-amount));
        toAccount._transactions.push(new Transaction(amount));

        return true;

    }
}

module.exports = Account;