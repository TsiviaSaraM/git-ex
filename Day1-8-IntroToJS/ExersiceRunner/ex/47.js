'use strict'

mySplit('2,456,789', ',');

/*
Implement your own version of the split function: mySplit(str, sep) Test it with different types of strings and separators. 
I.e ‘Japan,Russia,Sweden'
You can assume that the separator (delimiter) is a single character. (BONUS: don’t assume that)
*/

function mySplit(str, sep) {
    
    console.log('string to split: ' + str);
    var separated = [];
    while (str.indexOf(sep) !== -1) {
        var indexNextSep = str.indexOf(sep);
        var nextWord = str.substring(0,indexNextSep);
        separated.push(nextWord);    
        str = str.substring(indexNextSep + 1);
    }

    separated.push(str);

    console.log(separated); 
    return separated;
}