const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();
const port = 3000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
}

let books = [
    new Book(1, "Harry Potter", "J.K. Rowling"),
    new Book(2, "Gyuruk ura", "Tolkien"),
    new Book(3, "Star Wars", "Stewen Spielberg")
]


app.get('/books.html', (req, res) => {
    res.render('books', { books: books});
});

app.get('/edit.html', (req, res) => {
    const id = req.query;

    const book = books.find(b => b.id == id.id)

    res.render('edit', { book: book});
});

app.post('/book/:id/edit', (req, res) => {
    const editedBook = req.body;
    const id = Number(req.params.id);

    const idx = books.findIndex(b => b.id == id)

    books.splice(idx, 1, new Book(id, editedBook.title, editedBook.author));

    res.redirect(301, "/books.html");
});

app.get('/delete.html', (req, res) => {
    const id = req.query;

    const book = books.find(b => b.id == id.id)

    res.render('delete', { book: book});
});

app.post('/book/:id/delete', (req, res) => {
    const id = Number(req.params.id);

    const idx = books.findIndex(b => b.id == id)

    books.splice(idx, 1);

    res.redirect(301, "/books.html");
});

app.get('/new-book.html', (req, res) => {
    res.render('new-book');
});


app.post('/books', (req, res) => {
    const { title, author } = req.body;
    let idGenerator = books[books.length - 1].id + 1; // igy mindig a legutolso elemnek emgnezi az id-jat, es egyel nagyobbat fogok letrehozni. Igy ha torlunk sort, akkor is jo lesz az id
    
    books.push(new Book(idGenerator, title, author));
    res.redirect(301, "/books.html");
})




app.listen(port, () => console.log(`App listens on port: ${port}`));