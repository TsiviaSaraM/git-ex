'use strict'
console.log('reading file...');
var gMenuShowing = false;



function onToggleMenu(elIcon) {
    console.log('toggling menu...');
    gMenuShowing = !gMenuShowing;
    var elNav = document.querySelector('.nav-main');
    if (gMenuShowing){
        // elNav.style.display = 'flex';
        elNav.classList.add('active');
        elIcon.innerText = 'X'
    } 
    else {
        // elNav.style.display = 'none';
        elIcon.innerText = '≡';
        elNav.classList.remove('active');
    }
    return;
}

function onReadMore(ev) {
    ev.preventDefault();
    console.log('reading more...');
    document.querySelector('.readmore').style.display = 'block';
}

function onClosModel(){

    document.querySelector('.readmore').style.display = 'none';
}