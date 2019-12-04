class Time {
    constructor(subscribers) {
        this.subscribers = subscribers;
    }

    tick () {
        for(let i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i].tick();
        }
    }
}

class Person {
    constructor() {
        this.age = 0;
    }

    birthday() {
        console.log(`Happy ${this.age}. birthday!`);
    }

    tick() {
        this.age = this.age + 1;
    }
}

let p = new Person();
let t = new Time([p]);

let interval = setInterval(function() {
    t.tick();
    p.birthday();
}, 2000);

clearInterval(interval);
