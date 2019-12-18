const uuidv4 = require('uuid/v4');

class Bank {
    constructor() {
        // tipus annotacio, amely leirja h az accounts egy object literal lesz, ahol
        // a kuls uuid tipusu, a kulcshoz tartozo ertek pedig Account tipusu
        /** @type {{uuid: Account}} */
        this._accounts = {};
        /*
            pelda: 
            {
                1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed: new Account(),
                2b4c6bed-bbfd-5b3d-1b5d-............: new Account()
            }
        */
    }

    /**
     * bemeno parameter neve p es tipusa pedig Person
     * visszateresi ertek tipusa pedig uuid lesz
     * 
     * @param {Person} p 
     * @returns {uuid}
     */
    createAccount(p) {
        const id = uuidv4();
        const account = new Account(id, p.name);
        p.accounts.push(account);

        this._accounts[id] = account;

        return id;
    }
}

class Person {
    constructor() {
        this.accounts = [];
        this.name = '';
    }
}

class Account {
    constructor(id, owner) {
        this.id = id;
        this.owner = owner;
        this.bank = '';
        this.balance = 0;
    }
}
