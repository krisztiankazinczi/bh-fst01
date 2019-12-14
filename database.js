const fs = require('fs');

const studentsJSON = JSON.parse(fs.readFileSync('./tables/students.json'));
const teachersJSON = JSON.parse(fs.readFileSync('./tables/teachers.json'));
const coursesJSON = JSON.parse(fs.readFileSync('./tables/courses.json'));
const examsJSON = JSON.parse(fs.readFileSync('./tables/exams.json'));


class Database {
    listStudents() {
        console.log("List of all students:");

        for(let i=0;i<studentsJSON.length;i++){
            console.log("   -"+studentsJSON[i].name);
        }
    }

    max_minNR(wght) {
        let NR = [];
        for (let i = 0; i < examsJSON.length; i++) {

            for (let j = 0; j < examsJSON[i].points.length; j++) {
                let pointss = examsJSON[i].points[j].points;
                // Searching for the biggest number
                if (wght === "max") {
                    if (pointss > NR) {
                        NR[0] = ""+pointss;
                    }
                }
                // Searching for numbers smaller then 60
                if(wght === "min"){   
                    if (pointss < 60) {
                            NR.push(""+pointss);
                    }
                }
            }
        }
        return NR;
    }
    
    fillArr(str){
        let arr=[];
        for(let i=0;i<str.length;i++){
            if(str[i] != ","){
                arr.push(str[i]);
            }
        }
        return arr;
    }

    getStdName(NR) {
        let nr=parseInt(NR);
        let stdPointsID = 0;
        let stdNames = "";
        // Getting the name of the student
        for (let i = 0; i < examsJSON.length; i++) {
            for (let j = 0; j < examsJSON[i].points.length; j++) {
                let pointss = examsJSON[i].points[j].points;
                if (pointss === nr) {
                    stdPointsID = examsJSON[i].points[j].studentId;
                    for (let p = 0; p < studentsJSON.length; p++) {
                        if (studentsJSON[p].id === stdPointsID) {
                            stdNames = studentsJSON[p].name;
                        }
                    }
                }
            }
        }
        return stdNames;
    }

    maxPoints(){
        let stdPoints=this.max_minNR("max");
        let stdName=[];
        
        console.log("Student with maximal points:");
        
        for(let i=0;i<stdPoints.length;i++){
            stdName.push(this.getStdName(stdPoints[i]));
            console.log("   -"+stdName[i]+" -- "+stdPoints[i]+" points.");
        }
    }


    failedStudents() {
        let stdPoints=this.max_minNR("min");
        let stdName=[];
        
        console.log("Students who doesn't reach the minimal point:");

        for(let i=0;i<stdPoints.length;i++){
            stdName.push(this.getStdName(stdPoints[i]));
            console.log("   -"+stdName[i]+" -- "+stdPoints[i]+" points.");
        }
    }
}

module.exports = Database;

