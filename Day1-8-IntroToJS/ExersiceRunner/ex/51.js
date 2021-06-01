'use strict'

var txt = 'the apple the apple orange pear and the the and the';
console.log(('txt = ' + txt));
console.log('countWordAppearences(txt) = ', countWordAppearences(txt));

txt = 'apple';
console.log(('txt = ' + txt));
console.log('countWordAppearences(txt) = ', countWordAppearences(txt));

/*returns an object map. This object will have a key that will be the word. The value will be the count 
(how many times this word appeared in the string). example: countWordApperances('puki ben david and muki 
ben david') will return: { puki: 1, ben: 2, david: 2, and: 1, muki: 1 }*/
function countWordAppearences(txt) {
    var words = {};
    txt += ' ';



    while (txt.length > 0) {
        var word = txt.substring(0, txt.indexOf(' '));
        words[word] ? words[word]++ : words[word] = 1;

        //remove the word you just copied
        txt = txt.substring(txt.indexOf(' ') + 1);
    }
    return words;
}

//can use txt.split()