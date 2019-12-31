# Banking

Modellezzünk személyi pénzügyeket! Tekintsük az alábbi osztályokat.

# Account

Egy bankszámlát ír le. A számla jellemzői a tulajdonosa (holder) és a rajta végrehajtott tranzakciók (transactions).

Egy tranzakciót egy szám jelöl. A jóváírást pozítív számmal, a leemelést negatív számmal jelöljük. Egy tranzakció vagy jóváírást vagy leemelést kell jelöljön.

## constructor(initialDeposit: number, holder: Person)

Az initialDeposit a folyószámla létrehozásakor egy esetleges betéti tranzakció értéke. Ha megadtunk egy initialDeposit értéket, a számla tranzakció listáján megjelenik a betét.

- `should initialize the transaction list with a deposit when initialDeposit is provided`

Ha az initialDeposit nincs megadva, a tranzakció lista kezdetben üres.

- `should initialize the transaction list with an empty list when initialDeposit is not provided`

Ha az initialDeposit negatív, hibát dob.

- `should throw error when initialDeposit is negative`

Ha az initialDeposit nulla, a tranzakció lista kezdetben üres.

- `should initialize the transaction list with an empty list when initialDeposit is zero`

Ha a holder nincs megadva, hibát dob

- `should throw error when holder is missing`

## balance(): number

A számla aktuális egyenlegével tér vissza. Az egyenleg a tranzakciók összege.

## deposit(amount: number)

Elhelyezi a megadott összeget a számlán. Feltételezzük, hogy mindig a számla tulajdonosa fizet be.

Az elhelyezés során egy betéti tranzakció jön létre a megadott összeggel.

- `should create a deposit transaction`

Az elhelyezés során az összeg levonódik a számla tulajdonosának készpénz állományából.

- `should decrease the account holder cash by amount`

Ha nincs elegendő készpénz, nem csinálunk semmit

- `should do nothing if account holder does not have enough cash`

Ha amount nem pozitív szám, hibát dob

- `should throw error when amount is not a positive number`

## withdraw(amount: number)

## transfer(amount: number, to: Account)

Átvezeti a megadott összeget (amount) a megadott számlára (to).

Az átvezetés során a küldő számlán létrejön egy leemelési tranzakció.

- 

Az átvezetés során a fogadó számlán létrejön egy jóváírás tranzakció.

Ha nincs fedezet, nem jönnek létre tranzakciók

Ha amount nem pozitív, hibát dob

Ha to nincs megadva, hibát dob



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


