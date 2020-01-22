const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('prepare.sql');
const fs = require('fs');

db.serialize(() => {
    db.all('select ceremony, nominee from awards where ceremony = 5', (err,row) => {
        if(err){
            console.log(err);
            return;
         }
         console.log('Azoknak a színészeknek a nevei, akiket az 5. díjátadón jelöltek:\n');
         row.forEach(element => {
            console.log(`-${element.nominee}`);
         });
    });
    db.all("select ceremony, nominee, win from awards where ceremony = 5 and win = 'True'", (err,row) => {
        if(err){
            console.log(err);
            return;
         }
         console.log('\n\nAzoknak a színészeknek a nevei, akik az 5. díjátadón díjat is kaptak:\n');
         row.forEach(element => {
            console.log(`-${element.nominee}`);
         });
    });
    db.all("select year_award, nominee from awards where year_award = 1950 group by nominee order by year_award", (err,row) => {
        if(err){
            console.log(err);
            return;
         }
         console.log('\n\nAz 1950-es években jelölt színészek nevei:\n');
         row.forEach(element => {
            console.log(`-${element.nominee}`);
         });
    });
    db.all("select distinct a1.nominee, a2.year_award, a2.win from awards as a1 join awards as a2 on a1.nominee = 'Meryl Streep' where a1.nominee = a2.nominee and a2.year_award = a1.year_award + 1 and a1.win = 'False' and a2.win = 'True'", (err,row) => {
        if(err){
            console.log(err);
            return;
         }
         console.log('\n\nAzoknak az éveknek a listája, amikor Meryl Streep úgy nyert díjat, hogy a megelőző évben is jelölték, de akkor nem nyert:\n');
         row.forEach(element => {
            console.log(`-${element.year_award}`);
         });
         console.log('\n\n');
    });
});

