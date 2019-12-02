
class Pencil {}

class Eraser {}

class PencilCase {
    constructor(items) {
        this.isOpen = false;
        this.items = items;
    }

    _getItem(klass) {
        let idx = this.items.findIndex(function(element) {
            element instanceof klass
        })

        let deleteds = this.items.splice(idx, 1);
        return deleteds[0];
    }

    get(item) {

        if (this.isOpen == false) {
            return undefined;
        }

        if (item === "Pencil") {
            return this._getItem(Pencil)
        } else if (item === "Eraser") {
            return this._getItem(Eraser)
        } else {
            return undefined;
        }

    }

    open() {
        this.isOpen = true;
    }
}



let pc = new PencilCase([new Pencil(), new Eraser()]);
pc.open();
console.log(pc.get("Pencil"));
console.log(pc.get("Eraser"));

