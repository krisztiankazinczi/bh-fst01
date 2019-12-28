const IllegalState = require('./errors/IllegalState');

class Course {
    constructor(students, lecturer, minStudentsCount) {
        this._students = students || [];
        this._lecturer = lecturer || null;
        this._minStudentCount = minStudentsCount || 0;
    }

    addStudent(student) {
        if (this.studentById(student.id())) throw new IllegalState(`student id (${student.id()}) already registered`);
        
        this._students.push(student);
    }

    addLecturer(lecturer) {
        if (this._lecturer) throw new IllegalState(`a lecturer (${this._lecturer.name()}) already exists for the course (${this._title})`);

        this._lecturer = lecturer;
    }

    lecturer() {
        return this._lecturer;
    }

    students() {
        return this._students;
    }

    studentById(id) {
        return this._students.find(student => student.id() === id);
    }

    canStart() {
        return this._students.length >= this._minStudentCount && !!this._lecturer;
    }

}

module.exports = Course;