
const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("please give me your name: ", function(name) {
    console.log(`the answer was: ${name}`);
    reader.close();
});