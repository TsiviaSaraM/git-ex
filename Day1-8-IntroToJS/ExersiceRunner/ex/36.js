'use strict'

function getLongestShortest(names) {
    var pointer = 0;
    var maxLen = 0;
    var minLen = names.length;
    var longest = '';
    var shortest = names;

    
   while (pointer <= names.length) {

    //for (var i = 0; i < 5; i++) {
   console.log('BEGIN here: substring: ' + names.substring(pointer)+ ' ');

    console.log('index of comma: ', names.indexOf(',', pointer));
        var currLen = names.indexOf(',', pointer);
        console.log('length of current word: ',currLen);
        
        if (currLen < minLen) {
            minLen = currLen;
            shortest = names.substring(pointer, pointer + currLen);
            console.log('shortest is ' + shortest);
        } else if (currLen > maxLen) {
            maxLen = currLen;
            longest = names.substring(pointer, pointer + currLen + 1);
        }
        
        pointer += (currLen + 1);
        console.log('currLen', currLen);
        console.log('pointer', pointer);
        
    }
    
    console.log('the longest name is ' + longest);
    console.log('the shortest name is ' + name);
}

console.log('here');
getLongestShortest('igal,moshe,haim')