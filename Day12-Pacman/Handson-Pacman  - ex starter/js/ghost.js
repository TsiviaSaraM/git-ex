'use strict'
const GHOST = '&#9781;';
//const DEFEAT = 0;

var gGhosts = []
var gIntervalGhosts;
var gDeadGhosts = []

function createGhost(board) {
    var ghost = {
        location: {
            i: 3,
            j: 3
        },
        currCellContent: FOOD,
        color: getRandomColor() 
    }
    console.log(ghost.color);
    gGhosts.push(ghost);
    board[ghost.location.i][ghost.location.j] = GHOST
}

function createGhosts(board) {
    gGhosts = [];
    createGhost(board)
    createGhost(board)
    createGhost(board)
    // createGhost(board)
    // createGhost(board)
    // createGhost(board)
    // createGhost(board)
    // createGhost(board)
    // createGhost(board)
    gIntervalGhosts = setInterval(moveGhosts, 1000)
}


function moveGhosts() {
    for (var i = 0; i < gGhosts.length; i++) {
        var ghost = gGhosts[i];
        moveGhost(ghost)
    }
}
function moveGhost(ghost) {
    var moveDiff = getMoveDiff();
    var nextLocation = {
        i: ghost.location.i + moveDiff.i,
        j: ghost.location.j + moveDiff.j
    }
    var nextCell = gBoard[nextLocation.i][nextLocation.j]
    if (nextCell === WALL) return;
    if (nextCell === GHOST) return;
    if (nextCell === PACMAN) { 
        console.log("here");
        if (gPacman.isSuper) {
            killGhost(nextLocation);
            return;
        } else {
            gameOver(DEFEAT);
            return;
        }

    }

    // model
    gBoard[ghost.location.i][ghost.location.j] = ghost.currCellContent
    // dom
    renderCell(ghost.location, ghost.currCellContent)

    // model
    ghost.location = nextLocation;
    ghost.currCellContent = nextCell;
    gBoard[ghost.location.i][ghost.location.j] = GHOST;
    // dom
    renderCell(ghost.location, getGhostHTML(ghost))
}

function getMoveDiff() {
    var randNum = getRandomIntInt(0, 100);
    if (randNum < 25) {
        return { i: 0, j: 1 }
    } else if (randNum < 50) {
        return { i: -1, j: 0 }
    } else if (randNum < 75) {
        return { i: 0, j: -1 }
    } else {
        return { i: 1, j: 0 }
    }
}


function getGhostHTML(ghost) {
    
    var color = gPacman.isSuper ? 'blue' : ghost.color;
    return `<span style="color:${color}" >${GHOST}</span>`;
}

// function updateGhostColors() {
//     console.log("heupdating colors");
//     var oldGhosts = gGhosts.slice();
//     var ghostColors = [];
//     for (var i = 0; i < gGhosts.length; i++) {
//         ghostColors.push(gGhosts[i].color);
//         gGhosts[i].color = 'blue';
//         renderCell(gGhosts[i].location, getGhostHTML(gGhosts[i]));
        
//     }
//     // change color back
//     setTimeout(function(){
//         for (var i = 0; i < gGhosts.length; i++) {
//             gGhosts[i].color = ghostColors[i];
//             renderCell(gGhosts[i].location, getGhostHTML(gGhosts[i]));           
//         }
//     },       
//     5000)
// }

function killGhost(location) {
    //debugger;
    for (var i = 0; i < gGhosts.length; i++) {
        if (gGhosts[i].location.i === location.i && gGhosts[i].location.j === location.j) {
            console.log("found the dead ghost");
            gDeadGhosts.push(gGhosts.splice(i, 1)[0]);
            console.log(gDeadGhosts);
            console.log(gGhosts);
            //no need to remove ghost from DOM, it'll be dont in paceman file
        }
    }
}
