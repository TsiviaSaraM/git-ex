'use strict'

function onInit(){
    getTeams();
    
    document.querySelector('.games-container').hidden = true;
    console.log('gTeams', gTeams);
}

function onShowGames(fifa_code){
    document.querySelector('.games-container').hidden = false;
    getGames(fifa_code);
    
}

function renderTeams() {
    document.querySelector('.teams').hidden = false;
    var strHTML = gTeams.data.map(function(team){
        return `<button onclick="onShowGames('${team.fifa_code}')" >${team.country}</button>`;
    }).join('');
    document.querySelector('.teams').innerHTML = strHTML;

}

function renderGames(team){
    console.log('rendering teams...');
    console.log(team);
    document.querySelector('.teams').hidden = true;
    var strHTML = team.games.map(function(game){
        return `
        <div class="game">
            <ul>
                <li>Time: ${game.datetime}</li>
                <li>venue: ${game.venue}</li>
                <li>result: ${game.winner} won</li>
            </ul>

        </div>`
    }).join('');
    console.log(strHTML);
    document.querySelector('.games-title').innerText = 'Games for ' + team.countrys
    document.querySelector('.games').innerHTML = strHTML;
}
