var a = +prompt('please enter the 1st variable');
var b = +prompt('please enter the 2nd variable');
var c = +prompt('please enter the 3rd variable');

console.log('-b = ', -1 * b);
console.log('2*a = ', 2 * a);
var discriminant = b * b - 4 * a * c;
console.log('the discriminant = ', discriminant);

console.log('Quadratic equation: ', a, 'x\u00B2 + ', b, 'x + ', c);

if (discriminant >= 0) {
    console.log('the 2 solutions are ', (-1 * b + Math.sqrt(b*b-4*a*c))/(2*a), 'and ', (-1 * b - Math.sqrt(b*b-4*a*c))/(2*a));
}

/*TODO  there are differences for when a,b,c are neg or positive, and the number is not printed if it equals 1*/