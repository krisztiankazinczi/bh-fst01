let positives = [1, 4, 9, 8, ];
let negatives = [-4, -5];
let intersection = [];
let i = 0, j = 0, k = 0;

while (i < positives.length) {
    if (source[i] < 0) {
        negatives[j] = source[i];
        j = j + 1;
        i = i + 1;
        continue;
    }

    if (source[i] > 0) {
        positives[k] = source[i];
        k = k + 1;
        i = i + 1;
        continue;
    }

    i = i + 1;
}

console.log(negatives);
console.log(positives);