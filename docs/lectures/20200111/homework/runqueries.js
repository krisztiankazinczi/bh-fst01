var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('sqlhw01');

/**
 * Ha nem adunk extra process.argv parametereket lefog futni a kivant eredmenyt varo query
 */

db.serialize(function() {

    let order = process.argv[2] - 1 || 4;

    // A dijatado evet a Min fuggveny segitsegevel hataroztam meg, amihez hozzaadtam a dijatado sorszama - 1-et
    db.all(`SELECT nominee FROM awards WHERE year_award = (
        SELECT MIN(year_award) FROM awards 
    ) + ${order}`, (err, rows) => {
        if (err) console.log(err)
        console.log('Azoknak a színészeknek a nevei, akiket az 5. díjátadón jelöltek:');
        console.log('-----------------------------------------------------')
        rows.forEach(row => console.log(row.nominee));
        console.log('-----------------------------------------------------')
    })

    db.all(`SELECT nominee FROM awards WHERE win = 'True' AND year_award = (
        SELECT MIN(year_award) FROM awards 
    ) + ${order}`, (err, rows) => {
        if (err) console.log(err)
        console.log('Azoknak a színészeknek a nevei, akik az 5. díjátadón díjat is kaptak:');
        console.log('-----------------------------------------------------')
        rows.forEach(row => console.log(row.nominee));
        console.log('-----------------------------------------------------')
    })

    let decade = process.argv[3] || 1950;
    
    db.all(`SELECT DISTINCT nominee FROM awards WHERE year_award BETWEEN ${decade} AND ${parseInt(decade) + 9}`, (err, rows) => {
        if (err) console.log(err)
        console.log('Az 1950-es években jelölt színészek nevei. Egy név csak egyszer szerepel az eredményben:');
        console.log('-----------------------------------------------------')
        rows.forEach(row => console.log(row.nominee));
        console.log('-----------------------------------------------------')
    })

    let name = process.argv[4] || 'Meryl Streep';

    db.all(`SELECT DISTINCT x.year_award FROM awards x
    INNER JOIN awards y ON x.year_award - 1 = y.year_award
    WHERE x.nominee = y.nominee AND x.nominee = '${name}'
    AND x.win = 'True' AND y.win = 'False'`, (err, rows) => {
        if (err) console.log(err)
        console.log('Azoknak az éveknek a listája, amikor Meryl Streep úgy nyert díjat, hogy a megelőző évben is jelölték, de akkor nem nyert:')
        console.log('-----------------------------------------------------')
        rows.forEach(row => console.log(row.year_award));
    });
});


db.close();