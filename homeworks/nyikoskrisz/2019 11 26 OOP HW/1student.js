class Student {
    constructor(name){
        this.name = name
    }
    apply(course) {
        course.students.push(this)
        
    }
}

class Course {
    constructor(name, students){
        this.name = name,
        this.students = students
        this.lecturer = {}
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

let angol = new Course("angol", starray, tantoneni)

pistike.apply(angol)

tantoneni.teach(angol);

console.log(angol)
