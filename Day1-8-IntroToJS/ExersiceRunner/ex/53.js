'use strict'
var gIdCount = 0;

var gStudents = createStudents();
console.log('students: ', gStudents);


console.log('worst student: ', findWorstStudent(gStudents));

sortStudentsByGrade(gStudents)
console.log('sorted by grade', gStudents);
sortStudentsByName(gStudents)
console.log('sorted by name', gStudents);


/*****FUNCTIONS****** */


function createStudents() {
    var students = [];
    var studentName = prompt('please enter student name');

    while (studentName.toLowerCase() !== 'quit') {
        var student = {
            id: gIdCount++,
            name: studentName,
            grades: [],
            average: 0
        }

        students.push(student);
        studentName = prompt('please enter student name');
    }


    for (var i = 0; i < students.length; i++) {
        var currStudent = students[i];
        var sumGrades = 0
        for (var j = 0; j < 3; j++) {
            var currGrade = +prompt('please enter a grade');
            currStudent.grades.push(currGrade);
            sumGrades += currGrade;
        }
        currStudent.average = sumGrades / 3;
    }

    return students;
}

/*gets the average of the grades for each student*/
// function getAverages(students) {
//     var averages = [];

//     for (var i = 0; i < students.length; i++) {
//         var currStudent = students[i];

//         var gradesTotal = 0;
//         var gradesCount = 0;

//         for (var j = 0; j < currStudent.grades.length; j++) {
//             gradesTotal += currStudent.grades[j];
//             gradesCount++;
//         }

//         averages.push(gradesTotal / gradesTotal);
//     }
//     return averages;
// }

function findWorstStudent(students) {
    var worstStudent = null;
    for (var i = 0; i < students.length; i++) {
        var currStudent = students[i];
        if (!worstStudent || currStudent.average < worstStudent.average) {
            worstStudent = currStudent;
        }
    }
    return worstStudent;
}

function sortStudentsByGrade(students) {
    students.sort(function(a,b){return a.average - b.average});
}

function sortStudentsByName(students) {
    students.sort(function(a,b){return a.name > b.name ? 1 : -1});
}

//createStudent as separate function