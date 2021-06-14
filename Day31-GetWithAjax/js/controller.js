'use strict';
var gContacts;
console.log('123');

    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
            // document.querySelector('.contacts').innerText = httpRequest.responseText;
            gContacts = httpRequest.responseText;
            console.log(gContacts);
        }
    }
    httpRequest.open("GET","http://www.filltext.com/?rows=10&fname=%7bfirstName%7d&lname=%7blastName%7d&tel=%7bphone%7Cformat%7d&address=%7bstreetAddress%7d&city=%7bcity%7d&state=%7busState%7Cabbr%7d&zip=%7bzip%7d&pretty=true", true);
    httpRequest.send();



function onInit(){
    getContacts(renderContacts())
}

function getContacts(onSuccess) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
            // document.querySelector('.contacts').innerText = httpRequest.responseText;
            gContacts = httpRequest.responseText;
            console.log(gContacts);
            var preparedContacts = prepareContacts(contacts);
            onSuccess(preparedContacts);
        }
    }
    httpRequest.open("GET","http://www.filltext.com/?rows=10&fname=%7bfirstName%7d&lname=%7blastName%7d&tel=%7bphone%7Cformat%7d&address=%7bstreetAddress%7d&city=%7bcity%7d&state=%7busState%7Cabbr%7d&zip=%7bzip%7d&pretty=true", true);
    httpRequest.send();

}

function prepareContacts(contacts) {

}

function renderContacts() {
    var strHTML = '';

}