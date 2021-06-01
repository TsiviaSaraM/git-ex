var i;
var num;
for (i = 0; i < 10; ++i) {
	num = +prompt('Please enter a number');
  num % 2 == 0 ? console.log(num) : console.log('This number is odd');
  
}