class Scale {
    constructor(minWeight, maxWeight){
        this.weight = 0;
        this.minWeight = minWeight;
        this.maxWeight = maxWeight;
        this.isBroken = false;
    }

    put(weight){
        if ((this.weight + weight) > this.maxWeight) {
            this.isBroken = true;
        };
        this.weight += weight;
    }

    take(weight){
        if(this.weight < weight) {
            console.log("not enough weight to take");
            return false;
        }
        this.weight -=weight; 
    }

    measure() {
        if(this.isBroken){
            return -1;
        }
        if(this.weight < this.minWeight ) {
            return 0;
        }
        return this.weight;
    }

    fix(){
        if(this.weight > 0){
            console.log("remove weights before fixing")
            return;
        }
        this.isBroken = false;
    }
}


// let merleg = new Scale(10,20);

// merleg.put(20);
// merleg.put(5);
// console.log(merleg.measure());
// merleg.fix();
// merleg.take(25);
// merleg.fix();
// merleg.put(12);
// console.log(merleg.measure());
