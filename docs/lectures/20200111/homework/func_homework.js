// Írjunk egy dividables(numbers, divisors) függvényt, amely a numbers paraméterben kapott egész számokból álló tömbből kiválogatja azokat, amelyek a divisors tömbben kapott összes egész számmal osztható.

// A visszatérési érték a kiválogatott számokat tartalmazó tömb.

const dividable = (arr1, arr2) => arr1.filter(e => arr2.every(d => e % d === 0));


// Írjunk egy legalStrings(strings, charStr) függvényt, amely a strings paraméterben kapott string tömbből kiválogatja azokat a stringeket, amelyekben nincs más karakter csak olyan, amely a charStr paraméterben található stringben van.

// A visszatérési érték a kiválogatott stringek tömbje.

const legalStrings = (strs, chars) => strs.filter(s => chars.split("").every(c => s.includes(c)));

// Írjunk egy getMax(nums) függvényt, amely a nums paraméterben érkező egész számokat tartalmazó tömbből visszaadja a legnagyobb elemet.

const getMax = nums => nums.reduce((acc, num) => acc > num ? acc : num);

// Írjunk egy select(arr, cond) egy függvény, ahol arr egy tömb, cond egy logikai értéket visszaadó függvény

// A select az arr elemeit két külön tömbbe válogatja aszerint, hogy igaz volt-e rájuk a cond feltétel vagy sem

// A select visszatérési értéke egy kételemű tömb.

const select = (arr, cond) => Array.of(arr.filter(num => cond(num)), arr.filter(num => !cond(num)));

// Írjunk egy isPermutation(subject, base) függvényt, amely megmondja a subject stringről, hogy a base string permutációja-e, azaz, hogy a subject string előállítható-e kizárólag a base string karaktereiből úgy, hogy csak a base karaktereit használjuk.

const isPermutation = (subject, base) => base.split("").sort().every((char, index) => char === subject.split("").sort().join("")[index] && subject.length === base.length);