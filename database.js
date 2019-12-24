const fs = require('fs');
let y = fs.readFileSync('./tables/courses.json');
const a = JSON.parse(y);
let z = fs.readFileSync('./tables/exams.json');
const b = JSON.parse(z);
let x = fs.readFileSync('./tables/students.json');
const c = JSON.parse(x);
let v = fs.readFileSync('./tables/teachers.json');
const d = JSON.parse(v);


function listStudents() {
    for (let i = 0; i < a.length; i++) {
        let studentNames = ``;
        for (let index = 0; index < a[i].students.length; index++) {
            for (let dex = 0; dex < c.length; dex++) {
                if (a[i].students[index] == c[dex].id) {
                    studentNames = studentNames + `${c[dex].name}` + `, `
                }
            }
        }
        console.log(`In the ${a[i].name} there are the following students: ${studentNames} `)
    }
};

function maxPoints() {
    for (let i = 0; i < b.length; i++) {
        if (b[i].courseId == a[i].courseId) {
            let arr4 = [];
            for (let dex = 0; dex < b[i].points.length; dex++) {
                arr4.push(b[i].points[dex].points)
            }
            let highest = Math.max(...arr4);
            for (let i2 = 0; i2 < b[i].points.length; i2++) {
                if (highest === b[i].points[i2].points) {
                    for (let i3 = 0; i3 < c.length; i3++) {
                        if (b[i].points[i2].studentId === c[i3].id) {
                            console.log(`In the course of ${a[i].name} ${c[i3].name} got the highest score.`)
                        }
                    }


                }
            }

        }
    }
};


/*let failed = [];
function failedStudents() {
    let arr1 = b;
    let arr2;
    for (let i = 0; i < b.length; i++) {
        arr2 = arr1[i].points;
        for (let index = 0; index < arr2.length; index++) {
            if (arr2[index].points <= 59) {
                failed.push(arr2[index]);
            }
        }
    }

};

let f = "";

function failedStudentsNames() {
    failedStudents();
    for (let index = 0; index < failed.length; index++) {
        for (let i = 0; i < c.length; i++) {
            if (failed[index].studentId == c[i].id) {
                f = c[i].name + " " + f;
            }
        }
    }
    return f;
}*/


function failedStudents() {
    for (let i = 0; i < b.length; i++) {
        if (b[i].courseId == a[i].courseId) {
            let arr4 = [];
            for (let dex = 0; dex < b[i].points.length; dex++) {
                arr4.push(b[i].points[dex].points)
            }

            let failed = arr4.filter(fail => fail < 60);
            let failedNames = ``;
            for (let i2 = 0; i2 < b[i].points.length; i2++) {
                for (let i8 = 0; i8 < failed.length; i8++) {
                    if (failed[i8] === b[i].points[i2].points) {
                        for (let i3 = 0; i3 < c.length; i3++) {
                            if (b[i].points[i2].studentId === c[i3].id) {

                                failedNames = `${failedNames}` + `${c[i3].name}` + `, `;
                            }
                        }
                    }
                }
            }
            if (failed.length == 0) {
                console.log(`In the course of ${a[i].name} nobody failed the course.`)
            } else if (failed.length > 0) {
                console.log(`In the course of ${a[i].name} ${failedNames} failed the course.`)
            }


        }
    }
}

module.exports = {
    listStudents: listStudents,
    failedStudents: failedStudents,
    maxPoints: maxPoints
}