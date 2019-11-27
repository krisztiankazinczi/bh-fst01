const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sum(until) {
    let s = 0;
    for(let i = 1; i <= until; i++) {
        s = s + i;
    }
    return s;
}

reader.question("please provide a number: ", function(num) {
    let n = parseInt(num, 10);
    
    let s = sum(n);

    console.log(s);

    reader.close();
});