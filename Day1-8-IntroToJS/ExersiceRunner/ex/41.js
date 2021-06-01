'use strict'

sayNum(1278);
sayNum(3);
sayNum(777);


/*Write a function named sayNum(num) that prints each digit in words. I.e: 123 => 
One Two Three. 7294 => Seven Two Nine Four. TIP: You may use Switch inside a loop 
OR an array named digitNames. (Or what the heck, try them both.)*/
function sayNum(num) {
    var digitNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    var numArray = [];

    console.log('printing ', num);

    //copy digits to an array
    while(num > 0) {
        numArray.unshift(num % 10);
        num = Math.floor(num / 10);
    }
    
    //console.log(numArray);
    //print the array
    for (var i = 0; i < numArray.length; i++) {
        var digit = numArray[i];
        console.log(digitNames[digit]);
    }
    
}
