'use strict'
const DEFAULT_EMPTY_LINE = {
    text: '',
    size: 20, 
    font: 'ariel',
    align: 'center', 
    color: 'white' ,
    stroke: 'black',
    posX: 200,
    posY: 200,
}

var gKeywords = {'happy': 12,'funny puk': 1} 

var gImgs = [{id: 1, url: 'img/popo.jpg', keywords: ['happy']}]; 

var gMeme ;


/*********DRAG LINE*************** */
var gIsDrag = false;

//SEPARATE FILE
function createMeme(id){
    gMeme = {
        selectedImgId: id, 
        selectedLineIdx: 0, 
        lines: [ { 
        text: 'I', 
        size: 20, 
        align: 'center', 
        color: 'white' ,
        stroke: 'black',
        posX: 150,
        posY: 10,
        }] 
    }
}

function setCurrImg(){

}

function isLineClicked(clkPos){
    console.log('checking if clicked');
    return gMeme.lines.some(function(line){
        var canvasText = gCtx.measureText(line.txt)
        var txtWidth = canvasText.width;
        var txtHeight = canvasText.fontBoundingBoxAscent + canvasText.fontBoundingBoxDescent;
        console.log('clicked pos:', clkPos.x, clkPos.y);
        console.log('gLine pos beg:', line.posX, line.posY,);
        console.log('gLine pos end:', line.posX + txtWidth);
        // console.log('txtWidth', txtWidth);

        // console.log('clicked pos:', clkPos.x, clkPos.y);
        // console.log('testing',line.posX, line.posY, txtWidth, txtHeight, clkPos.x > line.posX && clkPos.x < (line.posX + txtWidth) && clkPos.y > line.posY && clkPos.y < (line.posY + txtHeight));
        return clkPos.x > line.posX && clkPos.x < (line.posX + txtWidth) 
            //&& clkPos.y > line.posY && clkPos.y < (line.posY + txtHeight);
    })
    
}


function setLineDrag(val){
    gIsDrag = val;
}

function moveLine(pos) {
    console.log('moving the line by', pos.x, pos.y);
    var line = gMeme.lines[gMeme.selectedLineIdx];
    line.posX = pos.x;
    line.posY = pos.y;
}

/*************EDITING A SPECIFIC MEME************ */

function addLine(){
    gMeme.selectedLineIdx = gMeme.lines.length;
    gMeme.lines.push(DEFAULT_EMPTY_LINE);
    var line = getCurrLine();
    if (gMeme.lines.length === 1) line.posY = 10;
    else if (gMeme.lines.length === 2) line.posY = 140;
    else line.posY = 75;
    console.log('line length', gMeme.lines.length );
    console.log('...line added at x: y', line.posX, line.posY);
}

function editText(newTxt){
    var line = gMeme.lines[gMeme.selectedLineIdx];
    line.text = newTxt;
}

function editSize(direction){

}

function removeText() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
}

/**********GETTERS************* */
// function getLinePos(){
//     var line = gMeme.lines[gMeme.selectedLineIdx];
//     return {x: line.posX, y: line.posY};

// }

function getCurrLine() {
    return gMeme.lines[gMeme.selectedLineIdx];
}