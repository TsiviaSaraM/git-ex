function myAbs(num) {
    return num < 0 ? -1 * num : num;
}

var num = 22;
var expected = 22;
console.log('myAbs(' + num +  ') returns '+  myAbs(num) +', expected ' + expected);

var num = -22;
var expected = 22;
console.log('myAbs(' + num +  ') returns '+  myAbs(num) +', expected ' + expected);

var num = 0;
var expected = 0;
console.log('myAbs(' + num +  ') returns '+  myAbs(num) +', expected ' + expected);