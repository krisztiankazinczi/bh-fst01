class Student {
    constructor(name) {
        this.name = name
    }
    apply(course) {
        let k = course.maxCount - course.students.length
        if (k > 0) {
            course.students.push(this)
            if (k === 1) {
                course.start()
                console.log("A képzés megkezdődött")
            }
        } else { return console.log(`A ${this.name} diák már nem fér be a képzésbe`) }


    }
}

class Course {
    constructor(name, students, minCount, maxCount) {
        this.isStarted = false,
            this.minCount = minCount,
            this.maxCount = maxCount,
            this.name = name,
            this.students = students,
            this.lecturer = {}
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

let pistike = new Student("Pistike")
let jozsika = new Student("Józsika")
let petike = new Student("Petike")

let starray = [jozsika, petike, pistike]

let tantoneni = new Lecturer("Tantónéni")

let angol = new Course("angol", starray, 3, 5)

tantoneni.teach(angol);

console.log("Hozzunk létre még három diákot")

let student1 = new Student("student1")
let student2 = new Student("student2")
let student3 = new Student("student3")


console.log("A kurzusokhoz adjuk hozzá a diákokat egyenként")

student1.apply(angol)
student2.apply(angol)
student3.apply(angol)

console.log(angol.students)

