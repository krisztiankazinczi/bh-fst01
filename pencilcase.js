class PencilCase {
    constructor(){
        this.isOpen = false;
        this.items = []
    }
    get(item){
        if(this.isOpen == true){
            for(let i = 0; i < this.items.length; i++){
                if(item.name == (this.items[i]).name){
                    let removedItem = this.items.splice(i , 1)
                    console.log(`the item I removed is ${item.name}`)
                    return removedItem.pop()
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

class Item{
    constructor(name){
        this.name = name
    }
}

let pencilcase1 = new PencilCase()
let item1 = new Item('pen')
let item2 = new Item('ruler')
let item3 = new Item('cheatsheet')
let item4 = new Item('rubber')

pencilcase1.items.push(item1,item2,item3)

console.log(pencilcase1)
pencilcase1.get(item1)
console.log(pencilcase1)
pencilcase1.open()
pencilcase1.get(item4)
pencilcase1.get(item3)
console.log(pencilcase1)