'use strict'

const DATA_KEY = 'data';
var gData;
var gForecasts = ['forecast1', 'forecast2', 'forecast3'];

function getData(){
    var gData = loadFromStorage(DATA_KEY);
    if (!gData || !gData.length) {
        gData.push({email:'123@gmail.cm', id: getRandomId()});
        gData.push({email:'456@gmail.cm', id: getRandomId()});
        gData.push({email:'789@gmail.cm', id: getRandomId()});
    }
}
//TODO finish this page
function onsubmitData(){
    
}