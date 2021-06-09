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

function isLineClicked(clilckedPos){

}


function setLineDrag(val){
    gIsDrag = val;
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
