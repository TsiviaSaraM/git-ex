'use strict'
var gMenuShown = false;

function showMenu() {
    gMenuShown = !gMenuShown;

    if (gMenuShown) {

        var elMenu = document.querySelector('.menu');
        elMenu.style.display = 'flex';
        
        if (window.innerWidth < 500) {

            // elThumbnails.style.display = 'none';
        } 
    }
    
    else {
        var elMenu = document.querySelector('.menu');
        elMenu.style.display = 'none';
    }



}