const fs = require('fs');
let pathhh = '../vers.txt'
const poemLines = require('./index.js');
const oddPoem = poemLines.oddLines(pathhh);
const evenPoem = poemLines.evenLines(pathhh);

console.log(oddPoem);

function everyLines (odd,even){
    let segedArr = [];
    for(let i = 0; i < odd.length || even.length;i++){
        segedArr.push(odd[i]);
        segedArr.push(even[i]);
    }
    return segedArr;
}

console.log(everyLines(oddPoem,evenPoem));


