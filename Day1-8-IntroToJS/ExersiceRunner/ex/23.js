//returns the factorial of a number
function getFactorial(num) {
    if (num < 0) {
        console.log('cannot calculate factorial of a negative number');
        return;
    }
    var result = 1;
    while (num > 1) {
        result *= num;
        num--;
    }

    return result;
}

//unit test
var num = 1;
var expectedResult = 1;
console.log('getFactorial(' + num + ') returns ' + getFactorial(num) + ', expected ' + expectedResult);

var num = 4;
var expectedResult = 24;
console.log('getFactorial(' + num + ') returns ' + getFactorial(num) + ', expected ' + expectedResult);

var num = 2;
var expectedResult = 2;
console.log('getFactorial(' + num + ') returns ' + getFactorial(num) + ', expected ' + expectedResult);