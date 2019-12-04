class Student {
    constructor(name, skill) {
        this.name = name
        this.skill = skill
    }
    apply(course) {
        console.log(`${this.name} jelentkezik a ${course.name} képzésre`)
        let k = course.maxCount - course.students.length
        let rand = Math.floor(Math.random() * this.skill)
        console.log(rand)
        if (course.minPoints <= rand) {
            if (k > 0) {
                console.log(`A ${rand} pont több mint a minimum ponthatár`)
                course.students.push(this)
                if (k === 1) {
                    course.start();
                    console.log("A létszám megtelt, kezdődhet a képzés")
                }
            } else { return false }
        } else{ console.log(`A pontszám nem volt megfelelő`)}

    }
}

class Course {
    constructor(name, students, minCount, maxCount, minPoints) {
        this.isStarted = false,
            this.minCount = minCount,
            this.maxCount = maxCount,
            this.name = name,
            this.students = students,
            this.lecturer = {}
            this.minPoints = minPoints
    }
    start() {
        if (this.minCount <= this.students.length) {
            this.isStarted = true;
            return true;
        } else {
            return false
        }

    }
}

class Lecturer {
    constructor(name) {
        this.name = name
    }
    teach(course) {
        course.lecturer = this
    }
}

let pistike = new Student("Pistike", 4)
let jozsika = new Student("Józsika", 6)
let petike = new Student("Petike", 7)

let starray = [jozsika, petike, pistike]

let tantoneni = new Lecturer("Tantónéni")

let angol = new Course("angol", starray, 3, 5, 4)

tantoneni.teach(angol);

console.log("Hozzunk létre még három diákot")

let student1 = new Student("student1", 9)
let student2 = new Student("student2", 6)
let student3 = new Student("student3", 8)


console.log("A kurzusokhoz adjuk hozzá a diákokat egyenként")

student1.apply(angol)
student2.apply(angol)
student3.apply(angol)

console.log(angol.students)

