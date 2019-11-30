// 1.	Írjunk egy swapGlobal függvényt, 
//ami megcseréli két globális változó értékét egy lokális segédváltozó használatával.

let a = 6
let b = 3
let c = 4

swapGlobal(a,b)
swapGlobal(b,c)

function swapGlobal(param1, param2){
    let swapper = param1
    param1 = param2
    param2 = swapper
    console.log(param1,param2)
}

// 2.	Írjunk egy arrayReverse függvényt, amely egy megadott tömb fordítottját adja vissza.

let tomb = [1,2,3,4,5,6]

arrayReverse(tomb)

function arrayReverse(arr){
    let reverseArr = []
    let reverseIndex = 0
    for(i = arr.length-1; i >= 0; i--){
        reverseArr[reverseIndex] = arr[i]
        reverseIndex++
    }
    console.log(reverseArr)

}
// 3.	Írjunk egy forEach függvényt, amely két paramétert vár, egy tömböt és egy proc függvényt. 
//A forEach végrehajtja a proc függvényt a tömb minden egyes elemén és kiírja az eredményt, iterációnként. 
//Például a proc függvény lehet egy függvény, ami egy számot megszoroz mínusz eggyel. 

forEach(tomb,process)

function forEach(arr, proc) {
    for(i = 0; i < arr.length; i++){
        console.log(proc(arr[i]))
    }

}

function process(num){
    return num*-1
}


