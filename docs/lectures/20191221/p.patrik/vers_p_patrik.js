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

function evenLines(path){

  let vers = fs.readFileSync(path);
  let versString = vers.toString();
  let a = versString.split("\n")
  
      let array = []  
        for (let index = 0; index < a.length-1; index++) {
            if(index%2 !== 0){
               
             array.push(a[index]);
            } 
        }
  
      return array;
  
  }

module.exports = {
  oddLines: oddLines,
  evenLines: evenLines
}
