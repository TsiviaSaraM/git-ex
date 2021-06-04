'use strict'

function saveToStorage(KEY, val){
    var data = JSON.stringify(val);
    localStorage.setItem(KEY, data);
}

function loadFromStorage(KEY){
    var val = localStorage.getItem(KEY);
    return JSON.parse(val);
}