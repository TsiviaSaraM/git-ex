var gBoard = createBoard(3,4);
console.table(gBoard);
console.log(countNeighbours({row:1,col:1}), ' neighbours');
gBoard[0][1] = 'x';
console.table(gBoard);
console.log(countNeighbours({row:1,col:1}), ' neighbours');
runGeneration(gBoard);
console.table(gBoard);
runGeneration(gBoard);
renderBoard(gBoard);

function createBoard(width, height) {
    var board = [];
    for (var i = 0; i < width; i++) {
        var row = [];
        for (var j = 0; j < height; j++) {
            row.push();
        }
        board.push(row);
    }

    //fill randomly
    for (var i = 0; i < width; i++) {
        for (var j = 0; j < height; j++) {
            board[i][j] = Math.random() < 0.5 ? '' : 'x';
        }
    }
    return board;
}

function init() {
    gBoard = createBoard(2, 3);

}

function runGeneration(gBoard) {
    var newBoard = gBoard.slice();
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard[0].length; j++) {
            var totalNeighbours = countNeighbours({row: i,col: j});

            switch (totalNeighbours) {
                case 0:
                case 1:
                case 2:
                    newBoard[i][j] = '';
                    break;
                case 3:
                case 4:
                case 5:
                    newBoard[i][j] = 'x';
                    break;
                case 7:
                case 8:
                case 9:
                    newBoard[i][j] = '';
                    break;
                            
            }
        }
    }

    gBoard = newBoard.slice();
    return gBoard;
}

function countNeighbours(pos) {
    var count = 0;
    for (var i = pos.row - 1; i <= pos.row + 1; i++) {
        if (i < 0 || i > gBoard.length - 1) continue;
        for (var j = pos.col - 1; j <= pos.col + 1; j++) {
            //console.log(i,j);
            if (i === pos.row && j === pos.col) continue;
            if (j < 0 || j > gBoard.length) continue;
            if (gBoard[i][j] !== '') count++;
        }
    }
    return count;
}

function play() {
    gBoard = runGeneration(gBoard);
    renderBoard(gBoard);
}

function renderBoard(gBoard) {
    console.table(gBoard);
}