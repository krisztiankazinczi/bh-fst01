 // automatikus tipuskonverzio: olyan ertekke alakitja a JS a megadott erteket, amit
 // az adott kontextus var, pl: if eseten, a feltetel logikai erteke kell legyen, ezert
 // barmilyen erteket adunk, azt fogja logikai ertekkent megprobalni ertelmezeni
 // ennek a jelensegnek a neve a truthyness-falsyness
 // for more info: wtfjs.com
if(1) {
    console.log("truthy volt");
} else {
    console.log("falsy volt");
}