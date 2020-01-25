# 2020. január 25., szombat


[előző alkalom](../20200123) [következő alkalom](../20200128)

# 1. gyakorlat: countsrv.js

Írjunk egy `countsrv.js` szervert.

A szerver memóriában tárol egy `counter` értéket, amely egy szám.

`GET /count`

Eggyel növeli a `counter` értéket és visszaküldi a `counter` új értékét.

# 2. gyakorlat: valuesrv.js

Írjunk egy `value.js` szervert.

A szerver memóriában tárol egy `value` értéket, amely egy szám.

`GET /increase`

Eggyel megnöveli a számot és visszaküldi az új értéket

`GET /decrease`

Eggyel csökkenti a számot és visszaküldi az új értéket

# 3. gyakorlat: studentsrv.js

Legyen egy hallgatót reprezentáló osztály. A hallgatónak neve és azonosítója van.
Az azonosító egy szám. 

```
+--------------+
| Student      |
+--------------+
| id: number   |
| name: string |
+--------------+

```

`GET /students`

A hallgatókat tartalmazó tömböt küld vissza.

`POST /student`

Request bodyban fogad egy új hallgató objektumot. A létrehozandó objektumban csak
a név van megadva, az azonosítót a szerver generálja.

A generált ID-val feltöltött Student objektumot küldi vissza.

`DELETE /student/:studentId`

Kitörli a path paraméterben megadott azonosítóval rendelkező hallgatót. 

Üres 200 OK üzenetet küld vissza.

# 4. gyakorlat: lecturesrv.js

A lecturesrv előadások adatait kiszolgáló szerver.

Legyen egy Lecture osztály

```
+---------------------+
| Lecture             |
+---------------------+
| id: int             |
| name: string        |
| students: []Student |
+---------------------+
```

A lecturesrv egy lectures tömbben tárolja a Lecture objektumokat. 

`GET /lectures`

Visszaküldi az előadások listáját

`POST /lecture`

A kérés törzsében fogad egy félkész Lecture objektumot. Az ID-t a szerver generálja. A students lehet üres vagy sem.

Az ID-val kiegészített, elmentett Lecture objektumot küldi vissza.

`PUT /lecture/:id`

Egy kész Lecture objektumot vár a kérés törzsében. ID nem szükséges a törzsben. Ha létezik a path paraméterben megadott ID-val bíró Lecture, felülírja az adatait a törzsben érkező adatokkal és 200 OK választ küld vissza. Ha nem létezett, akkor 404 NOT FOUND választ külld vissza.


`DELETE /lecture/:id`

Kitöröl egy Lecturet.

Csak akkor lehet törölni, ha a Lecture students tömbje üres.

Sikeres törlés esetén 200 OK válasszal tér vissza, különben 409 CONFLICT válasszal.

# 5. gyakorlat: guessgame

A guessgame szerver az elindításakor generáljon egy számot 1 és 10 között.

`GET /guess`

Tipp fogadására szolgáló endpoint. 

Egy `num` query paraméterben várja a tippünket. Egyszerű szöveges válaszüzenetben tájékoztat az eredményről.

> Tegyük fel, hogy a `guessgame.js` a `3000` porton indult el és az `5` számot generálta ki.

>     $ curl localhost:3000/guess?num=3
>     Nem talált!
>     $ curl localhost:3000/guess?num=5
>     Talált!

`POST /new`

Új játékot indít, vagyis újragenerálja a számot.

> Tegyül fel, hogy először a 3 számot generálja ki, majd küldünk egy üzenetet a POST /new endpointra és ekkor az 5 generálódik ki.
>
> ```bash
> $ curl localhost:3000/guess?num=3
> Nem talált!
> $ curl localhost:3000/guess?num=5
> Talált!
> $ curl localhost:3000/new -X POST
> $ curl localhost:3000/guess?num=5
> Nem talált!
> $ curl localhost:3000/guess?num=3
> Nem talált!
> $ curl localhost:3000/guess?num=7
> Talált!
> ```

## CLI paraméterezhetőség

Legyen CLI paraméter, amit, ha megadunk, akkor nem lesz szám generálva, hanem azt a számot állítjuk be.

> ```bash
> $ node guessgame.js 5
>
> $ curl localhost:3000/guess?num=5
> Talált!
> ```

## ngrok

Publikáljuk a szervert ngrokkal és játsszunk egy menetet egymás szerverével!

Ha új számot akarunk megadni, elég a szervert újraindítani, az ngrok processz maradjon ép, különben az ngrok URL érvénytelenítve lesz!