'use strict'

const MAX_FONT_SIZE = 35;


var gKeywords = {'1234': 4, 'qwer': 3, 'asdf': 5, 'zxcv': 1, 'poiu': 4}
var gMaxCount = 5;
var gSearch = '';

console.log(getFontSize('zxcv'))



function addCount(kw) {
    if (!gKeywords[kw]) gKeywords[kw] = 0;
    else gKeywords[kw]++;
}

function prepareCommonKws(){
    var kwArr = Object.keys(gKeywords);
    kwArr.sort(function(kw1, kw2){
        return gKeywords[kw2] - gKeywords[kw1];
    });
    return kwArr.slice(0, 4);

}

function prepareAllKws() {
    return Object.keys(gKeywords);
}

function getFontSize(kw){
    return Math.floor(MAX_FONT_SIZE * gKeywords[kw] / gMaxCount);
}

function updateSearch(text) {
    // debugger;
    gSearch = text;
    if (gKeywords.hasOwnProperty(text)) addCount(text);
    console.log('gSearch', gSearch);
}

/**********for controller************ */
