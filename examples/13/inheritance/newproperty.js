class Person {
    constructor(name, age) {
        this.name = "Kittudomen";
        this.age  = age;
    }

    sayHi() {
        console.log(`háááááááj, máj ném iz ${this.name} and ${this.age}`);
    }
}

class Student extends Person {
    constructor(name, age, iq) {
        super(name, age);
        console.log(this.name);
        this.name = "Mr. Mittudomen";
        this.iq = iq;
    }

    sayHi() {
        console.log(`Hi, I'm a nice little student, called ${this.name} and ${this.age} an my IQ is ${this.iq}`);
    }
}

let p = new Person("Clark", 70);
p.sayHi();

let s = new Student("Batman", 70, 70);
s.sayHi();