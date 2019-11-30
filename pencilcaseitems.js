class PencilCase {
    constructor(){
        this.isOpen = false;
        this.items = []
    }
    instanceOf(){

    }
    get(item){
        if(this.isOpen == true){
            for(let i = 0; i < this.items.length; i++){
                if(item.name == (this.items[i]).name){

                    if(this.items[i] instanceof Pencil ||  this.items[i] instanceof Eraser){
                        let removedItem = this.items.splice(i , 1)
                        console.log(`the item I removed is ${this.items[i].name}`)
                        return removedItem.pop()
                    }
                    
                }


            }
            console.log('the item is not in the pencilcase')
            return ''
        }
        console.log(`the pencilcase is closed`)
        return ''
    }
    open(){
        this.isOpen = true;
    }
}
// class Item{
//     constructor(name){
//         this.name = name
//     }
// }

class Pencil{
    constructor(name){
        this.name = name
    }
}

class Eraser{
    constructor(name){
        this.name = name
    }
}

let pencilcase1 = new PencilCase()
let pencil1 = new Pencil('HB pencil')
let pencil2 = new Pencil('red pencil')
let pencil3 = new Pencil('b pencil')
let rubber1 = new Eraser('dino-shaped rubber')
let rubber2 = new Eraser('colorful rubber')

pencilcase1.items.push(pencil1,pencil2,rubber1)

console.log(pencil1)
console.log(pencilcase1)

pencilcase1.get(pencil1)
console.log(pencilcase1)
pencilcase1.open()
pencilcase1.get(pencil3)
console.log(pencilcase1)
pencilcase1.get(Pencil)
console.log(pencilcase1)