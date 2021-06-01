
'use strict'

/*helper functions*/
function printSquare(square) {
    for(var i = 0; i < square.length; i++) {
        var row = '';
        for(var j = 0; j < square.length; j++) {
            row += square[i][j] + ' ';
        }
        console.log(row);
    }
}

/*unit testing*/

//valid squares
var square = [[2,7,6],[9,5,1],[4,3,8]];
printSquare(square)
if (!validate(square)) console.log('this is not a valid magic square');
square = [[2,7,6],[9,7,1],[4,3,8]];
printSquare(square)

//invelid squares
square = [[2,7,6],[9,5,1],[8,8,8]];
if (!validate(square)) console.log('this is not a valid magic square');
printSquare(square)
if (!validate(square)) console.log('this is not a valid magic square');

//this square should be invalid - if the function returns true print the square and check what the problem is
square = [[2,7,7],[9,7,1],[4,3,8]];
!validate(square) ? console.log('this is not a valid magic square') : printSquare(square);
square = [[2,7,6],[9,7,1],[4,3,8]];
!validate(square) ? console.log('this is not a valid magic square') : printSquare(square);
square = [[2,7,6],[9,7,1],[4,3,5]];
!validate(square) ? console.log('this is not a valid magic square') : printSquare(square);
// square = [[2,7,6],[9,7,1],[4,3,8]];
// !validate(square) ? console.log('this is not a valid magic square') : printSquare(square);
// square = [[2,7,6],[9,7,1],[4,3,8]];
// !validate(square) ? console.log('this is not a valid magic square') : printSquare(square);


/*functions*/

/*
Write a function that gets a 2d array and vailates it’s a magic square:
a. It must be a square
Copyright 2020 © misterBIT
b. The rows, columns, and the two diagonals sums should be equal
*/
function validate(square) {
    var size = square.length;

    //check if square
    if (square.length !== square[0].length) return false;
    
    //check main diag
    var sum = sumMainDiag(square);

    //check rows
    for (var row = 0; row < size; row++) {
        if (sumRow(square, row) !== sum) return false;
    }

    //check cols
    for (var col = 0; col < size; col++) {
        if (sumCol(square, col) !== sum) return false;
    }
    
    //check secondary diag
    if (sum2ndDiag(square) !== sum) return false;


    console.log('this is a valid magic square');
    return true;
}

function sumMainDiag(square) {
    var sum = 0;
    for (var i = 0; i < square.length; i++) {
        sum += square[i][i];
    }
    return sum;
}

function sum2ndDiag(square) {
    var sum = 0;
    for (var i = 0; i < square.length; i++) {
        sum += square[i][square.length - i - 1];
    }
    return sum;
}

function sumRow(square, row) {
    var sum = 0;
    for (var i = 0; i < square.length; i++) {
        sum += square[row][i];
    }
    return sum;
}

function sumCol(square, col) {
    var sum = 0;
    for (var i = 0; i < square.length; i++) {
        sum += square[i][col];
    }
    return sum;
}
