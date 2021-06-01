var average;
var num = +prompt('Please enter a number');
var sum = num;
var max = num;
var min = num;

for (i = 0; i < 9; ++i) {
	num = +prompt('Please enter a number');
  sum += num;
  if (num > max) {
  	max = num
  } else if (num < min) {
  	min = num;
  }
  
}

console.log('the max number is ', max);
console.log('the min number is ', min);
console.log('the average is ', sum / 10);