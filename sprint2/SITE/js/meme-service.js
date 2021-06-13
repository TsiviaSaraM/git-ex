'use strict'
const DEFAULT_EMPTY_LINE = {
    text: '',
    size: 20, 
    font: 'font',
    align: 'left', 
    color: 'white' ,
    stroke: 'black',
    posX: 200,
    posY: 200,
}

// var gImgs = [{id: 1, url: 'img/popo.jpg', keywords: ['happy']}]; 

var gMeme ;


/*********DRAG LINE*************** */
var gIsDrag = false;

//SEPARATE FILE
function createMeme(id){
    gMeme = {
        selectedImgId: id, 
        selectedLineIdx: 0, 
        lines: [],
        // lines: [ { 
        // text: 'I am here', 
        // size: 30, 
        // align: 'left', 
        // color: 'hotpink' ,
        // stroke: 'black',
        // posX: 150,
        // posY: 10,
        // }, { 
        //     text: 'I am there', 
        //     size: 20, 
        //     align: 'left', 
        //     color: 'pink' ,
        //     stroke: 'black',
        //     posX: 150,
        //     posY: 150,
        //     }] 
    }
}

function setCurrImg(){

}




function setLineDrag(val){
    gIsDrag = val;
}

function setCurrLine(selectedLineIdx){
    gMeme.selectedLineIdx = selectedLineIdx;
}

// function moveLine(pos) {
//     console.log('moving the line to', pos.x, pos.y);
//     var line = gMeme.lines[gMeme.selectedLineIdx];
//     line.posX = pos.x;
//     line.posY = pos.y;
// }

function moveLine(dx, dy) {
    var currLine = getCurrLine();
    currLine.posX += dx
    currLine.posY += dy
}

/*************EDITING A SPECIFIC MEME************ */

function addLine(){
    gMeme.selectedLineIdx = gMeme.lines.length;
    gMeme.lines.push(Object.assign({}, DEFAULT_EMPTY_LINE));
    var line = getCurrLine();
    if (gMeme.lines.length === 1) line.posY = 50;
    else if (gMeme.lines.length === 2) line.posY = gElCanvas.height;
    else line.posY = gElCanvas.height  / 2;
    console.log('new curr line', gMeme.selectedLineIdx );
    console.log('...line added at x: y', line.posX, line.posY);
}

function editText(newTxt){
    var line = gMeme.lines[gMeme.selectedLineIdx];
    line.text = newTxt;
}

function switchLine() {
    gMeme.selectedLineIdx += 1;
    if (gMeme.selectedLineIdx >= gMeme.lines.length) gMeme.selectedLineIdx = 0;
}

function editSize(direction){
    var line = getCurrLine();
    line.size += direction * 5;
    console.log('...new line size', line);
}

function removeText() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
    gMeme.selectedLineIdx = -1;
}

function editFill(color){
    var line = getCurrLine();
    line.color = color;
    console.log('new color', line.color);
}

function editStroke(color){
    var line = getCurrLine();
    line.stroke = color;
    console.log('new color', line.stroke);
}

/**********GETTERS************* */
// function getLinePos(){
//     var line = gMeme.lines[gMeme.selectedLineIdx];
//     return {x: line.posX, y: line.posY};

// }

function getCurrLine() {
    return gMeme.lines[gMeme.selectedLineIdx];
}