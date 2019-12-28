let database = require('./database');
let result;
switch (process.argv[2]) {
    case 'listStudents':
        result = database.listStudents();
        console.log('1. feladat**************************************************')
        console.log('A hallgatók nevei csoportonként:')
        result.forEach(function (item) {
            console.log('----------------------------------------------------')
            console.log(`A(z) ${item.name} csoport hallgatói`)
            item.students.forEach(function (nameitem) {
                console.log(nameitem)
            })
        });
        break;

    case 'maxPoints':
        result = database.maxPoints();
        console.log('2. feladat*************************************************')
        console.log('A vizsgák legjobban teljesítő hallgatói:')
        result.forEach(function (item) {
            console.log(`A ${item.exam} vizsgán ${item.student} teljesített a legjobban`)
        });
        break;

    case 'failedStudents':
        result = database.failedStudents();
        console.log('3. feladat*************************************************')
        console.log('A bukott hallgatók:')
        result.forEach(function (item) {
            console.log('----------------------------------------------------')
            console.log(`A ${item.exam} csoport bukott hallgatói`)
            item.students.forEach(function (nameitem) {
                console.log(nameitem)
            })
        });  
    }
