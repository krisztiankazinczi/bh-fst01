# 2020. január 11., szombat


[előző alkalom](../20200107) [következő alkalom](../20200111)

# Funkcionális JavaScript gyakorlatok



# SQL

# Mi az az SQL?

- Structured Query Language
- Deklaratív nyelv
- Relációs adatbázisokból történő lekérdezésekhez
- Lekérdezés: adott feltételnek megfelelő adatsorok kérése az adatbázisból

> "2020 januárjában lejáró termékek"
> 
> ```sql
> SELECT
>   product.name
> FROM
>   product
> WHERE
>   product.expires > '2020-01-01'
>   AND product.expires < '2020-02-01'
>
> ```

## Alapfogalmak

Adatbáziskezelő rendszer: adatok hatékony tárolását, elérését és manipulációját lehetővé tevő szoftver.

Adatbázis: adatok összessége. Nem feltétlenül valamilyen adatbázisrendszer által kezelt formátum. **Pongyolaságból gyakran csak adatbázisnak nevezik az adatbáziskezelő rendszert!**

Relációs adatbázisrendszer: relációs adatmodellt alkalmazó adatbázisrendszer. Angol: RDBMS, relational database management system

A relációs adatmodell központi fogalma a reláció. A reláció lényegében
két halmaz elemei közötti hozzárendelés.

> HALLGATÓK = {"Paula", "Paulina", "Paulinissima"}
> 
> KURZUSOK = {"Frontend", "Backend"}
>
> 
> HALLGATÓK_KURZUSOK = {
> ("Paula", "Frontend"), ("Paulina", "Backend"), ("Paulinissima", "Frontend")}

Adatbázisrendszerek nélkül nekünk kéne a fájlokat megnyitni, felolvasni, visszaírni, ügyelni az adatok integritására. Az adatbázisrendszer elfedi ezt a bonyolultságot.

A relációs adatbázis szerkezetét sémának is nevezni.

A táblázatokat szokás katalógusnak is nevezni.

A sorokat szokás rekordoknak is nevezni.

Oracle vs. Postgre vs. MySQL vs. MariaDB vs. ...

SQL vs. NoSQL

# SQLite

- pehelysúlyú relációs adatbáziskezelő rendszer
- nyílt forráskód
- nem igényel telepítést
- nem igényel szerver processzt

## telepítés, indítás, ismerkedés

Töltsük le és csomagoljuk ki egy könnyen elérhető helyre

[https://www.sqlite.org/download.html](https://www.sqlite.org/download.html)

- MacOS: sqlite-tools-osx-x86-3300100.zip
- Windows: sqlite-tools-win32-x86-3300100.zip
- Linux: sqlite-tools-linux-x86-3300100.zip

Terminálban álljunk az indítófájl (`sqlite3`, `sqlite3.exe`) mellé
és indítsuk el:

```
$ sqlite
SQLite version 3.30.1 2019-10-10 20:19:45
Enter ".help" for usage hints.
Connected to a transient in-memory database.
Use ".open FILENAME" to reopen on a persistent database.
sqlite>
```

SQLite "pont-parancsok" listázása:
```
sqlite> .help
.archive ...             Manage SQL archives
.auth ON|OFF             Show authorizer callbacks
.backup ?DB? FILE        Backup DB (default "main") to FILE
.bail on|off             Stop after hitting an error.  Default OFF
.binary on|off           Turn binary output on or off.  Default OFF
.cd DIRECTORY            Change the working directory to DIRECTORY
.changes on|off          Show number of rows changed by SQL
.check GLOB              Fail if output since .testcase does not match
...
...
...
```

Érdekes pont-parancsok:
- .databases
- .dbinfo
- .headers on
- .tables
- .mode column
- .fullschema
- .import
- .read
- .help
- .quit

Pont-parancs: SQLite parancs, ami nem az SQL nyelv része

Demó: sqlite konzol alapvető működése

```sql
sqlite> create table tbl1(one varchar(10), two smallint);
sqlite> insert into tbl1 values('hello!',10);
sqlite> insert into tbl1 values('goodbye', 20);
sqlite> select * from tbl1;
hello!|10
goodbye|20
sqlite> insert into tbl1 values('again you disturb me', 30);
sqlite> select * from tbl1;
hello!|10
goodbye|20
again you disturb me|30
sqlite> 

```

többsoros prompt: pontosvessző olvasásig

```sql
sqlite> CREATE TABLE tbl2 (
   ...>   f1 varchar(30),
   ...>   f2 text,
   ...>   f3 real
   ...> );
sqlite>
```

## Általános szintaxis

https://www.sqlite.org/lang.html

EBNF vs. Szintaxis diagramok ("railroad diagram")

- https://dev.mysql.com/doc/refman/8.0/en/select.html


# DDL alapok

Data Definition Language

Az SQL azon része, amellyel a sémát írhatjuk le.

https://www.sqlite.org/lang_createtable.html

Az RDBMS-ekben általában az oszlopnak van egy fix típusa és csak annak megfelelő értéket írhatunk bele

SQLiteban az oszlopnak nincs típusa, csak "affinitása", ami lényegében
egy ajánlott adattárolási típust jelöl ki, de továbbra sem korlátozza
az oszlopba írható értéket.

https://www.sqlite.org/datatype3.html



```sql
CREATE TABLE main.person (name VARCHAR(128), yob DATE);

```

## Dátumok

https://www.sqlite.org/lang_datefunc.html


# DML alapok

Data Manipulation Language

Az SQL azon része, amellyel az adatokat manipuláljuk.

https://www.sqlite.org/lang_insert.html

```sql
INSERT INTO t (col1, col2) VALUES (val1, val2)

UPDATE t SET col=val # WHERE col2=val2
```


# DQL alapok

Data Query Language

Az SQL azon része, amellyek az adatokat lekérjük

```sql
SELECT col1, col2, col3 FROM tbl1
```

# Csatlakozás SQLite adatbázishoz Node.js-ből

https://github.com/mapbox/node-sqlite3/

API: https://github.com/mapbox/node-sqlite3/wiki/API

# 1. gyakorlat

## 1.1. Hozzuk létre a következő sémát:

Employee
- id: int
- name: varchar 80
- email: varchar 120
- salary: int
- department_id: int

Department
- id: int
- name: varchar 80
- director_id: int

SELECT
  employee.name,
  emp2.name FROM employee,
  department,
  employee AS emp2
WHERE
  employee.department_id = department.id
  AND department.director_id = emp2.id;
  AND employee.salary = emp2.salary


## 1.2. Írjunk bele adatokat

Employee

1, Gizella, gizella@armani.hu, 400000, 1

2, Eufrozina, eufrozina@armani.hu, 300000, 1

3, Jozsef, jozsef@armani.hu, 300000, 1

4, Bela, bela@armani.hu, 750000, 2

5, Richard, richard@armani.hu, NULL, NULL

INSERT INTO employee VALUES (1, 'Gizella', 'gizella@armani.hu', 400000, 1);
INSERT INTO employee VALUES (2, 'Eufrozie', 'eufrozina@armani.hu', 300000, 1);
INSERT INTO employee VALUES (3, 'Jozsef', 'jozsef@armani.hu', 300000, 1);
INSERT INTO employee VALUES (4, 'Bela', 'bela@armani.hu', 7500000, 2);
INSERT INTO employee VALUES (5, 'Richard', 'richard@armani.hu', NULL, NULL);



---

Department

1, Marketing, 2

2, Board of directors, 4

3, New Department, NULL


INSERT INTO department VALUES (1, 'Marketing', 2);
INSERT INTO department VALUES (2, 'Board of dirs', 4);
INSERT INTO department VALUES (3, 'New Department', NULL);

---

1. Kinek ki a menedzsere?

2. Keressük azokat a dolgozókat, akiknek a keresete megegyezik a menedzserük keresetével

---



## 1.3. Csalakozzunk 

## 1.4 Kérjük le és írjuk az alábbi adatokat


# WHERE

# JOIN

## 2. gyakorlat

## 2.1 hozzuk létre a következő sémát

## 2.2 töltsük be az adatokat fájlból

## 2.3 

## LEFT JOIN, RIGHT JOIN
