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

// let merleg = new Scale(10,20);
// let kavics = new Item("kavics",15)

// merleg.put(kavics);
// console.log(merleg.measure());
// merleg.put(kavics);
// merleg.fix();
// merleg.take("kavics");
// merleg.take("kavics");
// merleg.fix();