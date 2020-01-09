// Derítsük fel a hátterét és javítsuk ki
// az alábbi SyntaxErrort!
// Tipp: a válasz az Exploring ES6 könyv Destructuring
// fejezetében van!
let a, b;

// { a, b } = { foo: 1, bar: 2 }

({ foo: a, bar: b } = { foo: 1, bar: 2 })

console.log(a,b)