// Írjunk egy dividables(numbers, divisors) függvényt, amely a numbers paraméterben kapott egész számokból álló tömbből kiválogatja azokat, 
// amelyek a divisors tömbben kapott összes egész számmal osztható.
// A visszatérési érték a kiválogatott számokat tartalmazó tömb.

function dividables(numbers, divisors){
    const res = [];

    numbers.forEach(element => {
        if(divisors.every(divs => !(element % divs))){
            res.push(element);
        }
    });
    return res;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(dividables(arr, [2,3]));






// Írjunk egy `legalStrings(strings, charStr)` függvényt, amely a strings paraméterben kapott string tömbből 
// kiválogatja azokat a stringeket, amelyekben nincs más karakter csak olyan, amely a 
// charStr paraméterben található stringben van.
// A visszatérési érték a kiválogatott stringek tömbje.

function legalStrings(strings, charStr) {
    const result = [];
    let charArr = [];
    charArr = charStr.split('');

    strings.forEach(element => {
        let strArr = [];
        let found = [];
        let match;

        strArr = element.split('');
        strArr.forEach(s => {
            found.push(charArr.some(c => s === c))
        });
        match = found.every(f => f === true);
        if(!match){return;}
        else{result.push(element);}
    });
    return result;
}

console.log(legalStrings(['aaga', 'abba', 'baba', 'daba'], 'ab'));







// Írjunk egy getMax(nums) függvényt, 
// amely a nums paraméterben érkező egész számokat tartalmazó tömbből visaszaadja a legnagyobb elemet.

function getMax(nums) {
    let result;
    result = nums.reduce((a, b) => {
        return b > a ? b : a;
    }, 0);
    return result > 0 ? result : undefined

    // Második megoldás
    //return Math.max(...nums);
}

let nums = [1, 2, 3, 4, 5, -6, -7, -8, -9, 10];
let nums2 = [4];
let nums3 = [];

console.log(getMax(nums));







// Írjunk egy select(arr, cond) egy függvény, ahol arr egy tömb, cond egy logikai értéket visszaadó függvény
// A select az arr elemeit két külön tömbbe válogatja aszerint, hogy igaz volt-e rájuk a cond feltétel vagy sem
// A select visszatérési értéke egy kételemű tömb.

function select (arr, cond){
    const res1 = [];
    const res2 = [];
    const res = [];

    arr.forEach(element => {
        cond(element) ? res1.push(element) : res2.push(element)
    });
    res.push(res1, res2);
    return res;
}

const a = ['a','b',3,1,'g',12]

function f (elem){
    if(isNaN(elem)){return false;}
    return true;
}

let rres = select(a,f);
console.log(rres[0],rres[1]);







// Írjunk egy `isPermutation(subject, base)` függvényt, amely megmondja a subject stringről, 
// hogy a base string permutációja-e,
// azaz, hogy a subject string előállítható-e kizárólag a base string karaktereiből úgy, 
// hogy csak a base karaktereit használjuk.

function isPermutation(subject, base) {
    let result = false;
    let subArr = [];
    let baseArr = [];

    if (subject && base) {
        subArr = subject.split('');
        baseArr = base.split('');

        baseArr.forEach(element => {
            let found = subArr.find(sub => element === sub);
            found ? subArr.splice(subArr.indexOf(found), 1) : subArr.push(element)
        });
        subArr.length === 0 ? result = true : result = false
    }
    return result;
}


// A subject string halmazból visszaadja a base string halmaz szerint megtalált permutációkat
//egy új halmazban!
function permutationMatches(subject, base) {
    let result = [];

    if (base.length === subject.length) {
        base.forEach(b => {
            subject.forEach(s => {
                isPermutation(s, b) ? result.push(s) : ''
            });
        });
        return result;
    }
}

let subject = ['oop', 'cgi', 'sql', 'node'];
let base = ['poo', 'ic', 'siql', 'done'];

console.log(isPermutation(subject[2], base[2]));

//console.log(permutationMatches(subject, base));

