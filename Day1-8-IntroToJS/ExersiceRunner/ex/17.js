function getBigger(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    return num2;
}

console.log('testing:\n getBigger(3, 4) returns ' + getBigger(3, 4), '\n getBigger(9, 4) returns ' + getBigger(9, 4));