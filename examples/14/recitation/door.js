class Door {
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

module.exports = Door