// Alakítsuk arrow functionökké a függvényeket!
// Ahol lehet, hagyjunk el amit csak lehet a szintaxisból!

// let double = function double(x) {
//     return 2 * x
// }

let double = (x) => 2 * x;

// function invert(x) {
//     return -x
// }

let invert = (x) => -x;

// let hello = function() {
//     return 'hello'
// }

let hello = () => "hello";

// Alakítsuk function expressionökké az arrow functionöket!

// let helloPrefixer = s => 'hello ' + s

let helloPrefixer = function(s) {
	return `hello ${s}`;
}

// let doNothing = () => {}

let doNothing = function() {}

// Alakítsuk function declaractionné

// let advice = raining => raining? 'Take your umbrella' : 'Take you sunglasses'

function advice(raining) {
	if (raining) {return 'Take your umbrella';}
	else {return 'Take your sunglasses';}
}


// let isEmpty = arr => !arr.length

function isEmpty(arr) {
	if (!arr.length) {return true;}
	else {return false;}
}

// let tricky = want => want = false

function tricky(want) {
	return want = false;
}