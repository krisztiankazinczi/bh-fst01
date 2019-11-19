let tomb = [];
let count = 0
for (let index = 1; index < 101; index++) {
    
    if (!(index%2)) {
        tomb.push(index)
    }
    if (count==10) {
        console.log(tomb.length);
        count = 0;
    }
    count++
}
console.log(tomb)

/* Feladat: paros szamok tombbe gyujtese 1-100 ig, minden tizedik iteracioban irjuk ki a console-ba a tomb aktualis hosszat
a ciklus utan irjuk ki a tomb erteket a console-ba */