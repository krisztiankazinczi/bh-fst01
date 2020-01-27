# 2020. január 18., szombat


[előző alkalom](../20200125) [következő alkalom](../2020130)

## DOM

 - mi az a DOM (Document Object Model) ?
 - elemek lekerdezese
 - elemek beszurasa

## Gyak

 1) onclick hello world
   A DOMban adjunk meg egy `button` HTML elementet es egy `div#container` html elemet, ahol a `#container` a html elem `id`-jat jelenti, tehat `id='container'`, amely `click` esemeny kezelojehez megadunk egy fg-vt, amely a `container`-be kiirja, hogy `Hello World`.

 2) click counter
   Egy HTML fileban legyen ket `button` elemunk, es egy `div#container`. Az egyik gomb noveljen egy szamlalot egyel, a masik csokkentse, es minden gombnyomas eredmenye legyen lathato a `container`-ben

 3) calculator (alapveto aritmetikai muveletekre)
   Keszitsunk szamologepet, alapveto aritmetikai muveletekkel (osszeadas, kivonas, osztas, szorzas).
   Legyen egy `div#result` amely az eredmenyt jeleniti meg, legyen 10 `button` elemunk a gomboknak, es 4 `button` a muveleteknek, tovabbi plusz egy `button` az egyenloseg jelnek.

   A `result` mukodjon a kovetkezo keppen
    a) egyszeru eset:
        minden megnyomott szam megjelenik, muvelet megnyomasa utan, a kovetkezo szamot megnyomva az eredmeny latszik.
    b) Opcionalis ha nagyon unotkozol :)
        Gombokat nyomogatva, minden megjelenik a `div#result`-ban es csak az egyenloseg gomb megnyomasakor ertekelodik ki a kifejezes.

 4) todo lista
   Keszitsunk egy programot, amely a teendoinket tartja szamon
    - lehessen hozzaadni uj TODO-t
    - lehessen torolni
    - ha kesz a teendo, akkor legyen lehetoseg azt `done` allpotba tenni