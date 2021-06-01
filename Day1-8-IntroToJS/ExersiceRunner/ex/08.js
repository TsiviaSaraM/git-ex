var min = +prompt('please enter a Number');
var num2 = +prompt('please enter a Number');
var num3 = +prompt('please enter a Number');

if (num2 < min) {
    min = num2;
}

if (num3 < min) {
    min = num3;
}

console.log(min);