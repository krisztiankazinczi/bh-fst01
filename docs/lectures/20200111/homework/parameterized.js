var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('sqlhw01');

db.serialize(function() {

let parameter = process.argv[3];

switch (process.argv[2]) {
    case '1': 
        db.all(`SELECT nominee FROM awards WHERE year_award = (
            SELECT MIN(year_award) FROM awards 
        ) + ${parameter - 1}`, (err, rows) => {
            if (err) console.log(err);
            console.log(`A következő színészeket jelölték a ${parameter}. díjátadón:`);
            rows.forEach(row => console.log(row.nominee));
        });
        break;
    
    case '2':
        // parameter egy szam 0-tol
        db.all(`SELECT nominee FROM awards WHERE win = 'True' AND year_award = (
            SELECT MIN(year_award) FROM awards 
        ) + ${parameter - 1}`, (err, rows) => {
            if (err) console.log(err);
            console.log(`A következő színészek nyertek díjat a ${parameter}. díjátadón:`);
            rows.forEach(row => console.log(row.nominee));
        });
        break;

    case '3':
        // parameter az evtized - pl: 1960
        db.all(`SELECT DISTINCT nominee FROM awards WHERE year_award BETWEEN ${parameter} AND ${Number(parameter) + 9}`, (err, rows) => {
            if (err) console.log(err)
            console.log(`Az ${parameter}-es években jelölt színészek nevei. Egy név csak egyszer szerepel az eredményben:`);
            rows.forEach(row => console.log(row.nominee));
        });
        break;

    case '4':
        // parameter egy nev (string)
        db.all(`SELECT DISTINCT x.year_award FROM awards x
        INNER JOIN awards y ON x.year_award - 1 = y.year_award
        WHERE x.nominee = y.nominee AND x.nominee = '${parameter}'
        AND x.win = 'True' AND y.win = 'False'`, (err, rows) => {
            if (err) console.log(err)
            console.log(`Azoknak az éveknek a listája, amikor ${parameter} úgy nyert díjat, hogy a megelőző évben is jelölték, de akkor nem nyert:`)
            rows.forEach(row => console.log(row.year_award));
        });

    }


});