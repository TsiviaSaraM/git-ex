'use strict'
var input;
var expected;
var actual;

// expected = 6;
// actual = multBY(2)(3);
// console.log('actual=', actual, ', expected=', expected);

// expected = 24;
// actual = mul(2)(3)(4);
// console.log('actual=', actual, ', expected=', expected);

// timeout();

function countClicks() {
    var counter = 0;
    document.querySelector('button').onclick = 
        (function() { counter++; console.log(counter);})

    console.log(counter);
}

function multBY(x) {
    return (function(y){
        console.log(x*y);
        return x * y;
    })
}

function timeout(){
    for (var i = 0; i < 5; i++) {
        setTimeout(function(x) {console.log(x); }, i * 1000, i );
    }
}

function mul(x) {
    
    return (function(y){
        return (function(z){
            console.log(x*y*z); 
            return x * y * z;
        });
    });
}