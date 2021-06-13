'use strict'
const gTouchEvents = ['touchstart', 'touchmove', 'touchend'];
const IMG_COUNT = 18;

var gElCanvas;
var gCtx;
var gStartPos;


function onInit(){
    console.log('init...');
    renderKws();
    renderImages();

}
/******RENDERS**************************** */
function renderImages() { 
    var strHTML = '';

    var strHTML = gImages.reduce(function(strHTML, image){
        if (gSearch === '' || image.keywords.includes(gSearch)) 
            return strHTML + `<img onclick="onSelectImg(this)" src="${image.url}" data-id=${image.id} alt="">`
        else return strHTML;
    }, '')

    document.querySelector('.img-container').innerHTML = strHTML;
}

function onSelectImg(elImg){ 
    console.log('img selected...');
    var id = elImg.dataset.id;
    document.querySelector('.editor').style.display = 'flex';
    document.querySelector('.img-container').style.display = 'none';
    document.querySelector('.about').style.display = 'none';
    document.querySelector('.search').style.display = 'none';
    gElCanvas = document.querySelector('canvas');
    gCtx = gElCanvas.getContext('2d');
    
    var elContainer = document.querySelector('.canvas-container');
    // debugger;
    elContainer.style.height = elContainer.offsetWidth * elImg.height / elImg.width + 'px';
    //set size of canvas container
    resizeCanvas();
    createMeme(id);
    renderCanvas();
    renderStickers();
    addListeners();

}

function renderCanvas() { 
    
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
    
    var img=new Image();
    img.src = 'img/memes/' + gMeme.selectedImgId + '.jpg';
    img.onload=function(){
        gCtx.drawImage(img,0,0,gElCanvas.width,gElCanvas.height);
        gMeme.lines.forEach(function(line, index) {  
            if (gMeme.selectedLineIdx === index) {
                renderSelectText(line);
            }

            gCtx.font = line.size + 'px impact';
            
            gCtx.textAlign = line.align;
            gCtx.fillStyle = line.color;
            gCtx.strokeStyle = line.stroke;
            gCtx.fillText(line.text, line.posX, line.posY);
            gCtx.strokeText(line.text, line.posX, line.posY);
      })

      gMeme.stickers.forEach(function(sticker) {  
          var elSticker=new Image();
          elSticker.src = getStickerURL(sticker.id);
            elSticker.onload=function(){
                gCtx.drawImage(elSticker,sticker.posX,sticker.posY,gElCanvas.width/10,gElCanvas.height/10);
            }
        })
    };
}

function renderKws() {
    var strHTML = '';
    var kws = prepareCommonKws();
    kws.forEach(function(kw){
        var fontSize = getFontSize(kw);
        strHTML += `<div style="font-size:${fontSize}px;">${kw} </div>`;
    })

    strHTML += `<p class="more" onclick="renderAllKws()">more...</p>`
    document.querySelector('.kws').innerHTML = strHTML;
}

function renderAllKws() {
    var strHTML = '';
    var kws = prepareAllKws();
    kws.forEach(function(kw){
        var fontSize = getFontSize(kw);
        strHTML += `<div style="font-size:${fontSize}px;">${kw} </div>`;
    })
    strHTML += `<p class="close-kws" onclick="renderKws()">close.</p>`
    document.querySelector('.kws').innerHTML = strHTML;
}


function onSearch(text) {
    console.log('searching...', text);
    updateSearch(text);
    renderImages();
    renderKws();
}

function renderSelectText(line) {
    gCtx.fillStyle = 'orange';
    gCtx.strokeStyle = 'red';
    gCtx.beginPath();
    gCtx.rect(line.posX, line.posY - getHeight(line.text), getWidth(line.text),  getHeight(line.text));
    gCtx.stroke();
}

/***************EDIT CONTROL BUTTONS************** */
function onAddLine(){
    console.log('adding line...');
    addLine();
}

function onEditText(text){
    // var line = getCurrLine();
    editText(text);
    renderCanvas();
    
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
    editStroke(el.value);
    renderCanvas();
}
function onEditFill(el){
    console.log('editing...', el);
    editFill(el.value);
    renderCanvas();
}

function onOpenShareOptions(){
    console.log('opening share options...');
    document.querySelector('.share-options').style.display = 'flex';
    // document.querySelector('.editor').style.display = 'none';
    document.querySelector('.about').style.display = 'none';
}

function onCloseShareOptions() {
    console.log('closing share options...');
    document.querySelector('.share-options').style.display = 'none';
    document.querySelector('.editor').style.display = 'flex';
    document.querySelector('.about').style.display = 'flex';
}

function onCloseEditor(){
    document.querySelector('.editor').style.display = 'none';
    document.querySelector('.img-container').style.display = 'grid';
    document.querySelector('.about').style.display = 'flex';
    document.querySelector('.search').style.display = 'flex';
}

function onShare(){

}

function onDownload() {
    var elLink = document.querySelector('.download');
    elLink.href = gElCanvas.toDataURL();
}

function onUploadFile(el){
    var reader = new FileReader();
    reader.onload = function () {
        const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
        console.log(reader.result);
        // localStorage.setItem("imgData", base64String);
        createImage(`url(data:image/png;base64,${base64String})`);
        var strHTML = `<img onclick="onSelectImg(this)" src="url(data:image/png;base64,${base64String})" data-id=${gId++} alt="">`
        document.querySelector('.img-container').innerHTML += strHTML;
    };
    reader.readAsDataURL(el.files[0]);
    var elImg = document.querySelector('[data-'+gId+']');
    onSelectImg(elImg)
    renderCanvas();

}
/***************ADD LISTENERS************* */

function addListeners(){
    gElCanvas.addEventListener('mousedown', onDown);
    gElCanvas.addEventListener('touchstart', onDown);
    gElCanvas.addEventListener('mousemove', onMove);
    gElCanvas.addEventListener('touchmove', onMove);
    gElCanvas.addEventListener('mouseup', onUp);
    gElCanvas.addEventListener('touchend', onUp);

    document.addEventListener('click', onOutsideClick);
}

var gEv;
function onOutsideClick(ev) {
    gEv = ev;
    // console.log(ev.path);
    // var isOutsideClick = !document.querySelector('.edit').contains(ev.target);
    var elControls = Array.from(document.querySelectorAll('.edit'));
    var isOutsideClick = !elControls.some(function(elControl) {
        return elControl.contains(ev.target);
    })

    console.log(isOutsideClick);
    if (isOutsideClick) {
        console.log('is outside click');
        document.querySelector('.text-input').value = '';
        //if canvas was not clicked on
        if (!document.querySelector('canvas').contains(ev.target))gMeme.selectedLineIdx = -1; 

        renderCanvas();
        
        //if nav tab was clicked on
        if (document.querySelector('.nav-gallery').contains(ev.target)) {
            onCloseEditor();
        }
        else if (document.querySelector('.nav-about').contains(ev.target)) {
            onCloseEditor();
            window.location.href = 'gallery.html#about';
        }
        else if (document.querySelector('.nav-memes').contains(ev.target)) 
        {
            onCloseEditor();
            renderMemes();
        }
        
    }
}

function onDown(ev){
    //TODO empty input textbox when I click anywhere outside the box
    //clear input box
    console.log('mousedown');
    document.querySelector('.text-input').value = '';
    const pos = getEvPos(ev);
    if (gIsPuttingSticker) {
        console.log('putting a sticker');
        gMeme.stickers.push({id: gCurrSticker.id, posX: pos.x, posY:pos.y});
        
        return;
    }

    var selectedLineIdx = getClickedLine(pos)
    if (selectedLineIdx === -1) return;
    setCurrLine(selectedLineIdx);
    setLineDrag(true);
    gStartPos = getEvPos(ev);
    console.log('moving text...');
    
    // gStartPos = pos;
}


function onMove(ev){
    if (gIsPuttingSticker) return;

    if (gIsDrag) {
        const pos = getEvPos(ev);
        const dx = pos.x - gStartPos.x
        const dy = pos.y - gStartPos.y
        moveLine(dx, dy);
        gStartPos = pos;
        renderCanvas();
    }
}

function onUp(){
    setLineDrag(false);
    gIsPuttingSticker = false;

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



function getWidth(text){
    var canvasText = gCtx.measureText(text);
    return canvasText.width;
}

function getHeight(text){
    var canvasText = gCtx.measureText(text);
    return canvasText.fontBoundingBoxAscent + canvasText.fontBoundingBoxDescent;
}

function getClickedLine(clkPos){
    console.log('checking if clicked');
    return gMeme.lines.findIndex(function(line){
        var xBegin = line.posX;
        var xEnd = getWidth(line.text) + xBegin;
        var yBegin = line.posY - getHeight(line.text)
        var yEnd = getHeight(line.text) + yBegin;

        return xBegin <= clkPos.x && clkPos.x <= xEnd && yBegin <= clkPos.y && clkPos.y <= yEnd;

        // gCtx.rect(line.posX, line.posY - getHeight(line.text), getWidth(line.text),  getHeight(line.text));
    })
    
}


function resizeCanvas(elCanvas = gElCanvas) {
    console.log('resizing...');
    var elContainer = document.querySelector('.canvas-container');
    gElCanvas.width = elContainer.offsetWidth;
    gElCanvas.height = elContainer.offsetHeight;   
}

function onSetLang(lang) {
    console.log('lets set the lang...');
    if (lang === 'he') {
        document.body.classList.add('rtl')
        document.querySelector('body').style.fontFamily = 'arimo';
    }
    else {
        document.body.classList.remove('rtl');
        document.querySelector('body').style.fontFamily = 'montserrat';
    }
    setLang(lang);
    doTrans();
    // renderBooks();
    
}

function onSelectSticker(stickerId){
    gCurrSticker = gStickers.find(function(sticker){
        return sticker.id === stickerId;
    })
    gIsPuttingSticker = true;
}






