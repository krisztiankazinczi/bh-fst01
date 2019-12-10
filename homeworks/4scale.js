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
            console.log("A mérleg elromlott")
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



    getWeight() {
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

class Cook {
    constructor() {
        this.scale = new Scale(10, 17)
    }
    measure(items) {
        if (this.scale != 0) {
            for (let i = 0; i < items.length; i++) {
                this.scale.put(items[i])
            }
            console.log(`Az ételek súlya összesen ${this.scale.measure()}`)
        } else { return console.log("nincs mérleg")
    }
    }
    giveToMechanic(mech) {
        mech.scale = this.scale
        this.scale = 0
    }
    takeFromMechanic(mech) {
        this.scale = mech.scale
    }
}

class Mechanic {
    constructor() {
        this.scale = {}
    }
    take(scale) {
        this.scale = scale
    }
    fix() {
        this.scale.items = []
        this.scale.isBroken = false
    }
    giveBack(cook) {
        cook.takeFromMechanic(this)
        this.scale = {}
    }
}

let dinnye = new Item("dinnye", 9)

let porkolt = new Item("pörkölt", 6)

let megadinnye = new Item("megadinnye", 10)

let etelek = [dinnye, megadinnye]

let kukta = new Cook();

let szerelo = new Mechanic()

kukta.measure(etelek)

kukta.giveToMechanic(szerelo)

kukta.measure(etelek)

console.log(szerelo.scale)

szerelo.fix()

szerelo.giveBack(kukta)

etelek = [dinnye, porkolt]

kukta.measure(etelek)