//Scarlet Salinas
// CMPS2212 Lab 1
// 03/02/26
//File: exercise3.js


const student = {
    firstName: "John",
    lastName: "Doe",
    studentId: "12345",
    courses: [],

    // Methods:

    // getFullName() returns full name
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // enrollCourse(courseName) adds a course to  courses array
    enrollCourse(courseName) {
        this.courses.push(courseName);
    },

    // getCourseCount() returns the number of enrolled courses
    getCourseCount() {
        return this.courses.length;
    }
};



// Testing 
console.log(student.getFullName()); // Expected: John Doe
student.enrollCourse('CMPS2212');
student.enrollCourse('MATH2210');
console.log(student.getCourseCount()); // Expected: 2
//console.log(student.courses);


