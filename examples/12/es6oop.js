var a = 5;

function f() {
    console.log(this.p);
    console.log(a);
}

let o = {
    p: "prop",
    f: f
}

o.f();
f();