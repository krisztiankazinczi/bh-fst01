const express = require('express');
const exphbs  = require('express-handlebars');
const fetch = require('node-fetch');
const cors = require('cors')

const app = express();
app.use(cors())

const port = 4000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// szerintem ez nem szukseges, elvegre amikor irjuk az emailt meg kell adnunk a to/from mezoben ezeket
// const myNgrokUrl = process.argv[2];
// const otherNgrokUrl = process.argv[3];

let mesId = 0;

class Message {
    constructor(from, to, subject, content) {
        this.id = mesId++;
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.content = content;
        this.date = new Date();
    }
}

let messages = [
    new Message( "https://email.lilkrisz.repl.co", "http://152b3c17.ngrok.io", "Munka", "Lesz ma valami a munkaban?"),
    new Message( "http://152b3c17.ngrok.io", "https://email.lilkrisz.repl.co", "Fozes", "Mit fozzek ma?"),
    new Message( "https://email.lilkrisz.repl.co", "http://152b3c17.ngrok.io", "Edzes", "Megyunk ma edzeni?"),
    new Message( "http://152b3c17.ngrok.io", "https://email.lilkrisz.repl.co", "Hetvege", "Van valami terved hetvegere?")
];

app.get('/compose', (req, res) => {
    res.render('compose');
});

app.post('/compose', (req, res) => {
    const { from, to, subject, content } = req.body;
    
    const data = { message: new Message(from, to, subject, content) }

    //fetch-el kuldom el a masik email fiok szerverere az uzenetet. Ha kapok vissza valaszt, success alert, ha nincs ilyen url, akkor a catch elkapja a hibat es atiranyit a failed alertre
    //a to mezobe irt szerverre inditom a fetch kerest, igy nem kell a process.argv parameter
    fetch(`${to}/inbox`, {
        method: 'POST',
        headers: {
      		'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then( res => res.text() )
    .then( body => {
        res.redirect('/compose?alert=success')        
    })
    .catch((error) => {
        res.redirect('/compose?alert=failed')
    });

});

app.get('/inbox', (req, res) => {
    res.render('inbox', { messages: messages});
});

app.post('/inbox', (req, res) => {
    const { message } = req.body;
    
    if (message) {
        messages.push(message);
        res.send('success');
    }
})

app.get('/view/:id', (req, res) => {
    const id = req.params.id;

    const message = messages.find( m => id == m.id);
    
    res.render('viewmsg', { message: message});
})

app.listen(port, () => console.log(`App listens on port: ${port}`))