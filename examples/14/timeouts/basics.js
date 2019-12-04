let i = 0;



setTimeout(function hello() {
    i = i + 1;
    console.log(`${i}. hello`);
}, 5000);

console.log("bello");

setTimeout(function hello() {
    i = i + 1;
    console.log(`${i}. hello`);
}, 1000);