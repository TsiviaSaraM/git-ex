'use strict'
var arr1 = [2, 43];
var arr2 = [1, 1];
console.log('sum of ', arr1, ' and ', arr2, ' is ', sumArrays(arr1, arr2));

var arr1 = [2, 43, 5, 6];
var arr2 = [1, 1, 7];
console.log('sum of ', arr1, ' and ', arr2, ' is ', sumArrays(arr1, arr2));

/*Write the function sumArrays that gets 2 arrays and returns the sum of the 
two arrays. I.e: [1, 4, 3] [2, 5, 1, 9] => [3, 9, 4, 9]*/

function sumArrays(nums1, nums2) {

    //set arr1 to the shorter array
    if (nums1.length > nums2.length) {
        var temp = nums1.slice();
        nums1 = nums2.slice();
        nums2 = temp;
    }

    var length1 = nums1.length;
    var length2 = nums2.length;

    var result = [];
    var i = 0;

    //get sum if items from each array
    for (i = 0; i < length1; i++) {
        result.push(nums1[i] + nums2[i]);
    }

    //copy the remaining items from arr2
    while (i < length2) {
        result.push(nums2[i]);
        i++;
    }

    return result;  
}