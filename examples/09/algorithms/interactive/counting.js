
const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function counter(num, arr) {
    let count = 0;
    for(let i = 2; i < arr.length; i++) {
        if (arr[i] == num) {
            count++;
        }
    }
    return count;
}

reader.question("please provide a number: ", function(num) {
    let count = counter(num, process.argv);

    console.log(`there were ${count} number of occurences of ${num}`);

    reader.close();
});