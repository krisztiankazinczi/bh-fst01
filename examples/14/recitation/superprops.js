class A {
    constructor() {
        this.elements = [1,2,3];
    }
}

class B extends A {
    constructor() {
        super();
        this.elements = [3,2,1];
    }


    print() {
        console.log(this.elements);
        console.log(super.elements);
    }
}

let b = new B();