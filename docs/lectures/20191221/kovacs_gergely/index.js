const fs = require('fs');

function oddLines(path) {
    const fileBuffer = fs.readFileSync(path);
    const poem = fileBuffer.toString();
    let oddpoem = poem.split('\n');
    let arr2 = [];
    for(let i = 0; i < oddpoem.length-1; i++){
        if(i%2 !==0){
            arr2.push(oddpoem[i]);
        }
    }
    return arr2;
}

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


let vers = '../vers.txt';

module.exports = {
    oddLines: oddLines,
    evenLines: evenLines
}


