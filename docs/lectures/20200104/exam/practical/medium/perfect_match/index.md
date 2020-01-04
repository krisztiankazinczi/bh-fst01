# Perfect match

Modellezzük egy randi oldal ajánló algoritmusát.

# Traits

Személyiségjegyeket leíró osztály.

Két személyiségjegy van, kedves és vicces.

## constructor(nice: bool, funny: bool)

Inicializálja az objektumot. Ha egy paraméter nincs megadva, a property false.

## match(other: Trait): bool

Megmondja, hogy valakinek a  személyiségjegyei egyeznek-e valaki másével.

Pontosabban, hogy valakinek a preferenciáival egyezik-e.

# Person

Egy személynek vannak saját személyiségjegyei és személyiségjegyek, amiket másban keres.

## recommendations(persons: Person[]): Person[]

Egy személyeket tartalmazó lista alapján kiválogatja azokat, akiket ajánl a személynek.

A kiválogatás szempontja, hogy az illetők összes személyiségjegye egyezzen a személy
preferenciáival.
