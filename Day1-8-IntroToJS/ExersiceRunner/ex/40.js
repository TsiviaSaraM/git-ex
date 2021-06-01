'use strict'

var charachters = 'abcdefghijklmnopqrstuvwxyz';

getLorumIpsum(0);
getLorumIpsum(1);
getLorumIpsum(2);
getLorumIpsum(3);
getLorumIpsum(10);

function getRandomNumber(lowerBound, UpperBound) {
    return Math.floor(Math.random() * (UpperBound - lowerBound) + lowerBound);
}

function getLorumIpsum(wordsCount) {
    
    var LorumIpsum = '';
    while(wordsCount > 0) {
        LorumIpsum += getWord() + ' ';

        //add space if we are not at the last word
        if (wordsCount > 1) LorumIpsum += ' ';  
        wordsCount--;
    }
    console.log(LorumIpsum);
    return LorumIpsum;

}

function getWord() {
    var length = getRandomNumber(3,6);
    var word = '';

    for (var i = 0; i < length; i++) {
        var charIndex = getRandomNumber(0,26);
        word += charachters[charIndex];
    }

    return word;
} 