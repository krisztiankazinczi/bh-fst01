class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `The details of the person: name=${this.name}, age=${this.age}`;
    }

}

class Time {
    yearHasPassed() {
        p.age++;
    }
}

let p = new Person("Steve Strong", 66);
let t = new Time();

console.log(`Age before: ${p.age}`);
t.yearHasPassed();
console.log(`Age after: ${p.age}`);
