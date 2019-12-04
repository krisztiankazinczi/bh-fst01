console.log(exports === module.exports);

exports.bello = "bello"

console.log(exports === module.exports);

console.log(module.exports);

exports = {
    hello: "hello"
}

console.log(exports === module.exports);

// exports.hello = "hello"

// module.exports = exports.hello
