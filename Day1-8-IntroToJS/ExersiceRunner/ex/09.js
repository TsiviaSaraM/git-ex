var num1 = +prompt('please enter a positive number');
var num2 = +prompt('please enter a positive number');

if(!isNaN(num1) && !isNaN(num2)) {
    if (num1 >= num2) {
        console.log(num1 - num2);
    } else {
        console.log(num2 - num1);
    }
}

