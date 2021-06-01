
var num = prompt('please enter a number');
var prev; 

while(num != 999) {
    if (num % 3 === 0) {
        alert('divisible by 3');
    } else {
        alert('not divisible by 3');
    }

    prev = num;
    num = prompt('please enter a number');
    if(num > prev + 10) {
        alert('this number is much bigger than the previous');
    }
}