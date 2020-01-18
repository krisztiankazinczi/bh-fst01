const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);

    db.serialize(function() {
        db.run("CREATE TABLE result (value TEXT)");
    });

    // db.close();
});
