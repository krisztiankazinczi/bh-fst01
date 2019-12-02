
function globalGetDetails() {
    return `The details of the person: name=${this.name}, age=${this.age}`;
}

function createPerson(name, age) {
    return {
        name: name,
        age: age,
        getDetails: globalGetDetails
    };
}

let person = createPerson("Steven Smith", 52);
let person2 = createPerson("John Small", 27);

// let person = {
//     name: "Steven Smith",
//     age: 52,
//     getDetails: globalGetDetails
// };

// let person2 = {
//     name: "John Small",
//     age: 27,
//     getDetails: globalGetDetails
// };

console.log(person.getDetails());
console.log(person2.getDetails());
console.log(globalGetDetails());
