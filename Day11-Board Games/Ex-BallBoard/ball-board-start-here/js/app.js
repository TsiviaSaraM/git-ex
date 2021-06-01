var WALL = 'WALL';
var FLOOR = 'FLOOR';
var BALL = 'BALL';
var GAMER = 'GAMER';
var GLUE = 'GLUE'
//var PASSAGE = 'PASSAGE';

var GAMER_IMG = '<img src="img/gamer.png" />';
var BALL_IMG = '<img src="img/ball.png" />';
var GLUE_IMG = '<img src="img/candy.png" />';

var gBoard;
var gGamerPos;
var gBallsCollected = 0;
var gIntervalId;
var gGlueIntervalId;
var gBallsPlaced = 0;
var gIsGlued = false;

function initGame() {
    gBallsCollected = 0;
    gGamerPos = { i: 2, j: 9 };
    gBoard = buildBoard();
    gIsGlued = false;
    renderBoard(gBoard);
    //TODO maybe hide the restart button on DOM
    gBallsPlaced = 2;
    gIntervalId = setInterval(addNewBall, 5000);
    gGlueIntervalId = setInterval(addGlue, 5000);
}


function buildBoard() {
    // Create the Matrix
    var board = createMat(10, 12)


    // Put FLOOR everywhere and WALL at edges
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            // Put FLOOR in a regular cell
            var cell = { type: FLOOR, gameElement: null };

            // Place Walls at edges
            if (i === 0 || i === board.length - 1 || j === 0 || j === board[0].length - 1) {
                cell.type = WALL;
            }

            // Add created cell to The game board
            board[i][j] = cell;
        }
    }

    //remove wall from the tunnels
    var midHeight = Math.floor(board.length/2);
    var midLength = Math.floor(board.length[0]/2);
    board[0][midLength] = {type: FLOOR, gameElement: null};
    board[midHeight][0] = {type: FLOOR, gameElement: null};
    board[buildBoard.length][midLength] = {type: FLOOR, gameElement: null};
    board[midHeight][board[0].length] = {type: FLOOR, gameElement: null};

    // Place the gamer at selected position
    board[gGamerPos.i][gGamerPos.j].gameElement = GAMER;

    // Place the Balls (currently randomly chosen positions)
    board[3][8].gameElement = BALL;
    board[7][4].gameElement = BALL;

    console.log(board);
    return board;
}

// Render the board to an HTML table
function renderBoard(board) {

    var strHTML = '';
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>\n';
        for (var j = 0; j < board[0].length; j++) {
            var currCell = board[i][j];

            var cellClass = getClassName({ i: i, j: j })

            //change to short if statement
            currCell.type === FLOOR ? cellClass += ' floor' : cellClass += ' wall';

            //Change To template string
            //strHTML += `\t<td class="cell `${cellClass}"  onclick="moveTo(' + i + ',' + j + ')" >\n`
            strHTML += `\t<td class="cell ${cellClass} "  onclick="moveTo('${i}${j})" >\n`

            // TODO - change to switch case statement
            switch(currCell.gameElement) {
                case GAMER:
                    strHTML += GAMER_IMG;
                case BALL:
                    strHTML += BALL_IMG;
            }

            strHTML += '\t</td>\n';
        }
        strHTML += '</tr>\n';
    }

    console.log('strHTML is:');
    console.log(strHTML);
    var elBoard = document.querySelector('.board');
    elBoard.innerHTML = strHTML;
}

// Move the player to a specific location
function moveTo(i, j) {

    var targetCell = gBoard[i][j];
    if (gIsGlued || targetCell.type === WALL) return;

    //update the destination if we are going through a passage
    //TODO use switch statement with both statements, because o/w need to make sure this is before the row above
    if (i === -1) i = gBoard.length - 1;
    if (j === -j) j = gBoard[0].length - 1;
    if (i === gBoard.length) i = 0;
    if (j === gBoard[0].length) j = 0;

    // Calculate distance to make sure we are moving to a neighbor cell
    var iAbsDiff = Math.abs(i - gGamerPos.i);
    var jAbsDiff = Math.abs(j - gGamerPos.j);

    // If the clicked Cell is one of the four allowed
    if ((iAbsDiff === 1 && jAbsDiff === 0) || (jAbsDiff === 1 && iAbsDiff === 0)) {

        if (targetCell.gameElement === BALL) { //put in function checkVictory
            console.log('Collecting!');
            gBallsCollected++;//model
            document.querySelector('.balls-collected').innerText = `Total balls collected: ${gBallsCollected}`;//DOM

            //play sound
            // var audio = new Audio('audio_file.mp3');
            // audio.play();

            //if all balls collected
            if (gBallsPlaced === gBallsCollected) {
                clearInterval(gIntervalId);
                clearInterval(gGlueIntervalId); 
                console.log('game over!');
                document.querySelector('.game-over').style.display = 'block';
            }
        } else if (targetCell.gameElement === GLUE) {
            gIsGlued = true;
            setTimeout(function() {gIsGlued = false; }, 3000);
        } 
        // else if (gBoard[gGamerPos.i][gGamerPos.j].type === PASSAGE ) {
        //     switch ()
        // }

        // MOVING from current position
        // Model:
        gBoard[gGamerPos.i][gGamerPos.j].gameElement = null;
        // Dom:
        renderCell(gGamerPos, '');

        // MOVING to selected position
        // Model:
        gGamerPos.i = i;
        gGamerPos.j = j;
        gBoard[gGamerPos.i][gGamerPos.j].gameElement = GAMER;
        // DOM:
        renderCell(gGamerPos, GAMER_IMG);

    } // else console.log('TOO FAR', iAbsDiff, jAbsDiff);

}

// Convert a location object {i, j} to a selector and render a value in that element
function renderCell(location, value) {
    var cellSelector = '.' + getClassName(location)
    var elCell = document.querySelector(cellSelector);
    elCell.innerHTML = value;
}

// Move the player by keyboard arrows
function handleKey(event) {

    var i = gGamerPos.i;
    var j = gGamerPos.j;


    switch (event.key) {
        case 'ArrowLeft':
            moveTo(i, j - 1);
            break;
        case 'ArrowRight':
            moveTo(i, j + 1);
            break;
        case 'ArrowUp':
            moveTo(i - 1, j);
            break;
        case 'ArrowDown':
            moveTo(i + 1, j);
            break;

    }

}

// Returns the class name for a specific cell
function getClassName(location) {
    var cellClass = 'cell-' + location.i + '-' + location.j;
    return cellClass;
}

function addNewBall() {
    var randomCell = getRandomEmptyCell();
    console.log('adding ball ', randomCell);
    gBoard[randomCell.i][randomCell.j].gameElement = BALL;//model
    gBallsPlaced++;//model
    renderCell(randomCell, BALL_IMG); //DOM

}

function removeGlue(location) {
    //only do this is the player is not in the square
   // debugger;
   console.log(gBoard[location.i][location.j]);
    if (gBoard[location.i][location.j].gameElement !== GAMER) {  //change to if it's gamer
        location.gameElement = null;
        renderCell(location, '');
        
    }
}
function addGlue() {
    var location = getRandomEmptyCell();
    console.log('adding glue');
    gBoard[location.i][location.j].gameElement = GLUE;//model
    renderCell(location, GLUE_IMG); //DOM
    
    setTimeout(removeGlue, 3000, location);
}



function getRandomEmptyCell() { //iterate over board and use array of empty cells
    var i = Math.floor(Math.random() * (gBoard.length - 2)) + 1;
    var j = Math.floor(Math.random() * (gBoard[0].length - 2)) + 1;
    while (gBoard[i][j].gameElement) {
        i = Math.floor(Math.random() * (gBoard.length - 2)) + 1;
        j = Math.floor(Math.random() * (gBoard[0].length - 2)) + 1;
    }

    return {i:i, j:j};
    
}