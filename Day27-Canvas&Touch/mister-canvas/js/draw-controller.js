'use strict'

var gSpeed;

/*TODO enable different size rectangles*/

function drawShape(x, y, prevX, prevY) {

    gCtx.beginPath();
    updateSpeed(x, y, prevX, prevY);
    switch(gOptions.shape) {
        case 'rectangle':
            drawRectangle(x, y);
            break;
        case 'circle':
            drawCircle(x, y);
            break;
        case 'line':
            drawLine(x, y, prevX, prevY);
            break;
        case 'triangle':
            drawTriangle(x, y, prevX, prevY);
            break;
        case 'arrow':
            drawArrow(x, y, prevX, prevY);
            break;s

    }

    if (gOptions.bgColor === 'random') gCtx.fillStyle = getRandomColor();
    else gCtx.fillStyle = gOptions.bgColor;

    if (gOptions.color === 'random') gCtx.strokeStyle = getRandomColor();
    else gCtx.strokeStyle = gOptions.color;
    
    gCtx.fill();
    gCtx.stroke();
}

function drawRectangle(x, y) {
    gCtx.rect(x, y, 3*gSpeed, 2*gSpeed);
}

function drawCircle(x, y) {
    gCtx.arc(x, y, gSpeed, 0, 2 * Math.PI);
}

function drawLine(x, y, prevX, prevY) {
    gCtx.moveTo(prevX, prevY);
    gCtx.lineTo(x, y);
    gCtx.closePath();
}

function drawTriangle(x, y, prevX, prevY) {
    gCtx.moveTo(prevX, prevY);
    gCtx.lineTo(x + 10*(x - prevX), y + 10 * (y - prevY));
    gCtx.lineTo(x + 10*(x - prevX), y + 10 * (y - prevY));
    gCtx.closePath();
}

function drawArrow(x, y, prevX, prevY) {
    gCtx.moveTo(prevX, prevY);
    gCtx.lineTo(x + 10*(x - prevX), y + 10 * (y - prevY));
    gCtx.lineTo(x + 10*(x - prevX), y + 10 * (y - prevY));

}




function updateSpeed(x, y, prevX, prevY) {
    var diffX = Math.abs(x - prevX);
    var diffY = Math.abs(y - prevY);
    var dist = Math.sqrt(diffX * diffX + diffY * diffY);
    gSpeed = dist;
    // return dist;        
}




/***************UTILS FUNCTIONS**************** */
function getRandomColor() {
    return 'rgba('+Math.floor(Math.random() * 255)+', '+Math.floor(Math.random() * 255)+', '+Math.floor(Math.random() * 255)+')' ;
}

// function getColorBySpeed() {
//     var col1 = Math.floor((gSpeed * 255) % 255);
// }

