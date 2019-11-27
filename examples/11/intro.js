// let globalVar = 5;

// function f() {
//     let globalVar = 10;
//     console.log(globalVar);
// }

// console.log(globalVar);
// f();


// let someValue = 10;
// fParam(someValue);

// function fParam() {
//     console.log(someValue);
//     someValue = 5;
// }


// let num = 3
// let num2 = 4

// // temporal dead zone
// function swapGlobal() {
//     let swapper = num;
//     console.log(swapper)
//     console.log("itt jar a program");
//     var num = num2;
//     let num2 = swapper;
//     console.log(`${num} was ${num2} before and vica versa`)
// }

// swapGlobal();

// function fCallback(processValue) {
//     return processValue(5);
// }

// function doubleNumber(num) {
//     return num*2;
// }

// console.log(fCallback(doubleNumber));


function fLoop(arr, favorite) {
    let i = 0;
    while(i < arr.length) {
        if (arr[i] == favorite) {
            return;
            console.log("favorite number found");
        }
        console.log(`${arr[i]} is not my favorite number`);
        i++;
    }
}

fLoop([1, 2, 42, 3], 42);
fLoop([1, 2, 3, 4], 42);

