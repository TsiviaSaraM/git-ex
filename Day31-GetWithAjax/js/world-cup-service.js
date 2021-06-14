'use strict'

const WEEK = 604800000;

var gTeams = {
    data: [],
    lastRes: 0,
};

function getTeams(){
    $.get('https://worldcup.sfg.io/teams/', function(teams){
        
        teams.forEach(team => {
            gTeams.data.push({
                country: team.country,
                fifa_code: team.fifa_code,
            })
            gTeams.lastRes = new Date();
        });
        renderTeams();

    })
    
}

function getGames(fifa_code){
    console.log('getting games...');
    var currTeam = gTeams.data.find(function(team){
        return team.fifa_code === fifa_code;
    })

    // if game is already in storage
    if (currTeam.games && Date.now() - gTeams.lastRes < WEEK) {
        renderGames(currTeam);
        return;
    }

    $.get(`https://worldcup.sfg.io/matches/country?fifa_code=${fifa_code}`, function(game){
        console.log(game);
        console.log(gTeams.data.find(function(team){
            return currTeam.fifa_code === fifa_code;
        }));

        currTeam.games = game;
        console.log(gTeams);
        renderGames(currTeam);
    });
}

