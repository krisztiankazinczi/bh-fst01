const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function readNumber() {
    reader.question("please provide a number: ", function(answer) {
        let num = parseInt(answer, 10);
    
        if (isNaN(num)) {
            console.log("I said, please provide a NUMBER!");
            readNumber();
        } else {
            console.log(`Thank you for the number. The number was ${num} `);
            reader.close();
        }
    });
}

readNumber();
