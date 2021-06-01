function getGCD(a, b) {
    var remainder;


    //make sure a > b, if not then swap a and b
    if (a <= b) {
        var temp = a;
        a = b;
        b = temp;
    }

    while (b > 0) {
        remainder = a % b;
        
        a = b;
        b = remainder;
    }

    return a;
    

}


//unit testing
console.log('getGCD(12,15) = ' + getGCD(12, 15) + ', should be ' + 3);
console.log('getGCD(1,15) = ' + getGCD(1, 15) + ', should be ' + 1);
console.log('getGCD(16,24) = ' + getGCD(16, 24) + ', should be ' + 8);
console.log('getGCD(12,1) = ' + getGCD(12, 1) + ', should be ' + 1);