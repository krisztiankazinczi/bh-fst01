
function globalGetDetails() {
    return `The details of the person: name=${this.name}, age=${this.age}`;
}

function Person(name, age) {
    console.log(this);
    this.name = name;
    this.age = age;
    this.getDetails = globalGetDetails;
    console.log(this);
}

let person = new Person("Steven Smith", 52);
let person2 = Person("John Small", 27);

console.log(person);
console.log(person2);

