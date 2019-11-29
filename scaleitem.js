
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
        if(this.getweight() !== 0){
            console.log('Please remove all the weight from the scale before fixing')
            return
        }
        this.isBroken = false
        console.log('The scale is fixed')
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
        this.scale = new Scale()
    }
    measure(){
        this.scale.measure()
    }
    giveToMechanic(){

    }
    takeFromMechanic(){

    }

}
let cook1 = new Cook()
let scale1 = new Scale(5, 200)
let item1 = new Item('alma', 10)
let item2 = new Item('korte', 20)
let item3 = new Item('dinnye', 1000)
console.log(scale1)
console.log(item1)
scale1.put(item1)
console.log(scale1)
scale1.put(item2)
console.log(scale1)
scale1.getweight()
scale1.measure()
scale1.take(item2)
console.log(scale1)
scale1.put(item3)
console.log(scale1)
scale1.measure()
scale1.removeAll()
scale1.measure()
scale1.fix()
scale1.put(item1)

console.log(scale1)
scale1.measure()
