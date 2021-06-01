'use strict'
var nums = [1, 2, 2, 1, 4, 4, 5, 4];
console.log('expect [1, 2, 4, 5]');
console.log(removeDuplicates(nums));

nums = [1, 1, 1];
console.log('expect [1]');
console.log(removeDuplicates(nums));

nums = [1];
console.log('expect [1]');
console.log(removeDuplicates(nums));

/*
Write the function removeDuplicates(nums). The array nums should contain numbers in the range of 0-10 
the function returns a new array in which each value appears only once (e.g. in this case: 5, 4, 7, 1, 9)
*/

function removeDuplicates(nums) {
    // var digits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var results = [];

    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        // if (digits[num] === 0) {
        //     digits[num] = 1;
        //     results.push(num);
        // }
        if (!results.includes(num)) results.push(num);
    }

    return results;
}