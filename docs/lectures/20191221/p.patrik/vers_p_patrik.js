const fs = require('fs');

function oddLines(path){

let vers = fs.readFileSync(path);
let versString = vers.toString();
let a = versString.split("\n")

    let array = []  
      for (let index = 0; index < a.length; index++) {
          if(index%2 === 0){
             
           array.push(a[index]);
          } 
      }

    return array;

}

console.log(oddLines('../vers.txt'));
