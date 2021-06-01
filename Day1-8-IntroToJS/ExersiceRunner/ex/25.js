function getRandomInteger(min, max) {
    return Math.floor((Math.random() * (min - max))+ max);
}

console.log('getRandomInteger(1,100) returns ' + getRandomInteger(1,100));
console.log('getRandomInteger(1,100) returns ' + getRandomInteger(1,100));
console.log('getRandomInteger(1,100) returns ' + getRandomInteger(1,100));
console.log('getRandomInteger(-10,-2) returns ' + getRandomInteger(-10,-2));
console.log('getRandomInteger(-10,-2) returns ' + getRandomInteger(-10,-2));
console.log('getRandomInteger(-10,-2) returns ' + getRandomInteger(-10,-2));

//deal with max & min are not intigers - use Math.floor & Math.ceil