class A {
    constructor() {
        console.log("super constructor");
    }

    foo() {
        console.log("foo");
    }
}

class B extends A {
    constructor() {
        super(); // kotelezo: ez garantalja az oroklodest
        console.log("child constructor");
    }

    foo() {
        super.foo();
        console.log("foobar");
    }
}

let b = new B();
b.foo();