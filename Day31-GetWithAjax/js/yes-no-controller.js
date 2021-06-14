

function onInit() {
    // clearAnswer();
    // document.querySelector('.answer-container').hidden = true;
    // document.querySelector('.dog').hidden = true;
    // document.querySelector('.joke').hidden = true;
}

function onAskQuestion(text) {
    if (text.length < 3 || getLastChar(text) !== '?') return;
    getAnswerData(renderAnswer);
}

function renderAnswer(answer) {
    console.log('rendering answer...')
    var elAns = document.querySelector('.answer-container').hidden = false;
    document.querySelector('.answer').innerHTML = answer;
}

//TODO
// function checkAns(ans) {
//     //check if yes or no
    
//     renderAns(answer)

//     //check if yes or no
//     getDog(renderDog) or getJoke(renderJoke)


// }