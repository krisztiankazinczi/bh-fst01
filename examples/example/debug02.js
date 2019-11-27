function h(u) {
    return u + a;
}

function g(w) {
    let result = h(w);
    return result;
}

function f() {
    let v = 5;
    let result = g(v);
    return result;
}

let a = 5;
console.log(f());
