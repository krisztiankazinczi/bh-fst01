// Írjunk programot, ami az arrayReverse és a pop függvények segítségével egyszer a tömb elejéről, egyszer a végéről távolít el elemet. Minden eltávolítás után írjuk ki a legújabb tömböt.

// Az eredeti tömb: [1, 2, 3, 4]
// 1. lépés: [2, 3, 4]
// 2. lépés: [2, 3]
// 3. lépés: [3]
// 4. lépés: []
// Az eredeti tömb változatlan: [1, 2, 3, 4]
// Vége!

// function pop(ujt) {
//     let nPop = [];
//     for (let i = 0; i < ujt.length - 1; i++) {
//         nPop[i] = ujt[i];
//     }
//     return nPop;
// }
// function arrayReverse(arr) {
//     let reversT=[];
//     for(let i=0;i<arr.length;i++){
//         reversT[(arr.length-1)-i]=arr[i];
//     }
//     return reversT;
// }

// let t = [1, 2, 3, 4];

// Az eredeti tömb: [1, 2, 3, 4]
// 1. lépés: [2, 3, 4]
// 2. lépés: [2, 3]
// 3. lépés: [3]
// 4. lépés: []
// Az eredeti tömb változatlan: [1, 2, 3, 4]


// console.log(`Az eredeti tomb: ${t}`)


// for(let i = 0; i < t.length + 1; i++) {
//     t = pop(t);
//     if ((i%2 == 0)) {
//         console.log(`${i}. lepes: ${t}`);
//         t = arrayReverse(t);
//     } else {
//         t = arrayReverse(t);
//         console.log(`${i}. lepes: ${t}`);
//     }
// }





// console.log(`arrayReverse(t) == ${t}`);
// t = pop(t);
// console.log(`pop(t) == ${t}`);
// t = arrayReverse(t);

// console.log()

// console.log(`arrayReverse(t) == ${t}`);








// Írjunk egy forEach függvényt, amely két paramétert vár, egy tömböt és egy proc függvényt. A forEach végrehajtja a proc függvényt a tömb minden egyes elemén és kiírja az eredményt, iterációnként. Például a proc függvény lehet egy függvény, ami egy számot megszoroz mínusz eggyel. 

// function forEach(arr, proc) {
//     let i = 0;
//     arr.forEach(function(element) {
//         arr[i*2] = proc(element);
//         i++;
//     });
// }

// function inverse(num) {
//     return num * -1;
// }

// let t = [1, 2, -3, 4];
// forEach(t, inverse);
// console.log(t);


// Írjunk egy countDistinct függvényt, amely egy megszámolja, hogy hány különböző elem van egy tömbben.

// countDistinct([1, 2, 3, 4, 5, 5]) === 5
// countDistinct([1, 2, 3, 4, 5, 6]) === 6
// countDistinct([1, 1, 1, 5, 5, 5]) === 2

function countDistinct(arr)  {
    let seenItems = [];

    
    for(let i = 0; i < arr.length; i++) {
        let seen = false;

        for(let j = 0; j < seenItems.length; j++) {
            if (arr[i] == seenItems[j]) {
                seen = true;
            }
        }

        if (!seen) {
            seenItems[seenItems.length] = arr[i];
        }
    }

    return seenItems.length;
}

console.log(countDistinct([1, 1]));