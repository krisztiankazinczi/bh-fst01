const tomb=[]

for(let i=1;i<=100;i++){
    if(!(i%2)){
        if(!(i%10)){
            tomb.push(`${i} -> Tömb jelenlegi hossza: ${tomb.length} elem!`)
        }else{
            tomb.push(i)
        }
    }
    
}

console.log(tomb);
