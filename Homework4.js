class Scale {
    constructor(minWeight, maxWeight) {
        this.minWeight = minWeight;
        this.maxWeight = maxWeight;
        this.isBroken = false;
        this.items = [];
    }
    currentweight(){
        let measuredWeight=0;
        for (let index = 0; index < this.items.length; index++) {
            measuredWeight= measuredWeight + this.items[index].itemWeight;
        }
        if (measuredWeight > this.maxWeight){
            this.isBroken = true;
            return -1;
        }
        if (measuredWeight < this.minWeight){
            return 0;
        }
        return measuredWeight;
    }
    put(n) {
        this.items.push(n);
        this.currentweight()
    }
    take(m) {
        for (let index = 0; index < this.items.length; index++) {
            if (this.items[index].name == m.name) {
                this.items.splice(index, 1)
                this.currentweight();
                return this.items[index];
            }
        }
        return null;
    }
    measure() {
        this.currentweight();
    }
    getWeight(){
        console.log(this.currentweight());
    }

    fix() {
        if (this.currentweight() > 0) {
            console.log("Please remove weights");
            return;
        }
        this.isBroken = false;

    }
}


class Item {
    constructor(name, itemWeight) {
        this.name = name;
        this.itemWeight = itemWeight;
    }
}

class Cook {
    constructor(scale){
        this.scale=scale;
    }
    measure(ingredients){
        for (let index = 0; index < ingredients.length; index++) {
            this.scale.put(ingredients[index])
        }
        this.scale.getWeight();
    }
    giveToMechanic(mechanic){
       mechanic.take(this.scale);
       this.scale=0;
    }
    takeFromMechanic(mechanic){
        mechanic.giveback(this);
    }

}

class Mechanic {
    constructor(){
        this.scale = 0;
    }
    take(scale){
        this.scale = scale;
    }
    repair(){
        this.scale.fix();
    }
    giveback(cook){
        cook.scale=this.scale;
        this.scale=0;
    }
}

let a = new Item("leak", 1);
let b = new Item("meat",30);
let c = new Scale(2, 50);
let d = new Cook(c);
let e = new Mechanic();
d.measure([a,b]);
d.giveToMechanic(e);
c.take(a);
c.take(b);
e.repair();
e.giveback(d);
c.put(a);
c.put(b);
c.take(b);
console.log(c.items)