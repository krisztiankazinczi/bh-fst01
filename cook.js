
class Scale {
    constructor(minWeight, maxWeight){
        this.minWeight = minWeight;
        this.items = []
        this.maxWeight = maxWeight;
        this.isBroken = false;
    }
    put(item){  
        this.items.push(item)
        
    }   
    take(item){
        for(let i = 0; i < this.items.length; i++) {
            if(this.items[i].name == item.name){
                let removedItem = this.items.splice(i , 1)
                console.log(`the item I removed is ${item.name}`)
                return removedItem.pop()
            }
            else {
                console.log(`${item.name} is not on the scale`)
            }
        }
        
    }
    measure(){
        this.getweight()
        if(this.isBroken){
            console.log('the scale is broken')
            return -1
        }
        
        if(this.getweight() < this.minWeight){
            console.log('Weight on scale is lower than minWeight')
            return 0
        }
        else {
            console.log(`Scaled weight is ${this.getweight()}`)
            return this.getweight()
        }

    }
    getweight() {
        let scaledWeight = 0
        for(let i = 0; i < this.items.length; i++){
            scaledWeight = scaledWeight + this.items[i].weight
        }

        
        if(scaledWeight > this.maxWeight){
            this.isBroken = true
        }
        
        return scaledWeight
    }
    fix() {

        console.log('You cannot fix your own scale. Give it to a mechanic, but first, remove all items')
    }
    removeAll(){
        
        this.items = [];
        console.log('Everything removed from scale')
    }


}

class Item {
    constructor(name,weight){
        this.name = name;
        this.weight = weight;
    }
}

class Cook {
    constructor(){
        this.scale = new Scale(5, 200)
    }
    measure(){
        this.scale.measure()
    }
    giveToMechanic(mechnanic){
        if(this.scale.isBroken == false){
            console.log('Your scale is not broken, why would you give it to a mechanic?')
            return
        }
        if(this.scale.getweight() !== 0){
            console.log('Please remove all the weight from the scale before giving it to Mechanic')
            return
        }
        mechnanic.scale = this.scale
        this.scale = 0;
    }
    takeFromMechanic(mechnanic){
        if(mechnanic.scale.isBroken == true){
            console.log("Your scale is not fixed yet. Tell the mechanic to fix it")
            return
        }
        this.scale = mechnanic.scale
        mechnanic.scale = 0
    }

}

class Mechnanic {
    constructor(){
        this.scale = 0
        
    }
    take(cook){
        if(this.scale == 0){
            this.scale = cook.scale
            cook.scale = 0
        }
        else{
            console.log('you already ave something to work on')
        }
    }
    fix(){
        
        if(this.scale !==0){
            this.scale.isBroken = false
            console.log('The scale is fixed')
            
        }
        else{
            console.log("nothing to be fixed")
        }
}

    giveBack(cook){
        if(this.scale.isBroken == false) {
            cook.scale = this.scale
            this.scale = 0
        }
        else{
            ('This scale is still broken. Fix it first')
        }
        
    }
}
let cook1 = new Cook()
let mechanic1 = new Mechnanic()

let item1 = new Item('alma', 10)
let item2 = new Item('korte', 20)
let item3 = new Item('dinnye', 1000)

console.log(cook1)
cook1.scale.put(item1)
cook1.scale.put(item2)
console.log(cook1)
console.log(cook1.scale)
cook1.measure()
cook1.giveToMechanic(mechanic1)
console.log(cook1, mechanic1)
cook1.scale.removeAll()
cook1.giveToMechanic(mechanic1)
console.log(cook1, mechanic1)
cook1.scale.put(item3)
cook1.measure()
cook1.scale.fix()
cook1.scale.removeAll()

console.log(cook1, mechanic1)
mechanic1.take(cook1)
console.log(cook1, mechanic1)
cook1.takeFromMechanic(mechanic1)
console.log(cook1, mechanic1)
mechanic1.fix()
console.log(cook1)
mechanic1.giveBack(cook1)
console.log(cook1, mechanic1)