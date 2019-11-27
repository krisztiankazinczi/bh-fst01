// function someOtherFunction() {
//     console.log(`the value of this is: ${this}`);
// }

// let simpleObj = {
//     name: "some name",
//     func: function() {
//         console.log(this.name);
//     },
//     otherFunc: someOtherFunction
// }

// simpleObj.func();

// someOtherFunction();
// simpleObj.otherFunc();

class Person {
    constructor(name, title) {
        this.name = name;
        this.title = title;
        this.health = 100;
    }

    sayHi(){
        console.log(`Hiiii! My name is ${this.name}, the ${this.title}`);
    }

    sayOuch() {
        console.log(`${this.name} says OUCH!!!`);
    }

    hit(targetPerson) {
        targetPerson.health = targetPerson.health - 10;
        targetPerson.sayOuch();
    }

}



let someone = new Person("Franz Joseph", "Kaiser");
let someoneElse = new Person("Wilhelm", "Wilhelm");
someone.sayHi();
someoneElse.sayHi();

someone.hit(someoneElse);
console.log(someoneElse.health);