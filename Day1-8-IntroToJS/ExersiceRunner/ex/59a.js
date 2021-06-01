'use strict'

/*global functions*/
var gPlayers = [
    {name: 'player1', hitsCount:0, board:createBingoBoard(2)},
    {name: 'player2', hitsCount:0, board:createBingoBoard(2)}
]
var gBoard = createBingoBoard(5);

var gNums = [];
for (var num = 1; num < 5; num++) {
    gNums.push(num);
}

/*unit testing*/
printBingoBoard(gBoard);
//gPlayers[0].board[0][0].isHit = true;
//printBingoBoard(gPlayers[0].board);
//playBingo();



/*functions*/

function createBingoBoard(size) {
    var board = [];
    resetNums();
    var totalSquares = size * size;
    for (var i = 0; i < size; i++) {
        board.push([]);
        for (var j = 0; j < size; j++) {
            var value = Math.floor(Math.random() * gNums.length + 1);
            var isHit = false;
            board[i].push({
                value:value,
                isHit: isHit
            });
        }
    }
    //console.table(board)
    return board;
}

function printBingoBoard(board) {
    var renderedBoard = []
    console.log(board.length);
    for (var i = 0; i < board.length; i++) {
        var renderedRow = [];
        for (var j = 0; j < board.length; j++) {
            var currSquare = board[i][j];
            var renderedSquare = currSquare.isHit ? currSquare.value + 'v': ''+currSquare.value;
            renderedRow.push(renderedSquare);
        }
        renderedBoard.push(renderedRow);
    }
    console.table(renderedBoard);
}

function playBingo() {
    var isVictory = false;
    resetNums();
   while (!isVictory) {
   // for (var j = 0; j < 5; j++) { 
        var calledNum = drawNum();
        console.log('calledNum', calledNum);
        //for (var i = 0; !isVictory && i < 2; i++); {
        for (var i = 0; i < 2; i++) {
            console.log('i=', i);
            var player = gPlayers[i];
            markBoard(player, calledNum);
            isVictory = checkBingo(player);
            //console.log('i j ', i, j);
        }
    }
}
    
function drawNum() {
    var index = Math.floor(Math.random() * gNums.length);
    var num = gNums[index];
    gNums.splice(index,1);
    return num;
}

function markBoard(player, calledNum) {
    var board = player.board;
    var boardSize = board.length;

    //iterate over the board
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
            var currSquare = board[i][j];
            if (currSquare.value === calledNum) {
                currSquare.isHit = true;
                player.hitsCount++;
                printBingoBoard(board);
            }
        }
    }
}

function checkBingo(player) {
    return playBingo.hitsCount === 25 ? true : false;
}

function resetNums() {
    var gNums = [];
    for (var num = 1; num < 100; num++) {
        gNums.push(num);
    }
}
