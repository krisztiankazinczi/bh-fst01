# 2019. december 12., csütörtök

[előző alkalom](../20191210) [következő alkalom](#)

## Órai anyag

### Gyakorlatok

#### 1. feladat

Tekintsük az alábbi fájlstruktúrát

```
main.js
data.json
```

data.json: egy tömböt kódoló fájl.

Írjunk egy programot, ami felolvassa a `data.json` tartalmát és kiírja a tömb elemeinek átlagát a konzolra!

Példa:

```
// data.json
[1, 20, 95, 43, 3]

// terminal
$ node main.js
32.4
```

Üres tömb esetén az eredmény nulla 
```
// data.json
[]

// terminal
$ node main.js
0
```

Csak a Number típusú (`typeof data[i] === 'number'`) elemeket dolgozzuk fel. Ha az elem nem `Number`, teljesen eltekintünk tőle, azaz az átlag kiszámítása során úgy teszünk, mintha ott se lenne!

A feldolgozásból kihagyott elemeket menet közben a konzolra írjuk.

```
// data.json
[1, 2, "3", 4]

// terminal
$ node main.js
Error processing data: "3" is not a Number type
Average: 2.3
```

Ha a beolvasott adat egyáltalán nem tömb (`!(data instanceof Array)`), akkor az egész feldolgozást kihagyjuk, kiírjuk a hibát és a programnak vége.

```
// data.json
foobar

// terminal
$ node main.js
Error: data is not an array
```

#### 2. feladat

Szervezzük ki a beégetett fájlnevet parancssori argumentumba!

Példa:

```
$ node main.js data.json
32.4
```

Ha olyan parancssori argumentumot adunk meg, amely egy nemlétező fájlra mutat, a program kezelje a Node.js által eldobott hibát.

A hibakezelés a főprogramban legyen.

```sh
$ node main.js data.jsonstatham
Could not open file (data.jsonstatham): 
```

Abban az esetben, ha a data.json tartalma nem egy tömb volt, a hiba lokális kezelése helyett dobjunk hibát (`throw`) és részletezzük a hiba természetét az eldobott `Error` objektumban!

A hibát ugyanott kapjuk el, mint az előző példában, azaz egy `try... catch` konstrukciót használjunk, a főprogramban!

#### 3. feladat

Tekintsük az alábbi könyvtár szerkezetet

```
main.js
products.json
categories.json
```

A `products.json` termékek adatait tartalmazza, a `categories.json` termékkategóriákét.

Írjunk egy programot, amely parancssorról megkapja egy kategória nevét és listázza a kategóriához tartozó termékek nevét.

Példa:

```
$ node main.js Keyboards
- Rubber dome keyboard
- Mechanical keyboard
```

Ha olyan kategóriát adtunk meg, ami nem létezik a `categories.json` fájlban, írjuk ki a konzolra!

```
$ node main.js "Naughty stuff"
Sorry, wrong shop!
```

Ha a kategória létezik, de nincs termék, írjuk a konzolra!

```
$ node main.js "Cheap MacBooks"
Sorry, we sold all our Cheap MacBooks!
```

products.json
```json
[
    {
        "id": 1,
        "name": "LCD screen",
        "categoryId": 1
    },
    {
        "id": 2,
        "name": "CRT screen"
        "categoryId": 1
    },
    {
        "id": 3,
        "name": "Rubber dome keyboard"
        "categoryId": 2
    },
    {
        "id": 4,
        "name": "Mechanical keyboard"
        "categoryId": 2
    },
    {
        "id": 5,
        "name": "Laser printer"
        "categoryId": 3
    },
]
```

categories.json
```json
[
    {
        "id": 1,
        "name": "Displays"
    },
    {
        "id": 2,
        "name": "Keyboards"
    },
    {
        "id": 3,
        "name": "Printers"
    },
    {
        "id": 4,
        "name": "Cheap MacBook"
    }
]
```

#### 4. feladat

Tegyük felhasználóbarátabbá az alkalmazást!

Legyen mindegy, hogy kisbetűvel vagy nagybetűvel adtuk meg a kategóriát.

```
$ node main.js KeYboARDs
- Rubber dome keyboard
- Mechanical keyboard

```

#### 5. feladat

Tegyük felhasználóbarátabbá az alkalmazást!

A termékek a listázáskor egy "szép" dobozban jelenjenek meg. A doboz szélessége a legszélesebb string, plusz egy-egy szóköz és a `|` karakter.

```
+======================+
| Keyboards            |
+======================+
| Rubber dome keyboard |
+----------------------+
| Mechanical keyboard  |
+----------------------+
```

Tipp

```js
// getCategoryByName("keyboards") // {"id": 2, "name": ""keyboards}
function getCategoryByName(catName) { ... }

// getProductsFromCategory(2) // ["Rubber dome keyboard", "Mechanical keyboard"]
function getProductsFromCategory(categoryId) { ... }

function getProductNames(products) { ... }

// getLongestString(["foo", "barbar", "megszentsegtelenithetetlensegeskedeseitekert"]) // 44
function getLongestString(names) { ... }

// thickHorizontalLine(10) // "=========="
function thickHorizontalLine(length) { ... }

// thinHorizontalLine(10) // "----------"
function thinHorizontalLine(length) { ... }

// padWith("+", "===") // "+===+"
function padWith(padding, str) { ... }

// padWithRight(" ", "foobar", 5) // "foobar     "
function padWithRight(padding, str, times) { ... }

// header("keyboards") 
//
// +===========+
// | Keyboards |
// +===========+
function header(title)



```

```js
// main.js

const cat = getCategoryByName(categoryName);
const prods = getProductsFromCategory(cat.name);
const prodNames = getProductNames(prods);
const maxLength = getLongestString([cat.name, prodNames]);

console.log(header(maxLength))
for(let i = 0; i < prodNames.length; i++) {
    ...
}





