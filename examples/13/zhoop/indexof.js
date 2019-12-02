let obj = {
    id: 1,
    name: "Concrete Person"
};

let objCopy = {
    id: 1,
    name: "Concrete Person"
}

let t = [objCopy, obj];

console.log(t.indexOf(obj))
console.log(t.find(function(element) { return element.id }));