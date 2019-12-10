class Scale {
    constructor(minWeight, maxWeight) {
        this.minWeight = minWeight,
            this.weight = 0,
            this.maxWeight = maxWeight
        this.isBroken = false
    }
    put(weight) {
        this.weight = this.weight + weight
        if (this.weight >= this.maxWeight) {
            this.isBroken = true
        }
    }

    take(weight) {
        this.weight = this.weight - weight
    }

    measure() {
        if (!this.isBroken) {
            if (this.weight > this.minWeight) {
                return this.weight
            }
            return 0
        } return -1

    }

    fix() {
        if (this.weight <= this.maxWeight && this.weight >= 0) {
           return this.isBroken = false
        }
        return console.log(`El kell távolítani a súlyokat javítás előtt eddig rárakott súly ${this.weight}`)
    }
}

let merleg = new Scale(10, 17);

console.log("Ráteszünk 15 egységet a mérlegre, ami a minimum fölött van de a maximum alatt, majd megmérjük a súlyt")

merleg.put(15);

console.log(merleg.measure());

console.log("Leveszünk 6 egységet a mérlegről, majd megmérjük a súlyt")

merleg.take(6);

console.log(merleg.measure());

console.log("Most ráteszünk 10 egységet a mérlegre, ami a minimum, és a maximum fölött van, majd megmérjük a súlyt")

merleg.put(10);

console.log(merleg.measure());

console.log("Most egpróbáljuk megjavítani a mérleget")

merleg.fix()

console.log("Levesszük a súlyokat, majd megjavítjuk")

merleg.take(19);

merleg.fix()

console.log("Újra ráteszünk 15 egységet a mérlegre, ami a minimum fölött van de a maximum alatt, majd megmérjük a súlyt")

merleg.put(15);

console.log(merleg.measure());