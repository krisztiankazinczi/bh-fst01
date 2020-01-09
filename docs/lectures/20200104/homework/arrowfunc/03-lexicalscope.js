// Írjuk át a function expressionöket, ahol lehet,
// arrow functionre. A paramétereken és a visszatérési értékeken
// ne változtassunk. Nem minden esetben lehetséges az
// átírás!

// (1)

// let steve = {
//     name: 'Steve',
//     intro: function() { return `My name is ${this.name}` },
//     mood: function(weather) {
//         switch(weather) {
//             case 'rainy': return this.rainy()
//             case 'sunny': return this.sunny()
//             default: return this.default()
//         }
//     },
//     rainy: function() {
//         return 'coding'
//     },
//     sunny: function() {
//         return 'swimmimg'
//     },
//     default: function() {

//     }

// }
// console.log(steve.intro())
// console.log(steve.mood()) // == 'coding'


let steve = {
    name: 'Steve',
    intro: function() { return `My name is ${this.name}` },
    mood: function(weather) {
        return (weather === 'rainy') ? this.rainy() : (weather === 'sunny') ? this.sunny() : this.default();
    },
    rainy: () => 'coding',
    sunny: () => 'swimming',
    default: () => {}

}
console.log(steve.intro())
console.log(steve.mood('sunny'))


// (2)

const factory = {
    manufacturer: 'Fjord',
    // mechanic: function() {
    //     let that = this
    //     return {
    //         canFix: function(car) {
    //             return car.manufacturer === that.manufacturer
    //         }
    //     }
    // }
    mechanic: function() {
        let that = this
        return {
            canFix: car => car.manufacturer === that.manufacturer
        }
    }
}

const car = {manufacturer: 'Fjord'}
console.log(factory.mechanic().canFix(car)) // == true
