// // Alakítsuk arrow functionökké a függvényeket!
// // Ahol lehet, hagyjunk el amit csak lehet a szintaxisból!

// <<<<<<< master
// // let double = function double(x) {
// //     return 2 * x
// // }

// let double = (x) => 2 * x;

// // function invert(x) {
// //     return -x
// // }

// let invert = (x) => -x;
// =======
// let double = function double(x) {
//     return 2 * x
// }
// // Megoldás:
//     let double = x => x * 2;

// function invert(x) {
//     return -x
// }
// // Megoldás:
//     let invert = x => -x;

// let hello = function() {
//     return 'hello'
// }
// // Megoldás:
//     let hello = () => 'hello';
// >>>>>>> master

// // let hello = function() {
// //     return 'hello'
// // }

// let hello = () => "hello";

// // Alakítsuk function expressionökké az arrow functionöket!

// <<<<<<< master
// // let helloPrefixer = s => 'hello ' + s

// let helloPrefixer = function(s) {
// 	return `hello ${s}`;
// }

// // let doNothing = () => {}

// let doNothing = function() {}

// // Alakítsuk function declaractionné

// // let advice = raining => raining? 'Take your umbrella' : 'Take you sunglasses'

// function advice(raining) {
// 	if (raining) {return 'Take your umbrella';}
// 	else {return 'Take your sunglasses';}
// }


// // let isEmpty = arr => !arr.length

// function isEmpty(arr) {
// 	if (!arr.length) {return true;}
// 	else {return false;}
// }

// // let tricky = want => want = false

// function tricky(want) {
// 	return want = false;
// }
// =======
// let helloPrefixer = s => 'hello ' + s
// // Megoldás:
//     let helloPrefixer = function(s){
//         s = 'hello ' + s;
//         return s;
//     }


// let doNothing = () => {}
// // Megoldás:
//     function doNothing(){}

// // Alakítsuk function declaractionné

// let advice = raining => raining? 'Take your umbrella' : 'Take you sunglasses'
// // Megoldás:
//     function advice(raining){
//         if(raining === true){
//             return 'Take your umbrella';
//         }else{
//             return 'Take your sunglasses';
//         }
//     }



// let isEmpty = arr => !arr.length
// // Megoldás:
//     function isEmpty(arr){
//         if(arr.length <= 0){
//             return false;
//         }
//     }



// let tricky = want => want = false
// // Megoldás:
//     function tricky(want){
//         want = false;
//         return want;
//     }
// >>>>>>> master
