'use strict'

var mat = [
    [1,2,3],
    [2,3,4],
    [3,4,5]
];


console.log('checkIfSymmetric(mat) = ', checkIfSymmetric(mat), ', expecting true');

var mat = [
    [1,2,3],
    [2,6,4],
    [3,4,5]
];
console.log('checkIfSymmetric(mat) = ', checkIfSymmetric(mat), ', expecting true');

mat = [
    [1,2,3],
    [2,3,4],
    [1,4,5]
];
console.log('checkIfSymmetric(mat) = ', checkIfSymmetric(mat), ', expecting false');

var mat = [
    [1,2,2],
    [2,3,4],
    [3,4,5]
];
console.log('checkIfSymmetric(mat) = ', checkIfSymmetric(mat), ', expecting false');

var mat = [
    [1,2,3],
    [2,3,4],
    [3,3,5]
];
console.log('checkIfSymmetric(mat) = ', checkIfSymmetric(mat), ', expecting false');


// var mat = [
//     [1,2,3],
//     [2,3,4],
//     [3,4,5]
// ];

function checkIfSymmetric(mat) {
    if (mat.length !== mat[0].length) return false;

    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j <= i; j++) {
            if (mat[i][j] !== mat[j][i]) return false;
        }
    }
    return true;
}