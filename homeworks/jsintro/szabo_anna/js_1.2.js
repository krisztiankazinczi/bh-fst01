// 2. veletlen szamok kiszamolasa
// 0 es 100 kozotti veletlen szamok generalasa ciklusban, 
// kilepes, mikor osszegyujtottunk 10 szamot ami nagyobb mint 50.
// a ciklus futasa utan irjuk ki az osszegyujtott szamokat a console-ba

const  greaterThan50 = []
let count = 0

for(i = 0; count < 10; i++){
    let number = Math.floor(Math.random() * 101)
    if(number > 0){
        count++;
        greaterThan50.push(number);
    }  
    
}
console.log(`A tömbben lévő elemek száma ${count}`)
console.log(`greaterThan50 = [${greaterThan50}]`)
