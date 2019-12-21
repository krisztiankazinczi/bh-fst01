const fs = require('fs');

function oddLines(path) {
    const poem = fs.readFileSync(path).toString();

    let lines = poem.split("\n");

    let newArr = [];

    console.log(lines);

    for (let i = 0; i < lines.length; i++) {
        if(i%2) {newArr.push(lines[i]);}
    }
    return newArr;
}
