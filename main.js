let database = require ('./database');
let result;

switch(process.argv[2]){
    case 'listStudents':
        result = database.listStudents;
        result();
        break;
    case 'maxPoints':
        result = database.maxPoints;
        result();
        break;
    case 'failedStudents':
        result = database.failedStudents;
        result();
        break;
    default: 
    console.log("Please request a correct operation in order to use the database");
}