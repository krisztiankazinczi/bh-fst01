# Banking

Modellezzünk személyi pénzügyeket! Tekintsük az alábbi osztályokat.

# Person

![]()

A Person osztály egy személyt ír le. Egy személynek készpénze (cash) és bankszámlái (accounts) lehetnek.
A cash nemnegatív szám, az accounts egy bankszámlákat (Account) tartalmazó tömb.

## constructor(cash, accounts)

Inicializálja a propertyket. RangeError-t dob, ha a cash negatív, TypeError-t, ha az accounts meg van adva,
de nem tömb.

Ha a cash nincs megadva, a property kezdőértéke 0. Ha az accounts nincs megadva, a property értéke egy üres tömb.

## totalAssets

A személy összes vagyona, a készpénz és a folyószámlák egyenlegeinek összege, nemnegatív szám.




