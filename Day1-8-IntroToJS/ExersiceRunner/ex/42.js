'use strict'
console.log('expect [sa, s1]');
var arr1 = ['sa', 'bb', 's1', '123'];
startsWithS(arr1, 'b');
console.log(startsWithS(['sa', 'bb', 's1', '123'], 's'));

console.log('expect [bb]\n');
console.log(startsWithS(['sa', 'bb', 's1', '123'], 'b'));


/* Write a function named startsWithS that gets an array of 
names and returns an array of the names that start with S.
Step2: Refactor your function to work on any letter by adding 
a letter parameter, you might need to rename the function so it
 will suit it’s new functionality.
*/

function startsWithS(names, letter) {
    var results = [];
    letter = letter.toLowerCase();
    for (var i = 0; i < names.length; i++) {
        var currName = names[i];
        if (currName.charAt(0).toLowerCase() === letter) results.push(currName);
    }

    return results;
}
