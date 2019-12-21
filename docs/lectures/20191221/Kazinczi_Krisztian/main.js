const index = require('./index.js');

const path = '../vers.txt';

const oddLines = index.oddLines(path); 
const evenLines = index.evenLines(path); 

console.log(oddLines);

function writePoemOut() {
    let indexOdd = 0;
    let indexEven = 0;
    for (let i = 0; i < (oddLines.length + evenLines.length - 1); i++) {
        if (!(i%2) === 0) {
            console.log(oddLines[indexOdd]);
            indexOdd++;
        } else {
            console.log(evenLines[indexEven]);
            indexEven++;
        }
    }
}

writePoemOut();