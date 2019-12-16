class Scale {
    constructor(minWeight, maxWeight){
        this.minWeight = minWeight;
        this.maxWeight = maxWeight;
        this.isBroken = false;
        this.items = [];
    }

    put(item){
        if ((this.getWeight() + item.weight) > this.maxWeight) {
            console.log("oops, you broke the scale :<")
            this.isBroken = true;
        };
        this.items.push(item);
    }

    take(itemName){
        for (let i = 0; i < this.items.length; i++) {
            if (itemName === this.items[i].name) {
                let returnMe = this.items[i];
                this.items.splice(i, 1)
                return returnMe;
            }
        }
        return null;
    }

    measure() {
        if(this.isBroken){
            return -1;
        }
        if(this.getWeight() < this.minWeight ) {
            return 0;
        }
        return this.getWeight();
    }

    fix(){
        if(this.getWeight() > 0){
            console.log("remove weights before fixing")
            return;
        }
        console.log("scale fixed!")
        this.isBroken = false;
    }

    getWeight(){
        let currentWeight = 0;
        this.items.forEach(element => {
            currentWeight += element.weight;
        });
        return currentWeight;
    }
}

class Item{
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }
}


class Cook{
    constructor(scale){
        this.scale = scale;
    }

    measure(items){
        if(!(this.scale instanceof Scale)){
            console.log("cook doesn't have a scale");
            return -1;
        }
        if(this.scale.isBroken) {
            console.log("cooks scale is broken, cannot measure");
            return -1;
        }
        items.forEach(element => {
            this.scale.put(element);
        });
        console.log(`items weight is ${this.scale.measure()}`);
        
        items.forEach(element => {
            this.scale.take(element.name);
        });

    }

    giveToMechanic(mechanic){
        mechanic.take(this.scale);
        this.scale = undefined;
    }

    takeFromMechanic(mechanic){
        mechanic.giveBack(this);
    }
}

class Mechanic{
    constructor(){
        this.scale = undefined;
    }

    take(scale){
        this.scale = scale;
    }

    fix(){
        if(this.scale instanceof Scale){
            this.scale.fix();
            return;
        }
        console.log("no scale to fix")
        return null;
    }

    giveBack(cook){
        cook.scale = this.scale;
        this.scale = undefined;
    }
}

// let merleg = new Scale(10,20);
// let kavics = new Item("kavics",5)
// let szellTamas = new Cook(merleg);
// let jozsi = new Mechanic();

// szellTamas.measure([kavics,kavics,kavics]);
// szellTamas.measure([kavics,kavics]);
// szellTamas.measure([kavics,kavics,kavics,kavics,kavics]);
// szellTamas.measure([kavics,kavics,kavics,kavics,kavics]);

// szellTamas.giveToMechanic(jozsi);
// szellTamas.measure([kavics,kavics,kavics,kavics,kavics]);
// jozsi.fix();
// jozsi.giveBack(szellTamas);
// szellTamas.measure([kavics,kavics,kavics]);