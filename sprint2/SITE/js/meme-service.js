'use strict'
const DEFAULT_EMPTY_LINE = {
    text: '',
    size: 20, 
    align: 'left', 
    color: 'white' ,
    stroke: 'black',
    posX: 100,
    posY: 100,
}

var gKeywords = {'happy': 12,'funny puk': 1} 

var gImgs = [{id: 1, url: 'img/popo.jpg', keywords: ['happy']}]; 

var gMeme = {
    selectedImgId: 5, 
    selectedLineIdx: 0, 
    lines: [ { 
        txt: 'I never eat Falafel', 
        text: '',
        size: 20, 
        align: 'left', 
        color: 'white' ,
        stroke: 'black',
        posX: 10,
        posY: 10,
} ] 

};

var gIsDrag = false;
// var gMemes = [{ 
//     selectedImgId: 1, 
//     selectedLineIdx: 0, 
//     lines: [ { txt: 'I never eat Falafel', size: 20, align: 'left', color: 'red' } ] 
// }];

//SEPARATE FILE
function createMeme(id){
    gMeme = {
        selectedImgId: id, 
        selectedLineIdx: 0, 
        lines: [ { 
            txt: 'I never eat Falafel', 
        text: '',
        size: 20, 
        align: 'left', 
        color: 'white' ,
        stroke: 'black',
        posX: 10,
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
        // debugger;
        console.log('clicked pos:', clkPos.x, clkPos.y);
        console.log('testing',line.posX, line.posY, txtWidth, txtHeight, clkPos.x > line.posX && clkPos.x < (line.posX + txtWidth) && clkPos.y > line.posY && clkPos.y < (line.posY + txtHeight));
        return clkPos.x > line.posX && clkPos.x < (line.posX + txtWidth) &&
                clkPos.y > line.posY && clkPos.y < (line.posY + txtHeight);
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
    // debugger;
    if (gMeme.lines.length === 1) gMeme.lines.posY = 10;
    else if (gMeme.lines.length === 2) gMeme.lines.posY = gElCanvas.height-5;
    else gMeme.lines.posY = Math.floor(gElCanvas.height/2 + 20)
    console.log('...line added', gMeme.lines.posY);
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
