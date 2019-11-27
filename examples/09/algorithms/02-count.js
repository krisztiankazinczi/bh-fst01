let arr = [1, 4, -4, 9, 8, -5];
let count = 0;
let i = 0;

while (i < arr.length) {
    if (arr[i] < 0) {
        count = count + 1;
    }
    i = i + 1;
}

console.log(count);