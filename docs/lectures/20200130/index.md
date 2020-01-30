# 2020. január 30., csütörtök


[előző alkalom](../20200128) [következő alkalom](../2020206)



# ping

Írjunk egy `ping.js` programot. Egy parancssorból átadott URL-re küld egy GET
üzenetet és konzolra írja a válaszüzenet törzsét.

Írjunk egy `pong.js` szervert. A szerver a GET / endpointon egy olyan 200 OK
választ küld, amely a törzsében a `pong` szöveget tartalmazza, semmi mást.

# form ping

Írjunk egy `ping.html` weboldalt egy űrlappal. Az űrlap a `pong.js` szerver
`GET /` endpointjára küldje az űrlapot.

# form TODO

Írjunk egy teendőket kezelő weboldalt. Az oldal backendje legyen `todosrv.js`.

A felvitt teendők memóriában tárolódnak, nincs szükség adatbázisra.

A `/list.html` útvonalon egy HTML oldal jelenik meg, amelyen a teendőket
listázzuk.

Az `/add.html` útvonalon egy HTML oldal jelenik meg, ahol egy felviteli űrlapot
mutatunk. Az űrlap a szerver POST /todo endpointjára küldi az űrlap adatait.

Egy teendőt leíró adat szerkezete:

```json
{
    "title":"Vidd le a szemetest!",
    "done":false
}
```


# AJAX ping

Írjunk egy `ping-ajax.html` weboldalt. Legyen egy gomb az oldalon. A gombra
klikkeléskor küldjünk egy HTTP kérést a `pong.js` szerver `GET /` endpointjára.
A `pong` válaszüzenetet egy `alert` ablakban jelenítsük meg.

# Címjegyzék

Írjunk egy `contactsrv.js `névjegyzék alkalmazást.

Egy bejegyzés adat szerkezete:

```js
const contact = {
    id:   1,
    name: "Klotild",
    url:  "1a2b3c4d.ngrok.io"
}
```

A `/new-contact` oldalon egy kontakt felviteli oldal jelenik meg. Az űrlap a
`POST /contacts` endpointra küldi az adatokat.

A `/contacts` oldalon a felvitt kontaktokat listázzuk. Minden adatot megjelenítünk
a listában.

A listaelemekhez egy-egy `/contacts/:contactID/edit` alakú link tartozik, amely
egy szerkesztő oldalra vezet. A szerkesztő oldalon az URL paraméterben megadott
bejegyzés adatait szerkeszthetjük. A szerkesztő űrlap az eredeti adatokkal legyen
előre kitöltve. A szerkesztő űrlap a `POST /contacts/:contactID` endpointra
küldje az adatokat. Az űrlap elküldése és az adatok feldolgozása után átirányítunk
a `/contacts` oldalra

A szerkesztő űrlapon legyen egy törlés link is. A törlés link a `/contacts/:contactID/delete`
URLre mutat, ahol egy figyelmeztető üzenet, egy törlés gomb és egy vissza link jelenik
meg. A törlés gomb egy űrlapban van, amely a a `POST /contacts/:contactID/delete`
endpointra küld egy üres HTTP kérést, ezzel megerősítve a törlést. A törés után
a `/contacts` oldalra irányítunk át.


# Postaláda

Írjunk postaláda alkalmazást.

Legyen `postboxsrv.js` a backend. Indításkor parancssorból adjuk meg
az ngrok URLünket.

Az `/inbox` a nekünk küldött üzeneteket listázza, a `/sent` az elküldött
üzeneteket.

Egy üzenet szerkezete:

```js
const message = {
    id: 1,
    from: "1a2b3c4d.ngrok.io",
    to: "4d3c2b1a.ngrok.io",
    subject: "greetings",
    content: "hello world",
    date: "20200130T14:00:00"

}
```

A `/compose` egy űrlapot jelenít meg, ahol egy üzenetet meg tudunk írni és
el tudjuk küldeni. Az űrlapot a `POST /compose` endpointra küldjük.

A `POST /compose` megpróbálja elküldeni a címzettnek POST /inbox endpointjára
az üzenetet. Ha sikeres volt az üzenet elküldése, 

Az `/inbox` oldalon az üzenet feladója, tárgya és időpontja látszik és minden
egyes üzenethez van egy `/view/:msgID` link.

Az `/view/:msgID` oldal az üzenet törzsét jeleníti meg. Ezen az oldalon
van egy válasz gomb, amely a `/compose` oldalra visz úgy, hogy
- a címzett az eredeti levél feladója
- a tárgy az eredeti levél tárgya a `RE:` előtaggal



Tippek:
- először égessük be az üzeneteket és írjuk meg a listázást
- ezután írjuk meg a küldést, hogy az üzenet listája bővülhessen (egyelőre saját magunknak küldjük az üzenetet)
- ezután egészítsük ki az űrlapot, hogy meg lehessen adni, hogy ki legyen a címzett
- ezután egészítsük ki az üzenet nézetét a válasz gombbal

# chat


