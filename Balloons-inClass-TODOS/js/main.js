
//model:
var gNextId = 101;
var gBalloons = createBalloons(16);
var gInterval;

// TODO: createBalloons(count) , createBalloon()
function createBalloon(speed) {
    return {
        id: gNextId++,
        speed: speed,
        bottom: 0
    };
}

function createBalloons(count) {
    var balloons = [];
    for (var i = 0; i < count; i++) {
        var balloon = createBalloon(getRandomInt(5, 15));
        balloons.push(balloon);
    }
    return balloons;
}

// onmouseover="speedUp"
function speedUp(balloonIdx) {
    console.log('speeding up!');
    gBalloons[balloonIdx].speed += 5;
}

function init() {
    renderBalloons();
}

// render the balloons + onload="init()" 
// remove balloon1, balloon2 classes - move into inline style="bgcolor,left 
function renderBalloons() {
    var strHTML = '';
    for (var i = 0; i < gBalloons.length; i++) {
        strHTML += `<div 
        style="background-color: ${getRandomColor()}; left: ${i * 100}px;" onmouseover="speedUp(${i})" onclick="blowUp(this)" class="balloon"></div>`;
    }
    var elSky = document.querySelector('.sky');
    elSky.innerHTML = strHTML;
}

function start() {
    gInterval = setInterval(moveBalloons, 50);
}

function moveBalloons() {
    var elBalloons = document.querySelectorAll('.balloon');

    for (var i = 0; i < gBalloons.length; i++) {
        //model
        var balloon = gBalloons[i];
        //dom
        var elBalloon = elBalloons[i];
        //update the model
        balloon.bottom += balloon.speed;
        //update the dom
        elBalloon.style.bottom = balloon.bottom + 'px';
    }
}

function blowUp(elBalloon) {
    elBalloon.style.display = 'none';
    playSound();
}

function playSound() {
    var sound = new Audio("sound/pop.mp3");
    sound.play();
}










function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}