var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('goldenGlobe');

// Barhogy probaltam, nem birtam node-val beimportalni, csak terminalban sikerult letrehozni. De azert itt hagyok egy-ket probalkozast


db.serialize(function() {
      db.run("CREATE TABLE IF NOT EXISTS awards (year_film INT,year_award INT, ceremony INT, category VARCHAR(150), nominee VARCHAR(30), film VARCHAR(50), win VARCHAR(6));", (a, err) => {
            console.log('an error has occured:', err)
          });
      
      //     db.run("BULK INSERT awards FROM 'C:/Users/HP/Desktop/bh-fst01/docs/lectures/20200111/homework/golden_globe_awards.csv' WITH (FIRSTROW = 2, FIELDTERMINATOR = ',', ROWTERMINATOR = '\n', TABLOCK);", (a, err) => {
      //           if (err) console.log(err);
      //     })

      // db.run(`.mode csv`);
      // db.run(`.import "C:/Users/HP/Desktop/bh-fst01/docs/lectures/20200111/homework/golden_globe_awards.csv"`);

      db.run('.import "C:/Users/HP/Desktop/bh-fst01/docs/lectures/20200111/homework/golden_globe_awards.csv"'
      + 'INTO TABLE awards'
      + 'FIELDS TERMINATED BY ","'
      + 'ENCLOSED BY "\'"'
      + 'LINES TERMINATED BY \'\\n\''
      + 'IGNORE 1 ROWS'
      + ')', (a, err) => {
            if (err) console.log(err);
      });
      
});

db.close();
