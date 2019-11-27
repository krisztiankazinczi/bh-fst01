let person = {
    name: "Kovacs Istvan",
    email: "kistvan@freemail.hu",
    intro: function(){
        return `My name is ${this.name} and my email address is ${this.email}`;
    }
};

let name = "name";
let email = "email";

let person2 = {
    name: "Tipikus Jozsef",
    email: "tjozsef@freemail.hu",
    intro: function(){
        return `My name is ${this.name} and my email address is ${this.email}`;
    }
};

console.log(person.intro());
console.log(person2.intro());
