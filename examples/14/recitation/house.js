class Openable {
    constructor() {
        this.isOpen = false;
    }

    open() {
        this.isOpen = true;
    }

    close() {
        this.isOpen = false;
    }
}

class Door extends Openable {
    
}

class Window extends Openable {
    constructor() {
        super();
        this.isDirty = false;
    } 
    throwSnowball() {
        this.isDirty = true;
    }

    clean() {
        this.isDirty = false;
    }
}