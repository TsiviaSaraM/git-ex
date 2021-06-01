'use strict'

function reverse() {
    var str = prompt('Please enter a string');
    var reversed = '';

    for (var i = str.length - 1; i >= 0; i--) {
        //console.log(str.charAt(i));
        reversed += str.charAt(i);
    }
    console.log(reversed);
}

reverse();