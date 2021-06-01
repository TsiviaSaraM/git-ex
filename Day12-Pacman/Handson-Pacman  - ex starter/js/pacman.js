'use strict'
const PACMAN = '😷';
const VICTORY = true;
const DEFEAT = false;
const SAFE_GHOST_COLOR = 'blue';

var gPacman;

function createPacman(board) {
    gPacman = {
        location: {
            i: 3,
            j: 5
        },
        isSuper: false
    }
    board[gPacman.location.i][gPacman.location.j] = PACMAN
}

function movePacman(ev) {
    
    if (!gGame.isOn) return;
    // console.log('ev', ev);
    var nextLocation = getNextLocation(ev) //model
    
    if (!nextLocation) return; //model
    // console.log('nextLocation', nextLocation);
    
    var nextCell = gBoard[nextLocation.i][nextLocation.j]; //model
    // console.log('NEXT CELL', nextCell);
    
    if (nextCell === WALL) return; //model
    if (nextCell === GHOST) { //model
        if (gPacman.isSuper) {
            console.log("super went into ghost");
            //clearInterval(gIntervalGhosts);
            killGhost(nextLocation);
            //debugger;
        } else {
            gameOver(DEFEAT);
            renderCell(gPacman.location, EMPTY)
            return;
            
        }
        
    } else if (nextCell === FOOD || nextCell === POWER_FOOD) updateScore(1)
    else if (nextCell === CHERRY) updateScore(10);
    if (nextCell === POWER_FOOD) eatSuperFood(nextLocation);
    // update the model
    gBoard[gPacman.location.i][gPacman.location.j] = EMPTY;
    gFoodCount--;
    
    // update the dom
    renderCell(gPacman.location, EMPTY);
    
    //if all food is gone then victorious

    // if (gFoodCount <= 0) {
        //     gameOver(VICTORY);
        // }
        
        gPacman.location = nextLocation;
        
        // update the model
        gBoard[gPacman.location.i][gPacman.location.j] = PACMAN;
        // update the dom
        renderCell(gPacman.location, PACMAN);
        
        
    }


function getNextLocation(eventKeyboard) {
    var nextLocation = {
        i: gPacman.location.i,
        j: gPacman.location.j
    }
    switch (eventKeyboard.code) {
        case 'ArrowUp':
            nextLocation.i--;
            break;
        case 'ArrowDown':
            nextLocation.i++;
            break;
        case 'ArrowLeft':
            nextLocation.j--;
            break;
        case 'ArrowRight':
            nextLocation.j++;
            break;
        default:
            return null;
    }
    return nextLocation;
}