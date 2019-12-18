const fs = require('fs');


class App {
    /**
     * JSDOC, jelezzuk, hogz a bemeno parameter neve configPath es a tipusa string lesz
     * 
     * @param {string} configPath 
     */
    constructor(configPath) {
        try {
            // config file beolvasasa
            const fileBuffer = fs.readFileSync(configPath);
            // ez a file a config.json file lesz
            const config = JSON.parse(fileBuffer);
            
            // input file beolvasasa, ami a counter feltolti
            const inputFileContent = fs.readFileSync(config.path).toString();
            // number-re castolas
            this.counter = parseInt(inputFileContent);

            this.path = config.path;
            this.max = config.max;
        } catch(e) {
            console.warn(`there is no file ${e.message}`);
        }
    }

    /**
     * ebben az ertelemben ez private
     * @private
     */
    write() {
        try {
            fs.writeFileSync(this.path, this.counter);
        } catch(e) {
            console.log('nincs ilyen cel file')
        }
    }

    /**
     * visszaterunk egy number tipu ertekkel
     * @returns {number}
     */
    count() {
        this.counter = this.counter + 1;
        this.write();

        return this.counter;
    }

    reset() {
        this.counter = 0;
        this.write();
    }
}

const argv = process.argv[2];

const app = new App('config.json');

if (argv === 'count') {
    const num = app.count();
    console.log(`the counter is ${num}`);

} else if (argv === 'reset') {
    app.reset();


} else {
    console.warn(`have no command named ${argv}`);
}
