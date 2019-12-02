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
    // overriding: amikor az alosztalyban egy ugyanolyen nevu
    // metodussal feluldefinialjuk a szulo osztaly metodusat
    // ezzel, lenyegeben "arnyekolva" a szulo osztaly hasonlo
    // nevu metodusat
    sayHi() {
        console.log(`Hi, I'm a nice little student, called ${this.name} and ${this.age}`);
    }
}

let p = new Person("Clark", 70);
p.sayHi();

let s = new Student("Batman", 70);
s.sayHi();