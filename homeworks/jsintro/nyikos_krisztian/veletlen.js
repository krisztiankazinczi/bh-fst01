let count = 0
let szam = 0
let tomb = []

while (count < 10) {
    szam = Math.floor(Math.random(0, 100)*100)
    if (szam>50) {
        tomb.push(szam)
        count++
    }
}

console.log(tomb)

/* 0 es 100 kozotti veletlen szamok generalasa ciklusban, kilepes, mikor osszegyujtottunk 10 szamot ami nagyobb mint 50.
a ciklus futasa utan irjuk ki az osszegyujtott szamokat a console-ba */