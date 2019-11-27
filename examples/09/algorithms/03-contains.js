let arr = [1, 4, -4, 9, 8, -5];
let contains = false;
let i = 0;

while (i < arr.length) {
    if (arr[i] < 0) {
        contains = true;
        break;
    }
    i = i + 1;
}

console.log(contains);