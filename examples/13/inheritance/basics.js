class Person {
    constructor(name, age) {
        this.name = name;
        this.age  = age;
    }

    sayHi() {
        console.log(`háááááááj, máj ném iz ${this.name} and ${this.age}`);
    }
}

class Student extends Person {}

let s = new Student("Batman", 70);
s.sayHi();