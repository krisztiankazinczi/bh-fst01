class Account {
    constructor(initialDeposit, owner) {

        if (initialDeposit < 0) throw new Error();
        if (!owner) throw new Error();

        this._transactions = initialDeposit? [initialDeposit] : [];
        this._owner = owner;
    }

    balance() {
        let balance = 0;

        for(let i = 0; i < this._transactions.length; i++) {
            balance += this._transactions[i]
        }

        return balance;
    }

    deposit(amount) {
        if (amount <= 0) throw new Error();
        if (this._owner.cash() < amount) return;

        this._transactions.push(amount);
    }

    withdraw(amount) {
        if (amount <= this.balance()) {
            this._owner.receiveCash(amount);
            this._transactions.push(-amount);
        }
    }

    transfer(amount, toAccount) {
        if (amount <= 0) throw new Error();
        if (!(toAccount instanceof Account)) throw new Error();
        if (this.balance() < amount) return;

        this._transactions.push(-amount);
        toAccount._transactions.push(amount);

    }
}

module.exports = Account;