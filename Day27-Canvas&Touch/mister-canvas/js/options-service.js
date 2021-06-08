'use strict'

var gOptions = {
    color: 'random',
    bgColor: 'random',
    shape: 'rectangle',
    pattern: 'none'
}

function changeColor(newColor){
    gOptions.color = newColor;
    console.log('new color...');

}

function changeBgColor(newColor){
    gOptions.bgColor = newColor;
    console.log('new bg color...');
}

function changeShape(newShape) {
    gOptions.shape = newShape;
    console.log('new shape...');
}

function changePattern(newPattern) {
    gOptions.pattern = newPattern;

}


function backgroundPattern() {
    console.log('bg image...');
    var img = new Image();
    img.src = 'img/moroccan-flower.png';
    // img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
    img.onload = function() {
    var pattern = gCtx.createPattern(img, 'repeat');
    gCtx.fillStyle = pattern;
    gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height);
    };
}

