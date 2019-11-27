const fs = require('fs');

let contents = "don't panic";

let path = 'writeme3.txt';

fs.writeFileSync(path, contents, 'utf8', function errorHandler(err) {
    console.log("Error writing to file: " + err);
})