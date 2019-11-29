class Scale {
    constructor(minWeight, maxWeight){
        this.minWeight = minWeight;
        this.weight = 0
        this.maxWeight = maxWeight;
        this.isBroken = false;
    }
    put(weight){  
        this.weight = this.weight + weight
        if(this.weight > this.maxWeight){
            this.isBroken = true
        }
        

    }   
    take(weight){
        this.weight = this.weight - weight
        
    }
    measure(){
        if(this.isBroken){
            console.log('the scale is broken')
            return -1
        }
        
        if(this.weight < this.minWeight){
            console.log('Weight on scale is lower than minWeight')
            return 0
        }
        else {
            console.log(`Scaled weight is ${this.weight}`)
            return this.weight
        }

    }
    fix() {
        if(this.weight !== 0){
            console.log('Please remove all the weight from the scale before fixing')
            return
        }
        this.isBroken = false
        console.log('The scale is fixed')
    }
    removeAll(){
        this.weight = 0;
        console.log('Everything removed from scale')
    }

}

let scale1 = new Scale(10, 20)

console.log(scale1)
scale1.put(12) // this.weight 12 lesz
scale1.measure() // kiírja h 12 a weigth
scale1.take(1) 
scale1.measure() // kiírja, hogy 11 a weight
scale1.take(3)
scale1.measure() // kiírja,hogytúl kicsi súlyt
console.log(scale1) // weight 8
scale1.put(12)  
scale1.measure() // kiírja h 20 a weight
scale1.put(1)  
console.log(scale1) // isbroken --> true
scale1.measure() // the scale is broken
console.log(scale1)
scale1.fix() // kiírja, hogy távolítsd el az összes súlyt
scale1.removeAll()
console.log(scale1) // a weight 0 de isBroken még true
scale1.fix()
console.log(scale1) // weight 0, isBroken false