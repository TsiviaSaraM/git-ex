'use strict'

var gMat = [
        [1,2,3,4,5],
        [6,7,8,9,10],
        [11, 12, 13, 14, 15]
    ];

var num = 4;
console.log('the sum of col ',num ,' is ', sumCol(gMat,num), ' expected 30');//expect 30
num = 2;
console.log('the sum of row ',num ,' is ', sumRow(gMat,num), ' expected 65');//expect 65
console.log('the average is ', findAvg(gMat), ' expected 8');//expect 8
num = 1;
console.log('the sum of col ',num ,' is ', sumCol(gMat,num), ' expected 21');//expect 21
console.log('the sum of row ',num ,' is ', sumRow(gMat,num), ' expected 40');//expect 40
console.log('the area sum is ', sumArea(gMat,1, 2, 0, 2 ), ' expected 13');//expect 13

function sumCol(mat, colIdx) {
    var sum = 0;
    for (var i = 0; i < mat.length; i++) {
        sum += mat[i][colIdx];
    }
    return sum;
}
function sumRow(mat, rowIdx) {
    var sum = 0;
    for (var i = 0; i < mat[0].length; i++) {
        sum += mat[rowIdx][i];
    }

    return sum;
}
function findMax(mat, colIdx) {
    var max = mat[0][colIdx];

    for (var i = 0; i < mat.length; i++) {
        currCell = mat[i][colIdx];
        if (currCell > max) max = currCell;
    }
    return max;
}


function findAvg(mat) {
    var numCells = mat.length * mat[0].length;
    var sumCells = 0;
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat[0].length; j++) {
            sumCells += mat[i][j];
        }
    }

    return sumCells / numCells;

}
function sumArea(mat, rowIdxStart, rowIdxEnd, colIdxStart, colIdxEnd) {
    var sum = 0;
    //for each row
    for (var i = rowIdxStart; i <= rowIdxEnd; i++) {
        for (var j = colIdxStart; j <= colIdxEnd; j++) {
            sum += mat[i][j];
        }
    }
    return sum;
}