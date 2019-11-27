class Account {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }

    deposit(amount) {
        this.balance = this.balance + amount;
    }

    withdraw(amount) {
        this.balance = this.balance - amount;
    }
}

let acc = new Account(2000);
console.log(`Current balance is: ${acc.balance}`);

acc.deposit(200);
console.log(`Current balance is: ${acc.balance}`);

acc.deposit(300);
console.log(`Current balance is: ${acc.balance}`);

acc.withdraw(1000);
console.log(`Current balance is: ${acc.balance}`);