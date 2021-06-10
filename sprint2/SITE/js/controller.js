'use strict'
const gTouchEvents = ['touchstart', 'touchmove', 'touchend'];
const IMG_COUNT = 18;

var gElCanvas;
var gCtx;
var gStartPos;


function onInit(){
    console.log('init...');
    renderImages();
    gElCanvas = document.querySelector('canvas');
    gCtx = gElCanvas.getContext('2d');
    addListeners();

}

function renderImages() {
    var strHTML = '';
    for (var i = 1; i <=IMG_COUNT; i++) {
        strHTML += `<img onclick="onSelectImg(this)" src="img/memes/${i}.jpg" data-id=${i} alt="">`
    }

    document.querySelector('.img-container').innerHTML = strHTML;
}

function onSelectImg(elImg){
    console.log('img selected...');
    
    document.querySelector('.editor').style.display = 'flex';
    document.querySelector('.img-container').style.display = 'none';
    gElCanvas = document.querySelector('canvas');
    gCtx = gElCanvas.getContext('2d');

    var id = elImg.dataset.id;
    createMeme(id);
    renderCanvas();
    //show the canvas

}

function renderCanvas() {
    console.log('rendering...');
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    
    var img=new Image();
    img.src = 'img/memes/' + gMeme.selectedImgId + '.jpg';
    img.onload=function(){
        gCtx.drawImage(img,0,0,gElCanvas.width,gElCanvas.height);
        gMeme.lines.forEach(function(line, index) {  
            if (gMeme.selectedLineIdx === index) {
                renderSelectText(line);
            }

            gCtx.font = line.size + 'px'// + ' ' + line.font;
            
            gCtx.textAlign = line.align;
            gCtx.fillStyle = line.color;
            gCtx.strokeStyle = line.stroke;
            gCtx.fillText(line.text, line.posX, line.posY);
            gCtx.strokeText(line.text, line.posX, line.posY);
      })
    };
}

function renderSelectText(line) {
    gCtx.fillStyle = 'orange';
    gCtx.strokeStyle = 'red';
    gCtx.beginPath();
    gCtx.rect(line.posX, line.posY - getHeight(line.text), getWidth(line.text),  getHeight(line.text));
    gCtx.stroke();
}

function getWidth(text){
    var canvasText = gCtx.measureText(text);
    return canvasText.width;
}

function getHeight(text){
    var canvasText = gCtx.measureText(text);
    return canvasText.fontBoundingBoxAscent + canvasText.fontBoundingBoxDescent;
}

/***************EDIT CONTROL BUTTONS************** */
function onAddLine(){
    console.log('adding line...');
    addLine();
}

function onEditText(text){
    var line = getCurrLine();
    editText(text);
    renderCanvas();
    
}

function onEndEditText(){
    // console.log('ending edit text...');
}

//TODO make size change while mouse remains pressed, using onmouseup
function onVerticalMove(direction) {
    var line = getCurrLine();
    line.posY += (direction * 10)
    console.log('editing vert pos...', line.posY);
    renderCanvas();
}

function onSwitchLine() {
    switchLine();
    renderCanvas();
}

function onRemoveText(){
    console.log('removing...');
    removeText();
    renderCanvas();
}

function onEditSize(direction) {
    console.log('editing...');
    editSize(direction);
    renderCanvas();
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

function onOpenShareOptions(){
    console.log('opening share options...');
    document.querySelector('.share-options').style.display = 'flex';
    document.querySelector('.editor').style.display = 'none';
    document.querySelector('.about').style.display = 'none';
}

function onCloseShareOptions() {
    console.log('closing share options...');
    document.querySelector('.share-options').style.display = 'none';
    document.querySelector('.editor').style.display = 'flex';
    document.querySelector('.about').style.display = 'flex';
}

function onShare(){

}

function onDownload() {
    var elLink = document.querySelector('.download');
    elLink.href = gElCanvas.toDataURL();
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
    //TODO empty input textbox when I click anywhere outside the box
    //clear input box
    document.querySelector('.text-input').value = '';
    const pos = getEvPos(ev);
    var selectedLineIdx = getClickedLine(pos)
    if (selectedLineIdx === -1) return;
    setCurrLine(selectedLineIdx);
    setLineDrag(true);
    gStartPos = getEvPos(ev);
    console.log('moving text...');
    
    // gStartPos = pos;
}

// function onMove(ev){
//     if (gIsDrag) {
//         const pos = getEvPos(ev);
//         moveLine(pos);
//         console.log('about to render');
//         renderCanvas();
//     }
// }

function onMove(ev){

    if (gIsDrag) {
        const pos = getEvPos(ev);
        console.log('gStartPos:', gStartPos)
        console.log('pos:', pos)
        const dx = pos.x - gStartPos.x
        const dy = pos.y - gStartPos.y
        moveLine(dx, dy);
        gStartPos = pos;
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

