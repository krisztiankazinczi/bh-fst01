// function regularFunction() {
//     console.log("I'm just a normal function");
// }

// let f = function () {
//     console.log("i'm an anonymous function");
// }

// f();

// setTimeout(function () {
//     console.log("time is ticking... death is near! :C");
// }, 5000);

// setTimeout(f, 10000);

// setTimeout(regularFunction, 15000);

// setTimeout(function funcExpression() {
//     console.log("I'm a named function expression!");
// }, 17000);

function declaredIntroduce () {
    console.log(`Salve, nomen meus est ${this.firstName} ${this.lastName} et ego sum ${this.age} annus senili.`);
}

let callixtus = {
    firstName: "Callixtus",
    lastName: "Augstinus",
    age: 42,
    // introduce: declaredIntroduce
    introduce: function functionName () {
        console.log(`Salve, nomen meus est ${this.firstName} ${this.lastName} et ego sum ${this.age} annus senili.`);
    }
};

let horatius = {
    firstName: "Horatius",
    lastName: "Curatius",
    age: 21,
    introduce: declaredIntroduce
}

declaredIntroduce();
callixtus.introduce();
horatius.introduce();
