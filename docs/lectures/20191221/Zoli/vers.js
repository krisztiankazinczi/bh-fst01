const fs = require('fs')
const path="../vers.txt";


function addLines(path){
    const vers=fs.readFileSync(path).toString();
    let arr=[];
    let arrOdd=[];

    arr=vers.split("\r\n");

    for (i=0;i<arr.length;i++) {
        if(!(i%2)){
            arrOdd.push(arr[i]);
        }
    }
    return arrOdd;
}

function eventLines(path){
    const vers=fs.readFileSync(path).toString();
    let arr=[];
    let arrOdd=[];

    arr=vers.split("\r\n");

    for (i=0;i<arr.length;i++) {
        if(i%2){
            arrOdd.push(arr[i]);
        }
    }
    return arrOdd;
}

console.log(addLines(path));
console.log(eventLines(path));



