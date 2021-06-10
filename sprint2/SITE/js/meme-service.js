'use strict'
const DEFAULT_EMPTY_LINE = {
    text: '',
    size: 20, 
    font: 'ariel',
    align: 'left', 
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
        align: 'left', 
        color: 'white' ,
        stroke: 'black',
        posX: 150,
        posY: 10,
        // }, { 
        //     text: 'I', 
        //     size: 20, 
        //     align: 'center', 
        //     color: 'white' ,
        //     stroke: 'black',
        //     posX: 150,
        //     posY: 150,
            }] 
    }
}

function setCurrImg(){

}


//txtWidth txtHeight is accurate, clkPos is accurate
function getClickedLine(clkPos){
    console.log('checking if clicked');
    return gMeme.lines.findIndex(function(line){
        var canvasText = gCtx.measureText(line.txt)
        var txtWidth = canvasText.width;
        var txtHeight = canvasText.fontBoundingBoxAscent + canvasText.fontBoundingBoxDescent;
        // console.log('clicked pos:', clkPos.x);
        // console.log('gLine pos beg:', line.posX);
        // console.log('gLine pos end:', line.posX + txtWidth);
        // console.log('txtHeight', txtHeight);

        console.log('clicked pos:', clkPos.x, clkPos.y);
        var xBegin = line.posX;
        var xEnd = line.posX + txtWidth;
        var yBegin = -canvasText.fontBoundingBoxDescent + line.posY;
        var yEnd = line.posY + canvasText.fontBoundingBoxAscent;
        console.log('testing x,y:',xBegin,xEnd,'**',yBegin,  yEnd, xBegin <= clkPos.x && clkPos.x <= xEnd && yBegin <= clkPos.y && clkPos.y <= yEnd);
        // return clkPos.x > line.posX && clkPos.x < (line.posX + txtWidth) 
        //     && clkPos.y > line.posY && clkPos.y < (line.posY + txtHeight);

        return xBegin <= clkPos.x && clkPos.x <= xEnd && yBegin <= clkPos.y && clkPos.y <= yEnd;
    })
    
}


function setLineDrag(val){
    gIsDrag = val;
}

function setCurrLine(currLineIdx){
    gMeme.selectedLineIdx = currLineIdx;
}

// function moveLine(pos) {
//     console.log('moving the line to', pos.x, pos.y);
//     var line = gMeme.lines[gMeme.selectedLineIdx];
//     line.posX = pos.x;
//     line.posY = pos.y;
// }

function moveLine(dx, dy) {
    var currLine = getCurrLine();
    console.log('currLine.posX:', currLine.posX)
    console.log('currLine.posY:', currLine.posY)
    console.log('dy:', dy)
    console.log('dx:', dx)
    currLine.posX += dx
    currLine.posY += dy
    console.log('currLine.posX:', currLine.posX)
    console.log('currLine.posY:', currLine.posY)

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
    var line = getCurrLine();
    line.size += direction;
    console.log('...new line size', line.size);
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