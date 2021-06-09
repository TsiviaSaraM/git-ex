'use strict'
const gTouchEvents = ['touchstart', 'touchmove', 'touchend'];

var gElCanvas;
var gCtx;
var gStartPos;


function onInit(){
    console.log('init...');
    gElCanvas = document.querySelector('canvas');
    gCtx = gElCanvas.getContext('2d');
    addListeners();

}

function onSelectImg(elImg){
    console.log('img selected...');
    
    gElCanvas = document.querySelector('canvas');
    gCtx = gElCanvas.getContext('2d');

    var id = elImg.dataset.id;
    createMeme(id);
    renderCanvas();
    //show the canvas

}

function renderCanvas() {
    console.log('rendering...');
    var img=new Image();
    img.src = 'img/memes/' + gMeme.selectedImgId + '.jpg';
    img.onload=function(){
    gCtx.drawImage(img,0,0,gElCanvas.width,gElCanvas.height);
      
      gMeme.lines.forEach(function(line) {  
        console.log('line...');
        gCtx.font = line.size + 'px' + ' ' + line.font;
        gCtx.textAlign = line.align;
        gCtx.fillStyle = line.color;
        gCtx.strokeStyle = line.stroke;
        gCtx.fillText(line.txt, line.posX, line.posY);
        gCtx.strokeText(line.txt, line.posX, line.posY);
      })
    };


}

/***************EDIT CONTROL BUTTONS************** */
function onAddLine(){
    console.log('adding line...');
    addLine();
}

function onEditText(text){
    console.log('editing...', text);
    var line = gMeme.lines[gMeme.selectedLineIdx];
    gCtx.fillText(text, line.posX, line.posY);
    gCtx.strokeText(text, line.posX, line.posY);
}

function onVerticalMove() {
    console.log('editing...');
}

function onRemoveText(){
    console.log('editing...');
}

function onEditSize(direction) {
    console.log('editing...');
}
function onEditJustifyText(value) {
    console.log('editing...');
}

function onEditFont(el){
    console.log('editing...', el);
}
function onEditStroke(el){
    console.log('editing...', el);
}
function onEditFill(el){
    console.log('editing...', el);
}

/***************ADD LISTENERS************* */

function renderLine() {

}

function addListeners(){
    gElCanvas.addEventListener('mousedown', onDown);
    gElCanvas.addEventListener('touchstart', onDown);
    gElCanvas.addEventListener('mousemove', onMove);
    gElCanvas.addEventListener('touchmove', onMove);
    gElCanvas.addEventListener('mouseup', onUp);
    gElCanvas.addEventListener('touchend', onUp);
}

function onDown(ev){
    //TODO empty input textbox
    var pos = getEvPos(ev);
    if (!isLineClicked(pos)) return;
    console.log('moving text...');
    setLineDrag(true);
    gStartPos = pos;
}

function onMove(ev){
    if (gIsDrag) {
        const pos = getEvPos(ev);
        moveLine(pos);
        console.log('about to render');
        renderCanvas();
    }
}
function onUp(){
    setLineDrag(false);
}

function getEvPos(ev){
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }

    if (gTouchEvents.includes(ev.type)) {
        ev.preventDefault()
        ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}

