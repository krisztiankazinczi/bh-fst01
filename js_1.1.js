// 1. paros szamok tombbe gyujtese 1-100 ig,
// minden tizedik iteracioban irjuk ki a console-ba a tomb aktualis hosszat
// a ciklus utan irjuk ki a tomb erteket a console-ba
const evenNumbersToHundred = []
let count = 0

for(i = 1; count < 50; i++){
    let number = Math.floor(Math.random() * 101)
    if(number %2 == 0){
        count++;
        evenNumbersToHundred.push(number);
    }  
    if(i %10 == 0) {
        console.log(`${i}. iteráció`)
        console.log(`A tömbben lévő elemek száma jelenleg ${count}`)
    } 
    
}
console.log(`Utolsó (${i}.) iteráció`)
console.log(`A tömbben lévő elemek száma ${count}`)
console.log(`evenNumbersToHundred = [${evenNumbersToHundred}]`)
