class Student {
    constructor(name, skill) {
        this.name = name;
        this.skill = skill;
    }

    apply(course) {
        if (course.maxHeadCount == course.students.length) {
            return false;
        }

        if (course.lecturer == null) {
            return false;
        }

        let rand = Math.random();
        if (this.skill * rand < course.minPoints) {
            return false;
        }

        course.students.push(this);

        if (course.maxHeadCount == course.students.length) {
            course.start();
        }

        return true;
    }
}

class Course {
    constructor(name, minHeadCount, maxHeadCount, minPoints) {
        this.name = name;
        this.students = [];
        this.lecturer = null;
        this.minHeadCount = minHeadCount;
        this.maxHeadCount = maxHeadCount;
        this.isStarted = false;
        this.minPoints = minPoints;
    }

    start() {
        if (this.students.length >= this.minHeadCount) {
            this.isStarted = true;
        }

        return this.isStarted;

    }
}

class Lecturer {
    constructor(name) {
        this.name = name;
    }

    teach(course) {
        course.lecturer = this;
    }
}

let student1 = new Student("Joska");
let course = new Course("Programozas");
let lecturer = new Lecturer("Izolda");

student1.apply(course);
lecturer.teach(course);