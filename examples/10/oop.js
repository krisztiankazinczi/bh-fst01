// let istvanNev = "Istvan";
// let istvanEletkor = 30;

// let jozsefNev = "Jozsef";
// let jozsefEletkor = 31;

// let istvan = ["Istvan", 30];



// let jozsef = ["Jozsef", 31];
let jozsef = {
    nev: "Jozsef",
    eletkor: 31,
    lakcim: {
        varos: "Budapestrocsoge",
        utca: "Fo utca 1"
    }
};

function createStudent(name, age, city, street) {
    let student = {};
    student.name = name;
    student.age = age;
    student.address = {
        city: city,
        street: street
    };
    return student;
}

// console.log(jozsef["nev"]);
// console.log(jozsef["eletkor"]);

console.log(jozsef.nev);
console.log(jozsef.eletkor);

let member = "nev";
console["log"](jozsef[member]);


// bonyolult logika