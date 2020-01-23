const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('loginDB');

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/addUser', (req, res) => {
    res.sendFile('C:/Users/HP/Desktop/bh-fst01/docs/lectures/20200118/hw/static/login.html');
})



app.post('/login', (req, res) => {
    const {username, email, password} = req.body;
    console.log(username, email, password)
    db.serialize(function() {
        db.run("INSERT INTO users VALUES (?,?,?)", [username, email, password], (err) => { if(err) console.log(err)});
    })

    res.redirect('/users');
});

app.get('/users', (req, res) => {
    db.serialize(function() {
        db.all("SELECT * FROM users", (err, rows) => {
            if (err) console.log(err);

            const header = `<h2>User Login Informations</h2>\n\n\n
            <table width="50%" style="border: 1px solid black">\n
            <tr>\n
              <th width="30%" style="border: 1px solid black">username</th>\n
              <th width="50%" style="border: 1px solid black">email</th> \n
              <th width="20%" style="border: 1px solid black">password</th>\n
            </tr>\n`
            let table = '';

            rows.forEach( row => {
                table += `<tr>\n
                <td style="border: 1px solid black">${row.username}</td>\n
                <td style="border: 1px solid black">${row.email}</td>\n
                <td style="border: 1px solid black">${row.password}</td>\n
              </tr>\n`
            });

            res.send(`${header}${table}</table>`)
        });
    });
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);

    db.serialize(function() {
        db.run("CREATE TABLE IF NOT EXISTS users (username VARCHAR(30), email VARCHAR(60), password VARCHAR(30))");
    });

});