'use strict'

//unit testing

str = 'apple';
var searchStr = 'gg';
console.log('myIndexOf(' + str + ', ' + searchStr + ') = ' + myIndexOf(str, searchStr)); 

str = 'bigger and better';
searchStr = 'bigger and better more';
console.log('myIndexOf(' + str + ', ' + searchStr + ') = ' + myIndexOf(str, searchStr)); 

str = 'there were';
searchStr = 'were';
console.log('myIndexOf(' + str + ', ' + searchStr + ') = ' + myIndexOf(str, searchStr)); 

searchStr = 'wer';
console.log('myIndexOf(' + str + ', ' + searchStr + ') = ' + myIndexOf(str, searchStr)); 

str = 'er';
console.log('myIndexOf(' + str + ', ' + searchStr + ') = ' + myIndexOf(str, searchStr)); 

function myIndexOf(str, searchStr) { //cn use substring instead of 2 loops

    //for each char in str
    for (var i = 0; i < str.length; i++) { 
        for (var j = 0; j < searchStr.length; j++) {
            //console.log(searchStr.charAt(j)+' compared with '+str.charAt(i+j));
            if (str.charAt(i + j) !== searchStr.charAt(j)) break;
            if (j === searchStr.length - 1) return i;
        }
        
    }
    return -1;
}
