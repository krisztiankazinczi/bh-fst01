class Account {
    constructor(holder) {
        this.holder = holder;
        this.balance = 0;
    }
}

class Customer {
    
}

class Bank {
    deposit(customer, account, amount) {
        if (account.holder == customer) {
            account.balance = account.balance + amount;
        }
    }

    draw(customer, account, amount) {
        if (account.holder == customer) {
            account.balance = account.balance - amount;
        }
    }
}

let bank = new Bank();
let customer = new Customer();
let evilCustomer = new Customer();
let acc = new Account(evilCustomer);

bank.deposit(customer, acc, 100);
console.log(`acc.balance after deposit: ${acc.balance}`);
bank.draw(customer, acc, 50);
console.log(`acc.balance after draw: ${acc.balance}`);

bank.draw(evilCustomer, acc, 100000);
console.log(`acc.balance after evil draw: ${acc.balance}`);
