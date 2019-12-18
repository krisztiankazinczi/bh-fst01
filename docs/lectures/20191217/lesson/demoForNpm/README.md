# Summary

## JSDOC

volt szo a JSDOCrol, ami nem mas mint kommentekben megadjuk, hogy mit csinal az adott metodus, 
milyen parameterei vannak, azoknak mi a tipusa, milyen tipusu ertekkel terunk vissza.
Ha a JSDOC-ot szepen irjuk, akkor a VSCode rengeteget tud nekunk segiteni kodolas kozben.

## object literal
 - ` let a = {}; `
 - tetszoleges szamu kulcs ertek part tartalmaz, barmikor hozzaadhatoak elemek, es eltavolithatoak.
 - a literal atomi erteket jelent
 - konstans idoben tudjuk elerni a tarolt ertekeket a kulcs alapjan
 - kulcs string lesz automatikusa, elem eleresnel pedig stringet adhatunk csak meg
 - hatrany, maceras a bejaras
  
## Map
 - `let a = new Map([[kulcs1, ertek1], [kulcs2, ertek2]]); `
 - Hasonlo a json literalhoz, `set` es `get` metodusokkal tudjuk berakni es elerni az elemeket
 - barmi lehet a kulcs, akar NaN is, vagy egy fuggveny
 - bejaras joval egyszerubb
 - hatekonyabb lehet sok elem eseten
 - konstans ideju elemeleres

## Array
 - `let a = [];`
 - konstans ideju elem eleres az indexek alapjan
 - egyszeru bejaras
 - bovitheto es elemek kivehetoek belole, bar az utobbi picit maceras (`splice`, `slice`)

## NPM
 - `npm init` -> module/package letrehozasa, ami legeneralja nekunk a `package.json` filet
 - init utan lehet uj packaget felrakni a globalis npm repositorybol pelda `npm install uuid`
 - install utan a dependencies es devDependencies nevu propertyje a package.json filenak frissul
 - node_modules mappa letrejon, ahova telepulnek a packagek
 - `const uuidv4 = require('uuid/v4');`
 - npx parancs a localis node_modules mappaban keresi a megadott modulet
 - script propertyben lehet megadni elore osszeallitott parancsokat a package.json fileban
 - pelda: `"scripts": { "start": "node index.js"}` amely az index.js filunkat fogja futtatni a `npm start` parancs kiadasakor
 - torolni modulet `npm uninstall uuid`
 - vagy torolni lehet meg ha kitoroljuk a dependencies propertybol a modulet es ujra futtatjuk az `npm i` parancsot
 - dependencies property egy kulcs ertek par, kulcs a module neve, erteke pedig a feltelepitett module verzioja
 - `package.lock` file, egyenlore ne foglalkozzunk vele, feladata, hogy minden fejlesztonel aki a projekten dolgozik, ugyan az a verzio legyen minden packagebol

## abstract osztaly
 - metodusokat fogalmaz meg, amiket minden leszarmazottnak felul kell irnia, vagy adhatunk meg default implementaciot is
 - abstract osztalyt nem peldanyositunk, csak orolunk belole
 - ha nem irunk felul minden metodust az oroklott osztalyban, akkor az oroklott osztaly maga is abstract osztaly lesz
 - lasd pelda az index.js fileban