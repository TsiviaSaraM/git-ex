'use strict'

var nums = [4, 3, 2, 5, 6, 7, 8, 1, 9];
console.log('getNthLargest(', nums, ') 1st 3rd and 9th largest returns:');
console.log(getNthLargest(nums, 1));
console.log(getNthLargest(nums, 3));
console.log(getNthLargest(nums, 9));

nums = [3];
console.log('getNthLargest(', nums, '1) returns:');
console.log(getNthLargest(nums, 1));

nums = [4, 3, 3, 3, 3, 3, 3, 3, 5]
console.log('getNthLargest(', nums, ') 1st 3rd and 9th largest returns:');
console.log(getNthLargest(nums, 1));
console.log(getNthLargest(nums, 2));
console.log(getNthLargest(nums, 9));

/*
+UnitTesting Write the function getNthLargest(nums, nthNum) to get the nth largest element from an 
array of unique numbers. I.e: getNthLargest ([ 7, 56, 23, 88, 92, 99, 89, 11], 3) Result: 89
a. It will be easier if the array is sorted first.
b. BONUS: Try writing the algorithm without sorting the array.
*/

function getNthLargest(nums, nthNum) {
    
    var largestNums = [];
    var lenNums = nums.length;

    //fill lartestNums with -Infinity
    for (var i = 0; i < nthNum; i++) {
        largestNums.push(-Infinity);
    }

    //iterate through nums and check if each num in nums is 1 of the nth largest
    for (var i = 0; i < lenNums; i++) {
        var currNum = nums[i];
        var j = 0;
       // console.log('currNum:', currNum);
        //console.log('largestNums[j]:', largestNums[j]);
        
        //if currNum is 1 of the nth largest so far, find its place in the largestNums array
        if (currNum > largestNums[0]) {

            while (currNum > largestNums[j] && j < nthNum) {
                j++;
            } 
            //console.log('bafore splice:', largestNums);
            largestNums.splice(j,0,currNum);
           // console.log('after splice:', largestNums);
            largestNums.shift();
           // console.log('after shift:', largestNums);
            //console.log('largestNums', largestNums);
        }

    }

    return largestNums[0];
}

function getNthLargestWithSort(nums, nthNum) {
    
    nums.sort();
    return nums[nums.length - nthNum];
}