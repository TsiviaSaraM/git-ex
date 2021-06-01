console.log('main page loaded');
//runs after user logs in, shows secret content, username and logout button
//hides login form
//save logged in user to local storage
//If the user is also an admin show him a link to admin.html
function onLogin(ev) {
    ev.preventDefault();
    console.log('logging in');

    var elUsername = document.querySelector('input[name=username]');
    var elPassword = document.querySelector('input[name=pw]');
    var userId = loginUser(elUsername.value, elPassword.value);

    if (!userId) {
        alert('login details invalid');
        return;
    }

    //TODO put all these in 1 div in html and work with that
    document.querySelector('.secret').style.display='block';
    document.querySelector('.login').style.display='none';
    // debugger;
    if (isAdmin()) document.querySelector('.admin').style.display='block';
}



//shows the login section again
//clears the localStorage
function onLogout(){
    logoutUser();
    document.querySelector('.secret').style.display='none';
    document.querySelector('.login').style.display='block';
}

function showAdminPage(){
    window.location = 'admin.html';
}


