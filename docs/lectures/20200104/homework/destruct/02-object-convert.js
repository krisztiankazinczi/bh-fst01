// // Írjuk át a kódrészleteket, hogy destructuringet használjanak
// // az objektumok adatainak kinyerésére

// // (1)

// const person = { first: 'John', last: 'Doe' }

// <<<<<<< master
// // const first = obj.first
// // const last = obj.last

// const { first, last} = person;
// =======
// const first = obj.first
// const last = obj.last
// //Megoldás:
//     const {first, last} = person
// >>>>>>> master

// console.log(first, last)

// // (2)

// person.address = {
//     city: 'Whasington',
//     state: 'DC',
//     street: '6th street'
// }
// <<<<<<< master
// // const state = person.address.state

// const { address: {state}} = person;
// =======
// const state = person.address.state
// //Megoldás:
//     const {address: {state}} = person
// >>>>>>> master

// console.log(state)