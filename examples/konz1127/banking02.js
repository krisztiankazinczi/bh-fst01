class Account {
    constructor(initialBalance, holder) {
        this.balance = initialBalance;
        this.holder = holder;
    }

    deposit(amount) {
        this.balance = this.balance + amount;
    }

    withdraw(person, amount) {
        if (this.holder.id == person.id) {
            if (this.balance - amount >= 0) {
                this.balance = this.balance - amount;
            }
        }
    }
}

class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

let accOwner = new Person("123456AB", "Steve Strong");
let evilPerson = new Person("Joker");
let acc = new Account(2000, accOwner);
console.log(`Current balance is: ${acc.balance}`);

acc.deposit(200);
console.log(`Current balance is: ${acc.balance}`);

acc.deposit(300);
console.log(`Current balance is: ${acc.balance}`);

acc.withdraw(evilPerson, 2000);
console.log(`Current balance is: ${acc.balance}`);

acc.withdraw(accOwner, 1000);
console.log(`Current balance is: ${acc.balance}`);