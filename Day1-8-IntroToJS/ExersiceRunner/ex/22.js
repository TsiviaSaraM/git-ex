function myPow(base, exponent) {
    var result = base;
    while (exponent > 1) {
        result *= base;
        exponent--;
    }
    return result;
}

//unit test
var base = 3;
var exponent = 2;
console.log(base + ' to power ' + exponent + ' = ' + Math.pow(base,exponent) + ', my function returns ' + myPow(base, exponent));

var base = 5;
var exponent = 3;
console.log(base + ' to power ' + exponent + ' = ' + Math.pow(base,exponent) + ', my function returns ' + myPow(base, exponent));

var base = 3;
var exponent = 1;
console.log(base + ' to power ' + exponent + ' = ' + Math.pow(base,exponent) + ',  my function returns ' + myPow(base, exponent));