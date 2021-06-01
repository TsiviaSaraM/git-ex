/*
QUESTIONS
do i need shuffle function
*/

/*global variables*/
var gPlayers = [
    {name: 'player1', hitsCount:0, board:createBingoBoard(5)},
    {name: 'player2', hitsCount:0, board:createBingoBoard(5)}
];
var gNums = [];

var gInterval;

function init() {
    resetNums();
    gInterval = setInterval(playBingo, 1000);
}



/*unit testing*/
// //testing createBingoBoard
 //var gBoard = createBingoBoard(5);
// //  console.log(gBoard[0][1]);
//  gBoard[0][1].isHit = true;
// //  console.log(gBoard[0][1]);
 // printBingoBoard(gBoard);

// gBoard = createBingoBoard(2);
// // console.table(gBoard);
// //printBingoBoard(gBoard);
// gBoard[0][1].isHit = true;
// // console.table(gBoard);
// printBingoBoard(gBoard);
// //console.table(gBoard);
// gBoard = createBingoBoard(30);
// // printBingoBoard(gBoard)
// gBoard[0][1].isHit = true;
// printBingoBoard(gBoard);
// //console.table(gBoard);

//printBingoBoard(gPlayers[1].board);
//markBoard(gPlayers[1], 2);

init();

//this has been tested and works
function createBingoBoard(size) {
    var board = [];
    resetNums();
    var totalSquares = size * size;
    for (var i = 0; i < size; i++) {
        board.push([]);
        for (var j = 0; j < size; j++) {
            var value = Math.floor(Math.random() * gNums.length);
            board[i].push({
                value: gNums[value],
               // value:value,
                isHit: false
            });
            gNums.splice(value, 1);
        }
    }
    return board;
}


//this function has been tested and works
function printBingoBoard(board) {
    var renderedBoard = [];

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

function resetNums(){
    gNums = [];
    for (var i=1; i < 99; i++) {
        gNums.push(i);
    }
    //gNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];//later make this contain numbers up to 99
    //gNums = [1, 2, 3, 4, 5];
}

/*WITHOUT USING INTERVAL TIMER*/
// function playBingo() {
//     resetNums();
//     var isVictory = false;
//     while (!isVictory) {
//         var calledNum = drawNum();
//         for (var i = 0; !isVictory && i < gPlayers.length; i++) {
//             var player = gPlayers[i];
//             markBoard(player, calledNum);
//             isVictory = checkBingo(player);
//         }
//    }
//    console.log('we have a winner');
// }

function playBingo() {
        //resetNums();
        var isVictory = false;

        var calledNum = drawNum();
        for (var i = 0; !isVictory && i < gPlayers.length; i++) {
            var player = gPlayers[i]; console.log(player.board);
            markBoard(player, calledNum);
            isVictory = checkBingo(player);
            if (isVictory) {
                console.log('we have a winner');
                clearInterval(gInterval);
            }
        }
    }



function drawNum() {
    //change to this later:
    var index = Math.floor(Math.random() * gNums.length);
    var num = gNums[index];
    //console.log('before splice:',gNums, 'index to remove: ', index);
    gNums.splice(index,1);
    //console.log('after splice:', gNums);
    //console.log('num = ', num);
    return num;
    //return 3;
}

//tested
function markBoard(player, calledNum) {
    //console.log(player);
    //if (player.hitsCount === 6) debugger;
    var board = player.board;
    var boardSize = board.length-1;

    //iterate over the board
    //console.log('player', player);
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
            var currSquare = board[i][j];
            if (currSquare.value === calledNum) {
                currSquare.isHit = true;
                player.hitsCount++;
                //console.log('calledNum:', calledNum, " player:", player.name);
                //printBingoBoard(board);
                if(rowComplete(i, board)) console.log(player.name, " row complete");
                if(colComplete(j, board)) console.log(player.name, " col complete");
                if(i === j && mainDiagComplete(board)) console.log(player.name, " main diagonal complete");
                if (i = j - board.length - 1 || j === i - board.length - 1) {
                    if(secDiagComplete(board)) console.log(player.name, " 2ndry diagonal complete");
                }
                return;
            }
        }
    }
}

function checkBingo(player) {
    return player.hitsCount === player.board.length * player.board.length;
    //return true;
}

function rowComplete(row, board) {
    for (var col = 0; col < board.length; col++) {
        if (!board[row][col].isHit) return false;
    }
    return true;
}

function colComplete(col, board) {
    for (var row = 0; row < board[0].length; row++) {
       //console.log('col=', col, ' board = ', board);
        if (!board[row][col].isHit) return false;
    }
    return true;
}

function mainDiagComplete(board) {
    for (var i = 0; i < board.length; i++) {
        if (!board[i][i].isHit) return false;
    }
    return true;
}

function secDiagComplete(board) {
    for (var i = 0; i < board.length; i++) {
        if (!board[i][board.length - i - 1].isHit) return false;
    }
    return true; 
}