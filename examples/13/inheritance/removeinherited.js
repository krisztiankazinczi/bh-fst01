class A {
    someMethod() { console.log("i am inherited"); }
}

class B extends A {
    constructor() {
        super();
        delete this.__proto__.someMethod;
    }
}

let b = new B();
b.someMethod();