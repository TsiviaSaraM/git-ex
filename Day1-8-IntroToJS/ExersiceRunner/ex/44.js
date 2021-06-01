'use strict'

printNumsCount([1, 2, 3, 2, 1]);

/*Write the function printNumsCount(nums). The array nums will contain integers in the range of 0-3 
The function prints how many times each of these numbers appears in the array.
*/

function printNumsCount(nums) {
    var counts = [0,0,0,0];

    //fill the array counts
    for (var i = 0; i < nums.length; i++) {
        var idx = nums[i];
        counts[idx]++;
    }

    //print the result
    for (var i = 0; i < counts.length; i++) console.log('the count of ', i, ' is ', counts[i]);
    
}

