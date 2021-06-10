'use strict'

const MAX_FONT_SIZE = 48;

var gImages = [
    {id: 1, url: 'img/memes/1.jpg', keywords: ['qwer']},
    {id: 2, url: 'img/memes/2.jpg', keywords: ['asdf']},
    {id: 3, url: 'img/memes/3.jpg', keywords: ['zxcv']},
    {id: 4, url: 'img/memes/4.jpg', keywords: ['poiu', '1234']},
    {id: 5, url: 'img/memes/5.jpg', keywords: []},
    {id: 6, url: 'img/memes/6.jpg', keywords: []},
    {id: 7, url: 'img/memes/7.jpg', keywords: []},
    {id: 8, url: 'img/memes/8.jpg', keywords: []},
    {id: 9, url: 'img/memes/9.jpg', keywords: []},
    {id: 10, url: 'img/memes/10.jpg', keywords: []},
    {id: 11, url: 'img/memes/11.jpg', keywords: []},
    {id: 12, url: 'img/memes/12.jpg', keywords: []},
    {id: 13, url: 'img/memes/13.jpg', keywords: []},
    {id: 14, url: 'img/memes/14.jpg', keywords: []},
    {id: 15, url: 'img/memes/15.jpg', keywords: []},
    {id: 16, url: 'img/memes/16.jpg', keywords: []},
    {id: 17, url: 'img/memes/17.jpg', keywords: ['1234']},
    {id: 18, url: 'img/memes/18.jpg', keywords: ['1234']}
]
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
    gSearch = text;
    console.log('gSearch', gSearch);
}

/**********for controller************ */
function renderKws() {
    var strHTML = '';
    var kws = prepareCommonKws();
    kws.forEach(function(kw){
        var fontSize = getFontSize(kw);
        strHTML += `<div style="font-size:${fontSize}px;">${kw} </div>`;
    })

    strHTML += `<p class="more" onclick="onShowAllKws">more...</p>`
    document.querySelector('.kws').innerHTML = strHTML;
}

 