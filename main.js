

const DB = require('./database.js');
const db = new DB();

console.log("");
db.listStudents();
console.log("");
db.maxPoints();
console.log("");
db.failedStudents();
console.log("");