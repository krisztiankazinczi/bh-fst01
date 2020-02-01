// // Írjuk át a kódrészleteket, hogy destructuringet használjanak
// // a tömbök adatainak kinyerésére

// // (1) egyszerű destructuring
// const arr1 = ['Budapest', 'HU']
// <<<<<<< master
// // const city = arr1[0], country = arr1[1]

// const [city, country] = arr1;

// // (2) tömbelemek elhagyása
// const data = ['Steve Ballmest','1970', '01', '01', 'Washington', 'DC']
// // const name = data[0], yob = data[0], city = data[4]

// const [name, yob, , , city] = data;
// =======
// const city = arr1[0], country = arr1[1]
// //Megoldás:
//     const [city, country] = arr1



// // (2) tömbelemek elhagyása
// const data = ['Steve Ballmest','1970', '01', '01', 'Washington', 'DC']
// const name = data[0], yob = data[1], city = data[4] //A "yob = data[0]" volt. Átjavítottam !
// //Megoldás:
//     let [name,yob,,,city,] = data

// >>>>>>> master

// // (3) visszatérési érték destructuringja
// function details() {
//     return 'Steve Ballmest;1970;01;01;Washington;DC'.split(";")
// }
// // const ret = details()
// // const name = ret[0]
// // const yob = ret[1]

// const [name, yob] = details();

// //Megoldás:
//     function details() {
//         return 'Steve Ballmest;1970;01;01;Washington;DC'.split(';')
//     }
//     const ret = details()
//     const [name, yob] = ret


// // (4) visszatérési érték destructuringja

// <<<<<<< master
// // const removed = [1, 2, 3].splice(1, 1).pop()

// const [,removed] = [1,2,3];
// =======
// const removed = [1, 2, 3].splice(1, 1).pop()
// //Megoldás:
// const [,removed,] = [1, 2, 3]
// >>>>>>> master

// console.log(removed)
