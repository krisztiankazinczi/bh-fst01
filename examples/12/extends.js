class A {
    constructor() {
        this.foo = 5;
    }

    doSomething() {
        return "doh";
    }
}

class B extends A {
    constructor() {
        super(); // extends eseten a super hivas kotelezo
        this.b = 10;
    }
}

let a = new A();
let b = new B();

console.log(b.doSomething())
console.log(b instanceof A);
console.log(b instanceof B);

