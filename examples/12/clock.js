class Counter {
    constructor() {
        this.number = 0;
    }

    count() {
        this.number = this.number + 1;
    }

    decrease() {
        this.number = this.number - 1;
    }
}


let counter = new Counter();
console.log(counter.number);
counter.count();
console.log(counter.number);

let counter2 = new Counter();
counter2.count();
counter2.count();
counter2.count();
console.log(counter2.number)