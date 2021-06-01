function getAsterisks(num) {
    var result = '';
    while (num > 0) {
        result = result + '*';
        num--;
    }
    return result;
}

function getTriangle(num) {
    var length = 1;
    var result = '';

    while (length <= num) {
        result += getAsterisks(length) + '\n';
        ++length;
    }

    --num;
    while(num > 0) {
        result += getAsterisks(num) + '\n';
        --num;
    }
    return result;
}

function getMusicEqualizer(rows) {
    var result = '';
    while (rows > 0) {
        result += getAsterisks(Math.floor(Math.random() * 10 + 1)) + '\n';
        --rows;
    }
    return result;
}

function getBlock(rowsCount, colsCount) {
    var result = '';
    while (rowsCount > 0) {
        result += getAsterisks(colsCount) + '\n';
        rowsCount--;
    }
    return result;
}


function addSpaces(length, string) {
    var result = '';
    while (length < 0)
    {
        result += ' ';
    }
    return result;
}

function getOutline(rowsCount, colsCount) {
    
    var counter = 2;
    var space = '';
    while(colsCount < colsCount) {
        space += ' ';
    }

    var result = getAsterisks(colsCount) + '\n';
    rowsCount--;
    while (rowsCount > 1) {

        result = result + '*' + space + '*\n';
        rowsCount--;
    }
    result += getAsterisks(colsCount);
    return result;
}


console.log('getAsterisks(0) should return  , returned, ' + getAsterisks(0));
console.log('getAsterisks(3) should return *** , returned, ' + getAsterisks(3));
console.log('getAsterisks(4) should return  ****, returned, ' + getAsterisks(4));

console.log('getTriangle(0) \n' + getTriangle(0));
console.log('getTriangle(1) \n' + getTriangle(1));
console.log('getTriangle(2) \n' + getTriangle(2));
console.log('getTriangle(3) \n' + getTriangle(3));
console.log('getTriangle(10) \n' + getTriangle(10));

console.log('getMusicEqualizer(1) \n' + getMusicEqualizer(1));
console.log('getMusicEqualizer(3) \n' + getMusicEqualizer(3));
console.log('getMusicEqualizer(3) \n' + getMusicEqualizer(3));
console.log('getMusicEqualizer(3) \n' + getMusicEqualizer(3));

console.log('getBlock(1,2) \n' + getBlock(1,2));
console.log('getBlock(3,4) \n' + getBlock(3,4));
console.log('getBlock(4,3) \n' + getBlock(4,3));

console.log('getOutline(1,2) \n' + getOutline(1,2));
console.log('getOutline(3,4) \n' + getOutline(3,4));
console.log('getOutline(4,3) \n' + getOutline(4,3));

/* ex 27e
create a global variable to hold the charachter (asterisk in our case)
if we want to change the charachter we only need to change the value of the global variable
*/ 