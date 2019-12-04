class Student {
    constructor(name){
        this.name = name
    }
    apply(course) {
        course.students.push(this)
        
    }
}

class Course {
    constructor(name, students, minCount){
        this.isStarted = false,
        this.minCount = minCount,
        this.name = name,
        this.students = students,
        this.lecturer = {}
    }
    start(){
        if (this.minCount <= this.students.length) {
            this.isStarted = true;
            return true;
        } else {
            return false
        }
        
    }
}

class Lecturer {
    constructor(name){
        this.name = name
    }
    teach(course){
        course.lecturer = this
    }
}

let pistike = new Student("Pistike")
let jozsika = new Student("Józsika")
let petike = new Student("Petike")

let starray = [jozsika, petike]

let tantoneni = new Lecturer("Tantónéni")

let angol = new Course("angol", starray, 3)

tantoneni.teach(angol);

console.log("Kezdjük meg a képzést")

console.log(angol.start())

console.log("Adjunk hozzá még egy diákot")

pistike.apply(angol)

console.log("Kezdjük meg újra a képzést")

console.log(angol.start())


