const KEY = 'questTree';

var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;

function createQuestsTree() {
    gQuestsTree = loadFromStorage(KEY);
    if (!gQuestsTree){
        gQuestsTree = createQuest('Male?');
        gQuestsTree.yes = createQuest('Gandhi');
        gQuestsTree.no = createQuest('Rita');
        saveToStorage(KEY, [gQuestsTree]);
    } else gQuestsTree = gQuestsTree[0];
    
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    // TODO: update the gPrevQuest, gCurrQuest global vars DONE
    gPrevQuest = gCurrQuest;
    gCurrQuest = gPrevQuest[res];
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
    // TODO: Create and Connect the 2 Quests to the quetsions tree DONE
    var newQuest = createQuest(newQuestTxt);
    debugger;
    // lastRes.no === gCurrQuest ? lastRes.no = newQuest : lastRes.yes = newQuest;
    gPrevQuest[lastRes] = newQuest;
    newQuest.yes = createQuest(newGuessTxt);
    newQuest.no = gCurrQuest;
    console.log(gQuestsTree);
    saveToStorage(KEY, [gQuestsTree]);
}

function getCurrQuest(){
    return gCurrQuest
}


