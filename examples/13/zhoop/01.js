class PencilCase {
    constructor(items) {
        this.isOpen = false;
        this.items = items;
    }

    get(item) {
    
        if (this.isOpen == false) {
            return "";
        }
        
        // let idx = this.items.find(function(element) {element === item})
        let idx = this.items.indexOf(item);
        if (idx == -1) {
            return ""
        } 

        let deleteds = this.items.splice(idx, 1);

        return deleteds[0];
    }

    open() {
        this.isOpen = true;
    }
}

class Pencil {}

class Eraser {}

