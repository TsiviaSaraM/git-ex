'use strict'
function isDigitOrCharCode(code) {
    if ((code >= 58 && code <= 64) || (code >= 91 && code <= 96)) {
        return false;
    }

    return true;
}

//cn use random index of string containing all numbers and letters
function generatePassword(length) {
    var password = '';
    var randomCharCode;

    for (var i = 0; i < length; i++) {
        randomCharCode = Math.floor(Math.random() * (122 - 48) + 48 + 1);

        //if the char is not a number of char then generate another random char
        while(!isDigitOrCharCode(randomCharCode)) {
            randomCharCode = Math.floor(Math.random() * (122 - 48) + 48 + 1);
        }
  
        password += String.fromCharCode(randomCharCode);

    }

    console.log('password: ' + password);
    return password;
}

generatePassword(5);
generatePassword(5);
generatePassword(5);