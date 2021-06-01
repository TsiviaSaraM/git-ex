'use strict'

var gImages = {'fred': 'img/icon1.png', 'chaim': 'img/icon2.png', 'mouse': 'img/icon1.png'};
var gMode = 'IMG'; //IMG or TABLE

function onInit(){
    console.log('init function');
    confirmAdmin();
    renderUsers();
}

function changeMode(newMode){
    gMode = newMode;
    renderUsers();
}

function renderUsers(){
    console.log('rendering users');
    var strHTML = '';
    var users = getUsersToShow();
    console.log(users);
    strHTML = users.map(function(user){
        console.log(user);
        if (gMode === 'TABLE') {
            return `<tr>
            <td>${user.userName}</td>
            <td>${user.password}</td>
            <td>${user.lastLoginTime}</td>
            <td>${user.isAdmin}</td>
        </tr>`
        } else if (gMode === 'IMG') {
            return `<div>
                <p>${user.userName}</p>
                <img src="${gImages[user.userName]}" alt="img">
            </div>`
        }       
    });

    if (gMode === 'TABLE') {
        document.querySelector('.users-data').innerHTML = strHTML.join('');
        document.querySelector('.users-images').innerHTML = '';
    }
    else {
        document.querySelector('.users-images').innerHTML = strHTML.join('');
        document.querySelector('.users-data').innerHTML = '';
    }

}


//redirect user to index.html if he is not admin
function confirmAdmin(){
    if (!isAdmin()) window.location = 'index.html';
}

//show the secret login page
function goToSecretPage() {
    window.location = 'index.html';
}

function onSortBy(sorting){
    console.log(sorting);
    debugger;
    sortUsers(sorting);
    renderUsers();
}

