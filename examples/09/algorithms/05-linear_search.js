let arr = [1, 4, -4, 9, 8, -5];
let el;
let i = 0;

while (i < arr.length) {
    if (arr[i] < 0) {
        el = arr[i];
        break;
    }
    i = i + 1;
}

console.log(el);