'use strict'

//unit testing
var str = 'aeiouAEIOU';
console.log('printVowelsCount(' + str + ') returns' + printVowelsCount(str));
console.log('switchCase(' + str + ') returns' + switchCase(str));
console.log('doubleVowels(' + str + ') returns' + doubleVowels(str));

var str = 'TelAvivBeach';
console.log('printVowelsCount(' + str + ') returns' + printVowelsCount(str));
console.log('switchCase(' + str + ') returns' + switchCase(str));
console.log('doubleVowels(' + str + ') returns' + doubleVowels(str));

function printVowelsCount(str) {
    var countA = 0;
    var countE = 0;
    var countI = 0;
    var countO = 0;
    var countU = 0;

    for (var i = 0; i < str.length; i++) {


        //cn switch all to lower case first
        switch (str.charAt(i)) {
            case 'a':
            case 'A':
                countA++;
                break;
            case 'e':
            case 'E':
                countE++
                break;
            case 'i':
            case 'I':
                countI++;
                break;
            case 'o':
            case 'O':
                countO++
                break;
            case 'u':
            case 'U':
                countU++;
                break;
        }

    }
    console.log('a appears ' + countA + ' times');
    console.log('e appears ' + countE + ' times');
    console.log('i appears ' + countI + ' times');
    console.log('o appears ' + countO + ' times');
    console.log('u appears ' + countU + ' times');

}

function isVowel(char) {
    var vowels = 'aeiouAEIOU';
    return (vowels.includes(char)) ? true : false;
}

//gets a string and changes the vowels to lowercase letters, and the rest to uppercase letters
function switchCase(str) {

    //cn convert everything to lower first
    var result = '';
    for (var i = 0; i < str.length; i++) {
        var currChar = str.charAt(i);
        if (isVowel(currChar)) result += currChar.toLowerCase();
        else result += currChar.toUpperCase();
    }

    return result;
}

//gets a string and doubles all the vowels in it
function doubleVowels(str) {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        var currChar = str.charAt(i);
        if (isVowel(currChar)) result += (currChar + currChar);
        else result += currChar;
    }
    return result;
}



