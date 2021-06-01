'use strict'
const WALL = '#'
const FOOD = '.'
const EMPTY = ' ';
const POWER_FOOD = '0';
const CHERRY = '🍒';


var gBoard;
var gGame = {
    score: 0,
    isOn: false
}
var gFoodCount;
var gCherryIndervalId;

function init() {
    gBoard = buildBoard();
    gFoodCount = 0;
    createPacman(gBoard);
    createGhosts(gBoard);
    printMat(gBoard, '.board-container');
    document.querySelector('.modal').style.display = 'none';
    gGame.isOn = true;
    gCherryIndervalId = setInterval(addCherry, 1000);
}

function buildBoard() {
    var SIZE = 10;
    var board = [];
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = FOOD;
            gFoodCount++;
            //console.log(('gFoodCount'), gFoodCount );
            if (i === 0 || i === SIZE - 1 ||
                j === 0 || j === SIZE - 1 ||
                (j === 3 && i > 4 && i < SIZE - 2)) {
                board[i][j] = WALL;
                gFoodCount--;
            }
        }

    }
    board[1][1] = POWER_FOOD;
    board[SIZE - 2][1] = POWER_FOOD;
    board[1][SIZE - 2] = POWER_FOOD;
    board[SIZE - 2][SIZE - 2] = POWER_FOOD;
    
    return board;
}

function updateScore(diff) {
    gGame.score += diff;
    document.querySelector('h2 span').innerText = gGame.score
}

function gameOver(isVictory) {
    console.log('Game Over');
    gGame.isOn = false;
    clearInterval(gIntervalGhosts);
    clearInterval(gCherryIndervalId);

    //TODO dont change board, add model (jumping message/ popup)

    var elMessage = document.querySelector('.game-over')
    elMessage.innerText = isVictory ? 'Game over - you won!' : 'Game over - you lost!';
    document.querySelector('.modal').style.display = 'block';
    console.log(elMessage);
    //debugger;

}

function eatSuperFood() {

    gPacman.isSuper = true;
    setTimeout(function() { 
        gPacman.isSuper = false;
        gGhosts = gGhosts.concat(gDeadGhosts); //TODO poss move to another function
        gDeadGhosts = [];
    }, 5000)
}

function addCherry() {
    var location = findEmptyCell();

    if (!location) return;
    
    gBoard[location.i][location.j] = CHERRY;
    renderCell(location, CHERRY);//DOM

}