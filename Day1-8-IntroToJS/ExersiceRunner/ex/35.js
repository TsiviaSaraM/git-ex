'use strict'

function encrypt(str) {
    var result = '';

    for (var i = 0; i < str.length; i++) {
        result += String.fromCharCode(str.charCodeAt(i) + 5);//cn move str.charCodeAt(i) to separate variable
    }

    console.log(result);
    return result;
}

function decrypt(str) {
    var result = '';

    for (var i = 0; i < str.length; i++) {
        result += String.fromCharCode(str.charCodeAt(i) - 5);
    }

    console.log(result);
    return result;
}

//action should be 'encrypt' for the encrypt function and 'decrypt' for the decrypt function
function encode(str, action) {
    if (action === 'encrypt') return encrypt(str);
    if (action === 'decrypt') return decrypt(str);

    alert('this is not a valid action');
    return '';
}

encrypt('abcd');
decrypt('wxyz');
encode('abce', 'encrypt');