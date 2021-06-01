function basicOperations() {
    var stringNum = prompt('please enter number');
    var length = num.length;
    var intNum = parseInt(num);

    var sum = 0;
    var mult = 1;
    var sumFirstLast = intNum % 10;
    var reversed = 0;
    var symmetricMsg = 'this number is symmetric';
    var firstLastSwapped;
    var currPowerTen = 1;

    //print each digit
    while (length > 0) {
        var currDigit = (intNum / currPowerTen) % 10;
        console.log(currDigit);
        sum += currDigit;
        sum *= currDigit;
        reversed = reversed * 10 + currDigit;
        length--;
        currPowerTen *= 10;
    }

    //swap first and last digits
    var leftDigit = intNum / currPowerTen;
    var rightDigit = intNum % 10;
    firstLastSwapped = intNum - leftDigit * currPowerTen + rightDigit * currPowerTen - rightDigit + leftDigit;



    //get first and last digits swapped

    console.log('sum = ' + sum);
    console.log('mult = ' + mult);
    console.log('sum of first and last digits = ' + sumFirstLast);
    console.log('first and lst digit swapped ' + firstLastSwapped);
    
    if (parseInt(stringNum) === reversed)console.log('this number is symmetric');
    else console.log('this number is not symmetric');

    console.log('reversed ' + reversed);
}

function isArmstrong(n) {
    var copyN = n;
    var currDigit;
    var sumCubes = 0;
    
    while (copyN > 0) {
        currDigit = copyN % 10;
        sumCubes += currDigit * currDigit * currDigit;
        copyN = Math.floor(copyN / 10);
    }

    return sumCubes === n ? true : false;
}

function isPerfect(n) {
    var sum = 1; //because 1 is always a divisor
    var tester = 2;

    while (tester * tester < n) {
        if (n % tester === 0) { //if tester is a divisor of n
            sum += tester;
            sum += n/tester;
            ++tester;
        }

        if (sum > n) {
            return false;
        }

        ++ tester;
    }

    //if this number is a square then add the root
    if (tester * tester === n) sum += tester;

    return sum === n ? true : false;
}

function printPerfectAndArmstrong() {
    var max = prompt('Please enter a number');
    var count = 0;

    console.log('the Armstrong numbers are : ');
    while (count < max) {
        if (isArmstrong(count)) console.log(count + ', ');
        count++;   
    }

    count = 0;
    console.log('the Perfect numbers are : ');
    while(count < max) {
        if (isPerfect(count)) console.log(count);
        count++;
    }
   
}

/*
console.log('isArmstrong(153) = ' + isArmstrong(153));
console.log('isArmstrong(7) = ' + isArmstrong(7));
console.log('isArmstrong(0) = ' + isArmstrong(0));
console.log('isArmstrong(1) = ' + isArmstrong(1));

console.log('isPerfect(153) = ' + isPerfect(28));
console.log('isPerfect(7) = ' + isPerfect(7));
console.log('isPerfect(6) = ' + isPerfect(6));
console.log('isPerfect(1) = ' + isPerfect(1));
*/
printPerfectAndArmstrong();