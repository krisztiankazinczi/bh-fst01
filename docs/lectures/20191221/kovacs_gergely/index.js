const fs = require('fs');

function oddLines(path) {
    const fileBuffer = fs.readFileSync(path);
    const poem = fileBuffer.toString();
    let oddpoem = poem.split('\n');
    for(let i = 0; i < oddpoem.length; i++){
        if(i%2 !==0){
            console.log(oddpoem[i]);
        }
    }
}

let vers = 'docs/lectures/20191221/vers.txt';


oddLines(vers);



