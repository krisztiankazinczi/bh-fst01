class Account {
    constructor(id, initialBalance, holder) {
        this.id = id;
        this.balance = initialBalance;
        this.holder = holder;
    }

    
}

class Person {
    constructor(id, name, money) {
        this.id = id;
        this.name = name;
        this.money = money;
    }
}

class Bank {
    constructor() {
        this.accounts = [];
    }

    createAccount(person, amount) {
        if (person.money >= amount) {
            let id = this.accounts.length;
            this.accounts.push(new Account(id, amount, person));
            return id;
        }

        return -1;
    }

    deposit(person, accId, amount) {
        if (person.money >= amount) {
            let acc = this.getAccount(accId);
            acc.balance = acc.balance + amount;
            person.money = person.money - amount;

            return true;
        }

        console.log("Deposit failed!");
        return false;
    }

    withdraw(person, accId, amount) {
        let acc = this.getAccount(accId);
        if (acc.holder.id == person.id) {
            if (acc.balance - amount >= 0) {
                acc.balance = acc.balance - amount;
                person.money = person.money + amount;
                
                console.log("Withdraw successfull!");
                return true;
            }
        }

        console.log("Withdraw successfull!");
        return false;
    }

    getAccount(id) {
        return this.accounts.find(function(acc) {
            console.log("Account found!");
            return acc.id == id;
        });
    }
}

let accOwner = new Person("123456AB", "Steve Strong", 1000);
let bank = new Bank();
let accId = bank.createAccount(accOwner, 1000);

bank.deposit(accOwner, accId, 200)