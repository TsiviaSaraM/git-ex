'use strict'

const gToucheEvents = ['touchstart', 'touchmove', 'touchend'];
var gElCanvas;
var gCtx;
var gPos;
var gIsActive = false;


function onInit() {
    console.log('init...');
    gElCanvas = document.querySelector('canvas');
    gCtx = gElCanvas.getContext('2d');
    addListeners();
    resizeCanvas();
    console.log(gCtx);
    
}

function resizeCanvas() {
    console.log('resizing...');
    var elContainer = document.querySelector('.canvas-container');
    gElCanvas.width = elContainer.offsetWidth;
    gElCanvas.height = elContainer.offsetHeight;   
}

/**********CHANGE OPTIONS***************/
function onChangeColor(el) {
    console.log('option changed...');
    changeColor(el.value);
}

function onChangeBgColor(el) {
    console.log('option changed...');
    changeBgColor(el.value);
}

function onChangeShape(el) {
    console.log('option changed...');
    changeShape(el.value);
}

function onChangeBgPattern(el) {
    console.log('option changed...');

    if (el.value === 'none') gCtx.fillStyle = '#EEEEFF';
    else {
        changePattern(el.value);
        backgroundPattern();
    }
}
/*************EVENT LISTENERS*************** */
function addListeners() {
    gElCanvas.addEventListener('mousedown', onDown);
    gElCanvas.addEventListener('touchstart', onDown);
    gElCanvas.addEventListener('mousemove', onMove);
    gElCanvas.addEventListener('touchmove', onMove);
    gElCanvas.addEventListener('mouseup', onUp);
    gElCanvas.addEventListener('touchEnd', onUp);

}


//getpotition
function onDown(ev){
    console.log('on down...');
    gIsActive = true;
    gPos = getEvPosition(ev); //for line only
    
}
//draw
function onMove(ev){
    if (gIsActive) {
        // console.log('moving mouse...');
        var prevPos = {x: gPos.x, y:gPos.y}; //for line only
        gPos = getEvPosition(ev);
       drawShape(gPos.x, gPos.y, prevPos.x, prevPos.y);
    } 
}

//stop drawing
function onUp(ev){
    gIsActive = false;
}

function getEvPosition(ev){
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY,
    }
    if (gToucheEvents.includes(ev.type) ) {
        ev.preventDefault();
        ev = ev.changedTouches[0];
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    //TODO if it's a touch event then prevent default behaviour
    return pos;
}

/*******************SAVE & CLEAR**************** */
function onSave(){
    console.log('saving...');
    gCtx.save();
}

function onClear(){
    console.log('clearing...');
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
}

function onRestore(){
    console.log('restoring...');
    gCtx.restore();
}

function onDownload() {
    var elLink = document.querySelector('.download');
    elLink.href = gElCanvas.toDataURL();
}

