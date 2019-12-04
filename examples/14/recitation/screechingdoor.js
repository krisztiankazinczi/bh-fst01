let Door = require('./door.js');

class ScreechingDoor extends Door {
    constructor(loudness) {
        super();
        this.loudness = loudness;
    }
    open() { // overriding
        super.open();
        console.log(`* makes screeching sound with a loundess of ${this.loudness} *`);
    }
    
    close() {
        super.close();
        console.log(`* makes screeching sound 2 with loudness of ${this.loudness} *`);
    }
}

let sd = new ScreechingDoor();

console.log(sd);