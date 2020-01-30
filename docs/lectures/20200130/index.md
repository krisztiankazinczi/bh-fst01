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

A `GET /new-contact` oldalon egy kontakt felviteli oldal jelenik meg. Az űrlap a
`POST /contacts` endpointra küldi az adatokat.

A `GET /contacts` oldalon a felvitt kontaktokat listázzuk. Minden adatot megjelenítünk
a listában.

A listaelemekhez egy-egy `GET /contacts/:contactID/edit` alakú link tartozik, amely
egy szerkesztő oldalra vezet. A szerkesztő oldalon az URL paraméterben megadott
bejegyzés adatait szerkeszthetjük. A szerkesztő űrlap az eredeti adatokkal legyen
előre kitöltve. A szerkesztő űrlap a `POST /contacts/:contactID` endpointra
küldje az adatokat. Az űrlap elküldése és az adatok feldolgozása után átirányítunk
a `GET /contacts` oldalra

A szerkesztő űrlapon legyen egy törlés link is. A törlés link a `GET /contacts/:contactID/delete`
URLre mutat, ahol egy figyelmeztető üzenet, egy törlés gomb és egy vissza link jelenik
meg. A törlés gomb egy űrlapban van, amely a a `POST /contacts/:contactID/delete`
endpointra küld egy üres HTTP kérést, ezzel megerősítve a törlést. A törés után
a `GET /contacts` oldalra irányítunk át.

Tippek:
- Először egy egyszerű beégetett tömböt listázzunk
- Ezután egy üres űrlap elküldésével kerüljön be egy új beégetett elem a tömbbe
- Ezután egészítsük ki az adatszerkezetet
- Ezután írjuk meg a szerkesztést
- Végül a törlést


# Postaláda

Írjunk postaláda alkalmazást.

Legyen `postboxsrv.js` a backend. Indításkor parancssorból adjuk meg
az ngrok URLünket.

Az `GET /inbox` a nekünk küldött üzeneteket listázza, a `GET /sent` az elküldött
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

A `GET /compose` egy űrlapot jelenít meg, ahol egy üzenetet meg tudunk írni és
el tudjuk küldeni. Az űrlapot a `POST /compose` endpointra küldjük.

A `POST /compose` megpróbálja elküldeni a címzettnek `POST /inbox` endpointjára
az üzenetet. Ha sikeres volt az üzenet elküldése, a `GET /compose?alert=success` oldalra
irányít, ha sikertelen, akkor az `GET /compose?alert=failed` oldalra.

Ha az `alert=success`, egy alert jelzi a sikerességet, ha `alert=failed`, a sikertelenséget.
Ha nincs alert query paraméter, nem jelenik meg alert.

Az `GET /inbox` oldalon az üzenet feladója, tárgya és időpontja látszik és minden
egyes üzenethez van egy `GET /view/:msgID` link.

Az `GET /view/:msgID` oldal az üzenet törzsét jeleníti meg. Ezen az oldalon
van egy válasz gomb, amely a `GET /compose` oldalra visz úgy, hogy
- a címzett az eredeti levél feladója
- a tárgy az eredeti levél tárgya a `RE:` előtaggal



Tippek:
- először égessük be az üzeneteket és írjuk meg a listázást
- ezután írjuk meg a küldést, hogy az üzenet listája bővülhessen (egyelőre saját magunknak küldjük az üzenetet)
- ezután egészítsük ki az űrlapot, hogy meg lehessen adni, hogy ki legyen a címzett
- ezután egészítsük ki az üzenet nézetét a válasz gombbal

# chat


