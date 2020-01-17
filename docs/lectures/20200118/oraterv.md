# 2020. január 18., szombat


[előző alkalom](../20200114) [következő alkalom](../20200121)

# Szerverek, webszerver
- Szerver: hálózati gép, amely valamilyen célfeladatot lát el, hálózati kérésekre válaszol, "kiszolgálja", "szervírozza" őket
- Webszerver: kimondottan a Világháló (World Wide Web) működtetésében közreműködő szerver, amely HTTP kéréseket fogad
  - Weboldalak, webes alkalmazások kiszolgálása
- Port: számítógépen található adatátviteli csatlakozási pont
  - fizikai port: ezekbe dugjuk bele a kábeleinket (jobb esetben)
  - virtuális port: az operációs rendszer által kezelt "képzeletbeli" portok, amikhez programok tudnak csatlakozni (pl. annak reményében, hogy ellopják a hitelkártya adatainkat)
  - Rengeteg portot nemzetközileg elfogadott célra használunk: https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers#Well-known_ports
  - Webszerverek közmegegyezéses portja:
    - HTTP: 80
    HTTPS: 443
- Gyakran használt webszerverek: apache, nginx, tomcat, jetty, **express**

**élőzés: Alapok**

Chrome DevTools network tab segítségével

- request, response
- method, host, path info
- header
- body
- status code
- url encoding, form encoding
- URL-ek
  - **scheme**, userinfo, **host**, **port**, **path**, **query**, **fragment**
  - Hivatalos URL def: https://tools.ietf.org/html/rfc3986 (csak, hogy ilyet is lássunk!)

https://www.ietf.org/rfc/rfc2396.txt



**Élőzés: HTTP és HTTPS portok**
> https://duckduckgo.com
> https://duckduckgo.com:80
> 
> http://duckduckgo.com:443
> http://duckduckgo.com
> http://duckduckgo.com:80


# Express.js

- Miért Express.js?
  - könnyen, gyorsan konfigurálható
  - széles körben elterjedt
  - kiválóan dokumentált

Élőzés: helló világ

```
$ npm install express --save
```

```js
// app.js
const express = require('express')
const app = express()
const port = 3000 // nem a 80 port, mert azt éles webszerverekre használjuk

app.get('/hello', (req, res) => res.send('Hello World!')) // (1)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

```
$ node app.js
```

## Routing

- routing: elfogadott HTTP path info minták és ("útvonalak", "routes") HTTP methodok és az útvonalak megnyitását/meghívását lekezelő függvények összekapcsolása
  - **figyelem: HTTP method != metódus JSben!**
  - /hello esetén az (1) anonim függvény fog lefutni
  - a /hello az egyetlen meghívható útvonal
- router: a leképezést végző komponense
  - adott egy default router
  - testreszabható egyedi routerek (csak megemlítés szintjén)
  - egymásba ágyazott, összetett routerek (csak említés szintjén)
- endpoint

# 1. gyakorlat: counter

webszerver kiírja, hogy hányszor hívtuk meg az endpointot

---

- URL paraméterek

# 2. gyakorlat: paraméterezett helló {$user}

/hello/:username endpoint visszaad egy testreszabott köszöntést

## Controller

- Bejövő HTTP kérést kiszolgáló komponense
- Bonyolultabb route handling esetén: a handler függvény helyett egy controller objektum vagy egy controller metódusa
- Globális változók helyett egységbezárás (encapsulation)
- Hasonló endpointok hasonló (netán ugyanazon) adatokon dolgoznak

# 3. gyakorlat: userek és departmentek

- beégetett listák a memóriában
- ezek manipulációja (lekérés, hozzááadás)


## Middleware

- a beérkező kéréseket elő- és utófeldolgozó komponensek
- pl. authentikáció, CSRF (csak néhány szóban megemlítve, hogy értsék mire jó, nem kell elmélyedni)
- több is tartozhat egy routehoz
- request -> middleware(req) -> controller(req, resp) -> middleware(resp) -> response



## Statikus webhely kiszolgálása

## Dinamikusan generált HTML 

**templating**: valamiféle sablonok (általában HTML) használata és dinamikus feltöltése adattal

**template engine**

- összetett sablon készítési problémákat megoldó könyvtárak
- önállóan is használhatóak
- gyakran vannak express js-be építhető pluginok
  - plugin fogalom tisztázása!

**Egyszerű templating**

string interpolation hasnálatával

