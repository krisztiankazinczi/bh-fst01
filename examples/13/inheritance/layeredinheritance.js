class Person {
    constructor(name, age) {
        this.name = name;
        this.age  = age;
    }

    sayHi() {
        return `My name is ${this.name} and I'm ${this.age}.`;
    }
}

class Student extends Person {
    sayHi() {
        return super.sayHi() + `I'm a student.`;
    }
}

class SillyStudent extends Student {
    sayHi() {
        return  super.sayHi() + '...and Im silly';
    }
}

let p = new Person("Clark", 70);
p.sayHi();

let s = new Student("Batman", 70);
s.sayHi();

let Laszlo = new SillyStudent("Olzsal", "07", "07-");

console.log(Laszlo.sayHi());