class Person {
    constructor(name, age) {
        this.name = name;
        this.age  = age;
    }

    sayHi() {
        console.log(`háááááááj, máj ném iz ${this.name} and ${this.age}`);
    }
}

class Student extends Person {
    doHomework() {
        console.log(`${this.name} is doing the homework`)
    }
}

let p = new Person("Clark", 70);
let s = new Student("Batman", 70);
s.sayHi();
s.doHomework();
p.sayHi();
p.doHomework();