const fs = require('fs');
let pathhh = '../vers.txt'
const poemLines = require('./index.js');
const oddPoem = poemLines.oddLines(pathhh);
const evenPoem = poemLines.evenLines(pathhh);

function everyLines (odd,even){
    let segedArr = [];
    let a = even.length;
    let b = odd.length;
    let c;
    if(a < b){
        c = b;
    }
    if(a > b){
        c = a;
    }
    for(let i = 0; i < c;i++){
        segedArr.push(even[i]);
        segedArr.push(odd[i]);
    }
    return segedArr;
}


console.log(everyLines(oddPoem,evenPoem));



