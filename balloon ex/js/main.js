var gIntervalId;
var gIdCount = 3;
//var gFadeIntervalId;


var gBalloons = [
    {id: 1, bottom: 100, speed: 18},
    {id: 2, bottom: 50, speed: 2},
];

addBalloon(20, 10, 'green');
addBalloon(20, 25, 'orange');
addBalloon(20, 6, 'yellow');

function init() {
    gIntervalId = setInterval(moveBalloons, 200);
}

function addBalloon(bottom = 50, speed = 7, color) {

    var elBalloon;
    
    //add balloon to model
    var id = gIdCount++;
    gBalloons.push({id:id, bottom:bottom, speed:speed});

    //add balloon to DOM in html
    document.querySelector('.balloonsBox').innerHTML += '<div class = "balloon balloon' + id + '" onclick = "popBalloon(this)"></div>';
    //add style in css
    elBalloon = document.querySelector('.balloon' + id);
    elBalloon.style.backgroundColor = color;
    elBalloon.style.left = Math.floor(Math.random() * 800) + 'px';
    console.log('here4s');
    console.log(elBalloon.style.left);
}

function moveBalloons() {
    var elBalloons = document.querySelectorAll('.balloon');
    for (var i = 0; i < elBalloons.length; i++) {
        //console.log('the balloon will move');
        var balloon = gBalloons[i];
        var elBalloon = elBalloons[i];

        balloon.bottom += balloon.speed;
        elBalloon.style.bottom = balloon.bottom + 'px';
        //console.log(elBalloon.style.bottom);
        if (balloon.bottom > 800) clearInterval(gIntervalId);
    }

}

function popBalloon(elBalloon) {
    var bang = document.querySelector('.pop'); 
    //var bang = new Audio('pop.wav');
    
    //hide the balloon
    elBalloon.style.display = "none";

    //make pop sound
    
    bang.play();
    

}