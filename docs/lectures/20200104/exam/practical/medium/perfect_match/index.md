# Perfect match

Modellezzük egy randi oldal ajánló algoritmusát.

# Traits

Személyiségjegyeket leíró osztály.

Két személyiségjegy van, kedves (nice) és vicces (funny).

## constructor(nice: bool, funny: bool)

Inicializálja az objektumot.

Ha egy paraméter nincs megadva, a property false.

## match(other: Trait): bool

Megmondja, hogy valakinek a  személyiségjegyei egyeznek-e valaki máséval, azaz, hogy mind a két Trait nice és funny propertyje megegyezik.

# Person

Egy személynek vannak saját személyiségjegyei (traits) és személyiségjegyek, amiket másban keres (preferences).

## recommendations(persons: Person[]): Person[]

Egy személyeket tartalmazó lista alapján kiválogatja azokat, akiket ajánl a személynek.

A kiválogatás szempontja, hogy az illetők összes személyiségjegye egyezzen a személy
preferenciáival.
