'use strict'

function getAnswerData(onSuccess) {
    $.get("https://yesno.wtf/api", function(data){
        console.log(data);
        onSuccess(data.answer);
        if(data['answer'] === "yes") {
            getJoke()
        } else if (data['answer'] === "no") {
            //give random dog
            getDog();
        }

    })
}



// getJoke(renderJoke)

function getJoke(onSuccess) {
    document.querySelector('.dog').hidden = true;
    $.get("http://api.icndb.com/jokes/random", function(joke){
        console.log(joke['value']['joke']);
        var elJoke = document.querySelector('.joke');
        elJoke.hidden = false;
        elJoke.innerText = joke['value']['joke'];
    })
}

function getDog(){
    document.querySelector('.joke').hidden = true
    $.get("https://dog.ceo/api/breeds/image/random", function(dog){
        console.log(dog.message);
        document.querySelector('.dog').hidden = false
        var elDog = document.querySelector('.dog');
        elDog.hidden = false;
        elDog.src = dog.message;
    })
}



// function renderDog() {

// }

// function renderJoke() {
//     console.log('rendering joke...');
// }



// getAnswerData();