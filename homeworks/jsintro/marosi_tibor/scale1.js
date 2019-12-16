class Scale {
    constructor(minWeight){
        this.weight = 0;
        this.minWeight = minWeight;
    }

    put(weight){
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
        if(this.weight < this.minWeight ) {
            return 0;
        }
        return this.weight;
    }
}


// let merleg = new Scale(10);

// merleg.put(9);
// merleg.put(5);
// console.log(merleg.measure());
// merleg.take(20);
// console.log(merleg);