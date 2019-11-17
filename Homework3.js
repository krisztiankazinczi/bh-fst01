/**Kázmér által adott házifeldat
 * 
 * Feladat leírás:
 * 
 *  1. paros szamok tombbe gyujtese 1-100 ig, minden tizedik iteracioban irjuk ki a console-ba a tomb aktualis hosszat
 *  a ciklus utan irjuk ki a tomb erteket a console-ba
 *
 *
 * 2. veletlen szamok kiszamolasa
 * 0 es 100 kozotti veletlen szamok generalasa ciklusban, kilepes, mikor osszegyujtottunk 10 szamot ami nagyobb mint 50.
 * a ciklus futasa utan irjuk ki az osszegyujtott szamokat a console-ba
 * 
 */


/**
 * Első Feladat
 */

const arr1 = []

for (let paros = 1; paros <= 100; paros++) {

    if (!(paros % 2)) {
        arr1.push(paros)
    }

    if (!(paros % 10)) {
        console.log(arr1.length)
    }
}
console.log(arr1)

/**
 * Vagy
 */

const arr3 = []
for (let parosszam = 1; parosszam <= 100; parosszam++) {

    if (parosszam % 2) {
        parosszam = parosszam +1;
        arr3.push(parosszam)
    }

    if (!(parosszam % 10)) {
        console.log(arr3.length)
    }
}
console.log(arr3)


/**
 * Második Feladat
 */

const arr2 = []


while (10 > arr2.length) {
    szam = Math.floor(Math.random() * 101)
    if (szam > 50) {
        arr2.push(szam)
    }
}

console.log(arr2);
