'use strict'

var arr1 = [35, 17, 45, 13, 25, 12, 50, 41, 5, 17, 21, 7, 36, 35, 31, 13, 22, 28, 28, 26];
sortNums(arr1);
bubbleSort(arr1);
// arr1 = [35, 17, 45, 13, 25, 12, 50, 41, 5, 17, 21, 7, 36, 35, 31, 13, 22, 28, 28, -3];
// sortNums(arr1);
// bubbleSort(arr1);
// arr1 = [2, 2];
// sortNums(arr1);
// bubbleSort(arr1);
// arr1 = [1, 2];
// sortNums(arr1);
// bubbleSort(arr1);
// arr1 = [2, 1];
// sortNums(arr1);
// bubbleSort(arr1);
// arr1 = [5];
// sortNums(arr1);
// bubbleSort(arr1);
// arr1 = [4, 4, 4, 4, 4, 4, 4, 3];
// sortNums(arr1);
// bubbleSort(arr1);

/*
49. Implement the function sortNums(nums) this function returns a sorted array (without changing the given array).
It works by looping through the array, finding the minimum, splicing it out, and adding it to the new array.
*/

function sortNums(nums) {

    console.log('original array = ', nums);

    var copyOfNums = nums.slice();
    var sorted = [];

    for (var i = 0; i < nums.length; i++) {
        var min = Infinity; //or min = CopyOfNums[0];
        var indexMin = -1; //or indexMin = 0;

        //for each item in CopyOfNums
        for (var j = 0; j < copyOfNums.length; j++) {
            if (copyOfNums[j] < min) {
                min = copyOfNums[j];
                indexMin = j;

                /*
                //instead can do this
                if (CopyOfNums[j] < CopyOfNums[indexMin]) indexMin = j;
                    
                */
            }
        }
        sorted.push(min);
        copyOfNums.splice(indexMin, 1);
    }

    console.log(sorted);
    return sorted;
}

function swapWithNext(arr, index) {
    var temp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = temp;
}

function bubbleSort(arr) {
    var isSwapped = true;

    while (isSwapped) {
        isSwapped = false;
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                isSwapped = true;
                swapWithNext(arr, j);
            }
        }
    }
    console.log(arr);
    return arr;
}