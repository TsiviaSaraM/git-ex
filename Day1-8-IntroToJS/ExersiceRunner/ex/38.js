'use strict'

var nums = [66, 75, 89, 61, 121, 108, 97, 114, 51, 106, 134, 83, 106, 143, 112, 149, 119, 82, 130, 138];
console.log('original array is ' + nums);
console.log('output array is ' + biggerThan100(nums));
/*
nums = [100, 99, 101];
console.log('original array is ' + nums);
console.log('output array is ' + biggerThan100(nums));
*/

/*
38. Write a function named biggerThan100. It gets an array of numbers and returns an array 
of only the numbers that are bigger than 100.
*/

function biggerThan100(nums) {
    

    var result = [];

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 100) result.push(nums[i]);
    } 

    return result;
}