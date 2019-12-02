class Child {
    constructor(name, pencilcase) {
        this.name = name;
        this.pencilcase = pencilcase;
    }

    borrow(itemName, fromChild) {
        return fromChild.pencilcase.get(itemName);
    }
}

class RonaldMcDonald {
    constructor(friends) {
        this.friends = friends;
    }

    borrow(item, child) {
        let result;
        if (item === "Pencil") {
            result = new Pencil();
            this.friends.push(child.name)
        } else if (item === "Eraser") {
            result = new Eraser();
        }


        return result;


    }
}