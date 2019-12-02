class Account {
    constructor(initialBalance, holder) {
        this.balance = initialBalance;
        this.holder = holder;
    }

    deposit(person, amount) {
        if (person.money >= amount) {
            this.balance = this.balance + amount;
            person.money = person.money - amount;

            return true;
        }

        console.log("Deposit failed!");
        return false;
    }

    withdraw(person, amount) {
        if (this.holder.id == person.id) {
            if (this.balance - amount >= 0) {
                this.balance = this.balance - amount;
                person.money = person.money + amount;
                
                console.log("Withdraw successfull!");
                return true;
            }
        }

        console.log("Withdraw successfull!");
        return false;
    }
}

class Person {
    constructor(id, name, money) {
        this.id = id;
        this.name = name;
        this.money = money;
    }
}

let accOwner = new Person("123456AB", "Steve Strong", 1000);
let evilPerson = new Person("Joker");
let acc = new Account(2000, accOwner);
console.log(`Current balance is: ${acc.balance}, person money is: ${accOwner.money}`);

acc.deposit(accOwner, 200)
console.log(`Current balance is: ${acc.balance}, person money is: ${accOwner.money}`);

acc.deposit(300);
console.log(`Current balance is: ${acc.balance}, person money is: ${accOwner.money}`);

acc.withdraw(evilPerson, 2000);
console.log(`Current balance is: ${acc.balance}, person money is: ${accOwner.money}`);

acc.withdraw(accOwner, 1000);
console.log(`Current balance is: ${acc.balance}, person money is: ${accOwner.money}`);