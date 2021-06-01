'use strict'
multBy([1, 2, 3, 4], 2, true);
multBy([1, 2, 3, 4], 2, false);
multBy([1, 2, 3, 4], 0, false);


/*Write the function: multBy(nums, multiplier) that returns a modified array in which each item in the array 
is multiplied by a multiplier.
Step2: Add another param: isImmutable. It will be a variable that when it’s value is set to true, use 
array.slice() to work on a new array. Leave the original array as it was.*/


function multBy(nums, multiplier, isImmutable) {

    console.log(nums, ' multiplied by ', multiplier);

    var numsCopy = isImmutable ? nums.slice() : nums;

    for (var i = 0; i < numsCopy.length; i++) {
        numsCopy[i] *= multiplier;
    };

    console.log(numsCopy);
    return numsCopy;

}