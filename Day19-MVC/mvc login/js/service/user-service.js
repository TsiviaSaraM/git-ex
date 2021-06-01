'use strict'

console.log('user page loaded');

var USERS_KEY = 'usersDB';
var LOGGEDIN_KEY = 'currUser';

var gId=1;
var gUsers = _createUsers();

//returns users by the current sorting
function getUsersToShow(sorting){
    sortUsers(sorting);
    return gUsers;
}

function sortUsers(sorting){
    
    gUsers.sort(function(user1, user2){
        
        if (sorting === 'LAST_LOGIN') return user1.lastLoginTime - user2.lastLoginTime;
        else if (sorting === 'NAME') return user1.userName.localeCompare(user2.userName);
    });
    
}

//saves loggin user to local storage
//returns user id, or 0 if user not found
function loginUser(username, password){
    var user = gUsers.find(function(user){
        return user.userName === username && user.password === password;
    });

    if (!user) return 0;
    saveToStorage(LOGGEDIN_KEY, user);
    user.lastLoginTime = new Date();
    return user.id;
}

function isAdmin(){
    var user = loadFromStorage(LOGGEDIN_KEY);
    if (!user) return false;
    return user.isAdmin;
}

function logoutUser(){
    removeFromStorage(LOGGEDIN_KEY);
}

//the function should return the user object if found or null if not (HINT: use array.find)
//If the user successfully log-in, update his lastLoginDate
function doLogin(userName, password){

}

function _createUsers() {
    var users = loadFromStorage(USERS_KEY);
    if (!users || !users.length) {
        users = []
        users.push(_createUser('fred', '123', true));
        users.push(_createUser('chaim', '234', false));
        users.push(_createUser('mouse', '345', false));
    }

    return users;
}


function _createUser(name, password, isAdmin) {
    return {
        id: gId++,
        userName: name,
        password: password,
        lastLoginTime: new Date(),
        isAdmin: isAdmin
    };
}

function _saveUsers(){
    saveToStorage(USERS_KEY, gUsers);
}