// Vegyünk egy tömböt. Írjuk ki először a páros elemeket, majd a páratlanokat.




// Vegyünk egy értéket. Járjunk be egy tömböt és írjuk ki  azokat az indexeket, ahol az elem megegyezik a mondott értékkel.
// 	n = 5
// 	t = [1, 1, 5, 9, 8, 5]

// Vegyünk egy tömböt. Írjuk ki az elemeit és az indexeiket visszafelé, de úgy, hogy a tömbön előrefelé iterálunk. 


// let t = [1, 2, 3, 4, 5, 6, 7];

// for(let i = 0; i < t.length; i++) {
//     console.log(`i = ${i} , t[i] = ${t[t.length - 1 - i]}`);
// }




// Vegyünk egy tömböt. Írjuk ki az elemeit és az indexeket "középpontosan tükrözve". Például: első iteráció során az első és utolsó, második iteráció során a második és utolsó előtti. 
// 	t = [1, 2, 5 ,9, 7, 3, 42]

// let t = [1, 2, 5 ,9, 7, 3, 42];

// for(let i = 0; i < t.length; i++) {
//     let i2 = t.length - 1 - i;
//     console.log(`i = ${i}, t[i] = ${t[i]} i2 = ${i2}, t[i2] = ${t[i2]}`);
// }

// Vegyünk egy tömböt. Írjuk ki azokat az elemeit és az indexeket, amelyek megegyeznek a "középpontosan tükrözött" indexen lévő elemmel. 
// 		t = [1, 2, 5, 6, 8, 6, 3, 2, 0]
 
let t = [1, 2, 5, 6, 8, 6, 3, 2, 0];

for(let i = 0; i <= t.length - 1; i++) {
    let i2 = t.length - 1 - i;
    if (t[i] == t[i2]) {
        console.log(`i = ${i}, t[i] = ${t[i]}`)
    }
}