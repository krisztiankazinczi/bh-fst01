
class A {
    constructor() {
        this.foo = 5;
    }

    // doSomething(); // nincsenek pontosvesszok!
    // function doSomething() { // nem kell function kulcsszo
    doSomething() {
        return "doh";
    }
}

let a  = new A();

console.log(typeof A);
console.log(a instanceof A);