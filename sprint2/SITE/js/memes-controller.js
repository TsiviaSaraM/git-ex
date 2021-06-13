'use strict'
var gMemes = [];

function renderMemes(){ 
    console.log('rendering memes...');
    var strHTML = '';
    var id = 0;


    gMemes.forEach(function(meme){ 
        strHTML += `
        <div class="canvas-container-small">
            <canvas width="300" height="300" class="canvas${id++}"></canvas>
        </div>`;
    })
    document.querySelector('.img-container').innerHTML = strHTML;
    // document.querySelector('.img-container').style.display = 'none';
    // document.querySelector('.img-container').style.display = 'grid';
    gMemes.forEach(function(meme, index){ //for each meme
        //add html canvas to the grid


        //render the canvass
        var elCanvas = document.querySelector('.canvas'+index);
        var ctx = elCanvas.getContext('2d');
        ctx.clearRect(0, 0, elCanvas.width, elCanvas.height);
        

        var img=new Image();
        img.src = getImgUrl(meme)

        // debugger;
        ctx.drawImage(img,0,0,elCanvas.width,elCanvas.height);
        img.onload=function(){
            console.log('image loaded');
            
                meme.lines.forEach(function(line) {   //for each line on the meme
            
                    ctx.font = line.size + 'px impact'
            
                    ctx.textAlign = line.align;
                    ctx.fillStyle = line.color;
                    ctx.strokeStyle = line.stroke;
                    ctx.fillText(line.text, line.posX, line.posY);
                    ctx.strokeText(line.text, line.posX, line.posY);
              })
        };
        ctx.drawImage(img,0,0,elCanvas.width,elCanvas.height);
    })
}


function getImgUrl(meme) {
    // var imgId = meme.selectedImgId;
    var currImg = gImages.find(function(img){
        return img.id === parseInt(meme.selectedImgId);
    });
    return currImg.url;
}

var gMemes = [
    {
        selectedImgId: 1, 
        selectedLineIdx: 0, 
        lines: [ { 
        text: 'I am here', 
        size: 60, 
        align: 'left', 
        color: 'hotpink' ,
        stroke: 'black',
        posX: 150,
        posY: 10,
        }] 
    },
    {
        selectedImgId: 5, 
        selectedLineIdx: 0, 
        lines: []
    }
]

function onSaveMeme() {
    gMemes.push(gMeme);
    onCloseEditor();
}