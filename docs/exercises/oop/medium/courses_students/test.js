const assert = require('chai').assert;
const Student = require('./solution/Student');
const Lecturer = require('./solution/Lecturer');
const Course = require('./solution/Course');
const IllegalState = require('./solution/errors/IllegalState');

const DUMMY_ID = 1;
const OTHER_DUMMY_ID = 2;
const DUMMY_NAME = 'Dummy Name';

describe('Course', () => {
    describe('addStudent', () => {
        it('should throw IllegalState if student with same id is already registered for the course', () => {
            const c = new Course();
            const s = new Student(DUMMY_ID);
            c.addStudent(s);

            assert.throws(() => c.addStudent(s), IllegalState);
        });
    });

    describe('addLecturer', () => {
        it('should throw IllegalState when trying to add a lecturer to a course which already has one', () => {
            const c = new Course();
            const lecturer = new Lecturer(DUMMY_ID);
            const otherLecturer = new Lecturer(OTHER_DUMMY_ID);

            c.addLecturer(lecturer);

            assert.throws(() => c.addLecturer(otherLecturer), IllegalState);
        });

    });
    
    describe('lecturer', () => {
        it('should return the lecturer added to a course', () => {
            const c = new Course();
            const lecturer = new Lecturer(DUMMY_ID);
    
            c.addLecturer(lecturer);
    
            assert.deepEqual(c.lecturer(),lecturer);
        });

        it('should return null if no lecturer added to a course', () => {
            const c = new Course();
    
            assert.strictEqual(c.lecturer(), null);
        });

    });

    describe('students', () => {

        it('should return empty array if no student is added to the course', () => {
            const c = new Course();

            const students = c.students();

            assert.strictEqual(students.length, 0);
        });

        it('should return the students added to the course', () => {
            const c = new Course();
            const s = new Student(DUMMY_ID);
            
            c.addStudent(s);
            const students = c.students();

            assert.equal(students.length, 1);
            assert.deepEqual(students[0], s);
        });
    });

    describe('studentById', () => {
        it('should return the student with the provided id if the student was added previously', () => {
            const c = new Course();
            const s = new Student(DUMMY_ID, DUMMY_NAME);

            c.addStudent(s);

            assert.deepEqual(c.studentById(DUMMY_ID), s);
        });

        it('should return undefined if no student is added with the provided id', () => {
            const c = new Course();
            const s = new Student(DUMMY_ID, DUMMY_NAME);

            c.addStudent(s);

            assert.strictEqual(c.studentById(OTHER_DUMMY_ID), undefined);
        });
    });

    describe('canStart', () => {
        it('should return true if student count is at least the specified minimum and a lecturer is added', () => {
            const c = new Course(undefined, undefined, 2);

            c.addStudent(new Student(DUMMY_ID));
            c.addStudent(new Student(OTHER_DUMMY_ID));
            c.addLecturer(new Lecturer());

            assert.isTrue(c.canStart());
        });

        it('should return false if student count is less than the specified minimum', () => {
            const c = new Course(undefined, undefined, 2);

            c.addStudent(new Student(DUMMY_ID));

            assert.isFalse(c.canStart());
        });

        it('should return false if lecturer is not added', () => {
            const c = new Course(undefined, undefined, 2);

            c.addStudent(new Student(DUMMY_ID));
            c.addStudent(new Student(OTHER_DUMMY_ID));

            assert.isFalse(c.canStart());
        });
    });

});
