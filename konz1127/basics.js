let a = 5;
let b = 5;

f();
console.log(a);
console.log(b);
// hoisting:
// a fuggvenyek es a valtozo deklaraciok az adott szkopban
// elore deklaralodnak
function f() {
    let a = 10; // shadowing: eltakarja az ugyanazon nevu globalis valtozonak az erteket
    b = 15; // megvaltoztatja a b globalis valtozo erteket, mivel nem DEKLARALUNK uj valtozot
    console.log(a);
}





