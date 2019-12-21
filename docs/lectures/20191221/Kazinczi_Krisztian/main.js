const index = require('./index.js');

const path = '../vers.txt';

const oddLines = index.oddLines(path); 
const evenLines = index.eventLines(path); 

function forLoop (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(oddLines[i]);
        console.log(evenLines[i]);            
    }
}


function writePoemOut(odd, even) {
    if (oddLines.length <= evenLines.length) {
        forLoop(evenLines);
    } else {
        forLoop(oddLines);
    }
}

writePoemOut();