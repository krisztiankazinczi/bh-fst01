# 2019. december 10., kedd

[előző alkalom](../20191203) [következő alkalom](#)

## Órai anyag

### Kivételkezelés

- [Vezérlési szerkezetek és hibakezelés (Exception handling statements rész)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) 
- [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
- [try, catch, finally](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [JS Error referencia](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [Node.js error doksi](https://nodejs.org/dist/latest-v12.x/docs/api/errors.html#errors_errors)


### Fájlkezelés (csak szinkronos)

- [Reading files with Node.js](https://nodejs.dev/reading-files-with-nodejs)
- [Writing files with Node.js](https://nodejs.dev/writing-files-with-nodejs)
- [Node.js fs modul doksi](https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_fs_readfilesync_path_options)



## Gyakorlatok

- Kivételkezelés
- Fájlkezelés
- Webszerver
- Adatbázis

### Webszerver

Modellezzünk egy webszerverrel történő kommunikációt!

Hozzuk létre az alábbi könyvtár struktúrát (a könyvtárakat / toldalék jelöli)

```
webserver/
    example.com/
        hello.html
    news.com/
        tech.html
    main.js
    webserver.js
```

#### A `WebServer` osztály

Felvezetés:
- HTTP alapok ismétlése: kliens, szerver, kérés, válasz, státusz kód
- Node.js url modul: https://nodejs.org/docs/latest-v12.x/api/url.html

![](webserver.png)

A `let resp = webserver.get(url)` egy `HttpResponse` objektumot eredményez.

![](httpresponse.png)

Ha az `url` alapján sikerült felolvasni a fájlt, `resp.status` értéke `200` és
`resp.body` a fájl tartalmát tartalmazza, máskülönben `resp.status` `404` lesz
és a `resp.body` üres.


A program indítása: `$ node main.js "http://example.com/hello.html"`

- egy parancssori argumentum, amely egy URL
- a program a parancssori argumentum alapján a hostname (`example.com`)
  által jelölt mappából a path rész által jelölt fájlt (minden, ami a
  hostname után jön, `hello.html`) felolvassa
- a felolvasott tartalmat kiírja

A kiírás a főprogramban történjen, az összes többi logika a `webserver` modulban.



Példa `main.js`:

```
let resp;

 // hello.html tartalmát adja vissza stringként
resp = webserver.get('http://example.com/hello.html')
if (resp.status === 200) {
    console.log(`success, status: ${resp.status}, response: ${resp.body}`)
}

 // nem létező oldal (az example.com alatt)
resp = webserver.get('http://example.com/tech.html')
if (resp.status !== 200) {
    console.log(`error, status: ${resp.status}, response: ${resp.body}`);
}

 // a news.com alatt már létező oldal
resp = webserver.get('http://news.com/tech.html')
if (resp.status === 200) {
    console.log(`success, status: ${resp.status}, response: ${resp.body}`)
}
```

Tippek:
1. kezdjük azzal, hogy a main modulból egy argumentumban kapott fájlt meg tudunk nyitni és a tartalmát kiírjuk. Írjuk meg a szükséges kivételkezelési kódot, arra az esetre, ha a fájl nem létezik!
1. alakítsuk át, hogy a WebServer osztály get metódusa csinálja a megnyitást és a kivételkezelést -- a get ekkor még egy fájl útvonalat kap, visszatérési értéke pedig egy string. Ha nem sikerült a fájl felolvasása, üres sztringet adjunk vissza. 
1. használjuk a Node.js url modulját arra, hogy fájl elérési útvonal helyett egy URLlel dolgozhassunk
1. egészítsük ki a kódot, hogy a HttpResponse osztályt használja az eredmény kommunikálására





