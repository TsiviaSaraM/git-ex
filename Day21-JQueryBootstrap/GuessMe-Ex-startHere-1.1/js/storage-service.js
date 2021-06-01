'use strict'

// function saveToStorage(KEY, value){
//     return localStorage.setItem(KEY, JSON.stringify(value));
// }

// function loadFromStorage(KEY){
//     return JSON.parse(localStorage.getItem(KEY));
// }



function loadFromStorage(key) {
        var val = localStorage.getItem(key);
        return JSON.parse(val);
    }

    function saveToStorage(key, val) {
        localStorage.setItem(key, JSON.stringify(val));
    }