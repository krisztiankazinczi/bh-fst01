const rnd=[]
let rndnr=0

while(rnd.length<10){
    rndnr=Math.floor((Math.random()*100)+1);
    if(rndnr>50){
        rnd.push(rndnr);
    }
}

console.log(rnd);
