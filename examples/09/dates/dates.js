
//toLocaleDateString('hu-HU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
//toLocaleTimeString('hu-HU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

// how old are you: now - birthdate / 365 / 24 / 60 / 60 / 1000
let d = new Date();
let d2 = new Date(1988, 2, 20);

let diff = d - d2;
let oldness = diff / 365 / 24 / 60 / 60 / 1000;
console.log(oldness);


