class Scale {
    constructor(minWeight, maxWeight) {
        this.minWeight = minWeight,
        this.maxWeight = maxWeight,
        this.isBroken = false,
        this.items = []
    }
    put(item) {
        this.items.push(item)
        if (this.getWeight() >= this.maxWeight) {
            this.isBroken = true
        }
    }

    take(itemName) {
        for (let i = 0; i < this.items.length; i++) {
            if (itemName == this.items[i].name) {
                let output = this.items[i]
               this.items.splice(i, 1)
                return output
            }
            
        }
        return 0
    }

    measure() {
        if (!this.isBroken) {
            if (this.getWeight() > this.minWeight) {
                return this.getWeight()
            }
            return 0
        } return -1

    }

    fix() {
        if (this.getWeight() <= this.maxWeight && this.getWeight() >= 0) {
            return this.isBroken = false
        }
        return console.log(`El kell távolítani a súlyokat javítás előtt eddig rárakott súly ${this.getWeight()}`)
    }

    getWeight(){
        let weight = 0
        for (let j = 0; j < this.items.length; j++) {
            weight = weight + this.items[j].weight
        }
        return weight
    }
}

class Item {
    constructor(name, weight) {
        this.name = name,
        this.weight = weight
    }
}

let dinnye = new Item ("dinnye", 9)

let porkolt = new Item("pörkölt", 6)

let megadinnye = new Item("megadinnye", 10)

let merleg = new Scale(10, 17);

console.log("Ráteszünk egy dinnyét, meg egy pörköltet a mérlegre, így a súly a minimum fölött van de a maximum alatt, majd megmérjük a súlyt")

merleg.put(dinnye);
merleg.put(porkolt);

console.log(merleg.items)

console.log(merleg.measure());

console.log("Levesszük a pörköltet a mérlegről, majd megmérjük a súlyt")

merleg.take("pörkölt");

console.log(merleg.items)

console.log(merleg.measure());

console.log("Most ráteszünk egy dinnyét meg egy megadinnyét a mérlegre, ami súlyban a minimum, és a maximum fölött van, majd megmérjük a súlyt")

merleg.put(megadinnye);

console.log(merleg.items)

console.log(merleg.measure());

console.log("Most egpróbáljuk megjavítani a mérleget")

merleg.fix()

console.log("Levesszük a kajákat, majd megjavítjuk")

merleg.take("megadinnye");
merleg.take("dinnye");

console.log(merleg.items)

merleg.fix()

console.log("Újra ráteszünk egy dinnyét, meg egy pörköltet a mérlegre, így a súly a minimum fölött van de a maximum alatt, majd megmérjük a súlyt")

merleg.put(dinnye);
merleg.put(porkolt);

console.log(merleg.measure());

console.log(merleg.items)