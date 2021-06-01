'use strict'
var gBoard;
var gStartTime;
var gNextNum;
var gIntervalId;
var gWidth = 4;

function init() {
    gStartTime = null;
    gBoard = createBoard();
    gNextNum = 1;
    clearInterval(gIntervalId);

    renderBoard(gBoard);
    document.querySelector('.next-num').innerText = 'Press any cell to start the game';
    document.querySelector('.time').innerText = '';

}

function createBoard() {

    gBoard = [];
    for (var i = 0; i < gWidth*gWidth; i++) {
        gBoard.push(i+1);
    }
    shuffle(gBoard);
    console.table(gBoard);
    return gBoard;

}

function shuffle(gBoard) {
    for (var i = gBoard.length-1; i > 0; i--) {
        var j = Math.floor(Math.random()*(i+1));
        var temp = gBoard[i];
        gBoard[i] = gBoard[j];
        gBoard[j] = temp;
        
    }
}

function renderBoard(gBoard) {
    var strHTML = '';
    var currIndex = 0;
    for (var i = 0; i < gWidth; i++) {
        strHTML +="<tr>";
        for (var j = 0; j < gWidth; j++) {
            strHTML += `<td class="cell" data-id="${gBoard[currIndex]}" onclick="cellClicked(this)">${gBoard[currIndex]}</td>`;
            currIndex++;
        }
        strHTML += "</tr>";

    }

    document.querySelector('tbody').innerHTML = strHTML;
}


function cellClicked(elCell) {
    if (gStartTime === null) startNewGame();//TODO change to !
    
    //check if the correct number was pressed
    

    if (elCell.getAttribute('data-id') !== gNextNum+'') console.log('wrong number pressed',elCell.innerText, gNextNum );
    else { //if the correct num was pressed
        //object
        gNextNum++;
        document.querySelector('.next-num').innerText = gNextNum;
        console.log('next number is ' + gNextNum );
        
        //DOM - change color
        elCell.style.backgroundColor = '#F88E07';
    }

    //at end of game
    if (gNextNum === gWidth*gWidth + 1) {
        console.log('end of game');
        init();
    }
}



function startNewGame(){
    //object - date
    gStartTime = new Date();
    gIntervalId = setInterval(updateTimer, 500);
    
    //object - next num
    gNextNum = 1;
    document.querySelector('.next-num').innerText = gNextNum;
}

function updateTimer() {
    //model
    console.log('timer running');
    var now = new Date();
    var timeSinceStart = (now - gStartTime)/1000;

    //DOM
    var elTime = document.querySelector('.time');
    elTime.innerText = timeSinceStart;

}

function changeLevel(elBtn) {

    var newGridLength = elBtn.getAttribute('data-length');
    gWidth = newGridLength;


    //clear color of levels
    var elLevels = document.querySelectorAll('.level');
    for (var i = 0; i < elLevels.length; i++) {
        elLevels[i].style.backgroundColor = '';
    }
    //reset size of board
    elBtn.style.backgroundColor = 'azure'
    
    init();

}