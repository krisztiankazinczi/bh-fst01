const fs = require('fs');

function oddLines(path) {
    const fileBuffer = fs.readFileSync(path);
    const poem = fileBuffer.toString();
    let oddpoem = poem.split('\n');
    for(let i = 0; i < oddpoem.length; i++){
        if(i%2 !==0){
            console.log(oddpoem[i]);
        }
    }
}

let vers = '../vers.txt';

function evenLines(path) {
    const fileBuffer = fs.readFileSync(path);
    const poem = fileBuffer.toString();
    let oddpoem = poem.split('\n');
    let arr = [];
    for(let i = 0; i < oddpoem.length; i++){
        if(i%2 ===0){
            arr.push(oddpoem[i]);
        }
    }
    return arr;
}

let result = evenLines(vers);
console.log(result);


