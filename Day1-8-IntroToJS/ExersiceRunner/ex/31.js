'use strict'

ex31();

function ex31() {
    var str = prompt('Please enter string');
    console.log('length = ' + str.length);
    console.log('first and last letters are' + str.charAt(0) + ' ' + str.CharAt(str.length - 1));
    console.log(str.toUpperCase());
    console.log(str.toLowerCase());

}
