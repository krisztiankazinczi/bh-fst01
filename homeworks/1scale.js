class Scale {
    constructor(minWeight) {
        this.minWeight = minWeight,
            this.weight = 0
    }
    put(weight) {
        this.weight = this.weight + weight
    }

    take(weight) {
        this.weight = this.weight - weight
    }

    measure() {
        if (this.weight > this.minWeight) {
            return this.weight
        }
        return 0
    }
}

let merleg = new Scale(10);

console.log("Ráteszünk 15 egységet a mérlegre, ami a minimum fölött van, majd megmérjük a súlyt")

merleg.put(15);

console.log(merleg.measure());

console.log("Leveszünk 6 egységet a mérlegről, majd megmérjük a súlyt")

merleg.take(6);

console.log(merleg.measure());