// var otherName = "valami";

function Person(name, email) {
    this.name = name;
    this.email = email;
    console.log("value of this: " + this);
}

let person = new Person("Jozsef", "jozsef123@freemail.hu");
let person2 = Person("Janos", "janos123@freemail.hu");
console.log(person);
console.log(person2);