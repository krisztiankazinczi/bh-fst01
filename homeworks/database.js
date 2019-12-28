const fs = require('fs')

function listStudents() {
    let output = []
    let coursedata = { name: "", students: [] }
    let students = fs.readFileSync('tables/students.json')
    let courses = fs.readFileSync('tables/courses.json')
    arr_students = JSON.parse(students)
    arr_courses = JSON.parse(courses)

    arr_courses.forEach(function (item) {
        coursedata = { name: "", students: [] }
        coursedata.name = item.name;
        item.students.forEach(function (inner_item) {
            arr_students.forEach(function (more_inner) {
                if (inner_item === more_inner.id) {
                    coursedata.students.push(more_inner.name)
                }
            })
        })
        output.push(coursedata)

    })
    return output
}

function maxPoints() {
    
    let output = []
    let exams = fs.readFileSync('tables/exams.json')
    let students = fs.readFileSync('tables/students.json')
    let courses = fs.readFileSync('tables/courses.json')
    arr_exams = JSON.parse(exams)
    arr_students = JSON.parse(students)
    arr_courses = JSON.parse(courses)

    arr_exams.forEach(function (item) {
        let exam_data = { exam: "", student: "" }
        arr_courses.forEach(function (courseitem, courseindex) {
            if (item.courseId == courseindex + 1) {
                exam_data.exam = courseitem.name
            }
        })
        let max = 0
        let maxId = ""
        item.points.forEach(function (inner_item) {
            if (inner_item.points > max) {
                maxId = inner_item.studentId
                max = inner_item.points
            }
        })
        arr_students.forEach(function (student_item) {
            if (student_item.id == maxId) {
                exam_data.student = student_item.name
            }

        })
        output.push(exam_data)
    })
    return output
}

function failedStudents() {
    let output = []
    let exams = fs.readFileSync('tables/exams.json')
    let students = fs.readFileSync('tables/students.json')
    let courses = fs.readFileSync('tables/courses.json')
    arr_exams = JSON.parse(exams)
    arr_students = JSON.parse(students)
    arr_courses = JSON.parse(courses)

    arr_exams.forEach(function (item) {
        let failed_data = { exam: "", students: [] }
        arr_courses.forEach(function (courseitem, courseindex) {
            if (item.courseId == courseindex + 1) {
                failed_data.exam = courseitem.name
            }
        })
        item.points.forEach(function (inner_item) {
            if (inner_item.points <= 60) {
                arr_students.forEach(function (student_item) {
                    if (student_item.id == inner_item.studentId) {
                        failed_data.students.push(student_item.name) 
                    }
            })
        }
    })
        output.push(failed_data)
    })
    return output
}

module.exports = {
    listStudents: listStudents,
    maxPoints: maxPoints,
    failedStudents : failedStudents
}
