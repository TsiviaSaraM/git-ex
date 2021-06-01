'use strict'
// IMAGES
// 1-elephant
// 2-butterfly
// 3-wolf
// 4-turtle
// 5-fox
var gCurrQuest = 0;
var gQuests;

function init() {
    //log('init');
    gCurrQuest = 0;
    gQuests = createQuests();
    gCurrQuest = 0;
    renderQuest(gQuests);
}

function createQuest(correctOptIndex, opts = ['elephant', 'butterfly', 'wolf', 'turtle']) {
    return {
        id:gCurrQuest++,
        opts:opts,
        correctOptIndex:correctOptIndex
    };
}

function createQuests() {
    return [createQuest(0), createQuest(1), createQuest(2), createQuest(3)];
}

function renderQuest(gQuests ) {
    
    //display the image
    document.querySelector('.question').src =`img/${gCurrQuest+1}.jpg`;
    
    
    //display the options
    var strHTML = '';
   // debugger;
    var currQuestOpts = gQuests[gCurrQuest].opts;
    for (var i = 0; i < currQuestOpts.length; i++) {
        strHTML += `<p onclick="checkAns(${i})">${currQuestOpts[i]}</p>`
    }
   // debugger;
    document.querySelector('.options').innerHTML = strHTML;
}

function renderOpts(gCurrQuest) {
    
    
}

function checkAns(optIndex) {
    //console.log('checking');
    var currQuest = gQuests[gCurrQuest];
    if (currQuest.correctOptIndex === optIndex) {
        gCurrQuest++;
    }

    //if game is over, show victory image and restart button and clear current question
    if (optIndex === gQuests.length - 1) {
        document.querySelector('.question').src =`img/victory.png`;
        document.querySelector('.options').innerHTML = '';
        document.querySelector('.restart').style.display = 'block';
    } else {
        //debugger;
        renderQuest(gQuests);
    }



    return 1;
}