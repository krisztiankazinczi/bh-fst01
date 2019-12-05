const arr = []

for (let i = 1; i <= 100; i++) {
    if (!(i % 2)) {
        arr.push(i)
        if (i % 10 === 0) {
            console.log(arr.length);
        }
    }
}

const arr2 = []

while (arr2.length < 10) {
    let y = Math.floor(Math.random() * 100) + 1;
    if (y > 50) {
        arr2.push(y)
    }
}
console.log(arr2);