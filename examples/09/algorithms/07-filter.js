let source = [1, 4, -4, 9, 8, -5];
let filtered = [];
let i = 0, j = 0;

while (i < src.length) {
    if (source[i] < 0) {
        filtered[j] = source[i];
        j = j + 1;
    }
    i = i + 1;
}

console.log(filtered);