'use strict'

var gCurrBookId;

function onInit() {
    renderBooks();
    // renderPageButtons();
}

function renderPageButtons() {
    var strHTML = '';
    var num_pages = Math.ceil(gBooks.length / PAGE_SIZE);


    strHTML += `<button onclick="onChoosePage(${gPageIndx - 1})"><</button>`;
    for (var i = 0; i < num_pages; i++) {
        strHTML += `<button onclick="onChoosePage(${i})">${i+1}</button>`
    }
    strHTML += `<button onclick="onChoosePage(${gPageIndx+1})">></button>`
    document.querySelector('.buttons').innerHTML = strHTML;
}

function renderBooks() {
    //debugger;
    var books = GetBooksForDisplay();
    var strHTML = '';

    //render the buttons
    var btnsHTML = '';
    btnsHTML += `<button onclick="onChoosePage(${gPageIndx - 1})"><</button>`;
    for (var i = 0; i < gNumPages; i++) {
        btnsHTML += `<button onclick="onChoosePage(${i})">${i+1}</button>`
    }
    btnsHTML += `<button onclick="onChoosePage(${gPageIndx+1})">></button>`
    
    
    //render the books in the table
    for (var i = 0; i < books.length; i++) {
        var book = books[i];
        strHTML +=         
        `<tr>
        <td>${book.id}</td>
        <td>${book.name}</td>
        <td>${book.price}</td>
        <td><button class="read" onclick="onReadBook(${book.id})" >Read</button></td>
        <td><button class="update" onclick="onUpdateBook(${book.id}, 'PRICE')">Update</button></td>
        <td><button class="delete" onclick="onRemoveBook(${book.id})">Delete</button></td>
        </tr>`
    }

    document.querySelector('tbody').innerHTML = strHTML;
     document.querySelector('.buttons').innerHTML = btnsHTML;
    
    //renderPageButtons();
}
function renderBook(bookId){
    // var bookId =window.name;
    var book = getBookById(bookId);
    
    var strHTML =
    `<h1>${book.name}</h1>
    <img src="${book.photo}" alt="">`;
    

    document.querySelector('table').style.display = 'none';
    document.querySelector('.bookbox').style.display = 'block';
    document.querySelector('.book').innerHTML = strHTML;
    debugger;
    document.querySelector('.rating p').innerHTML = `${book.rating}`;
}

function showAddBookForm(){
    document.querySelector('.addbook').style.display = 'block';
}


function onCloseBook() {
    console.log('closing book');
    document.querySelector('.readbook').style.display = 'none';
}

function onRemoveBook(bookId) {
    removeBook(bookId);
    renderBooks();
}

function onUpdateBook(bookId, attributetoUpdate) {
    var bookPrice = +prompt('price?');
    updateBook(bookId, bookPrice, attributetoUpdate);
    renderBooks();
}

function onAddBook(ev) {
    ev.preventDefault();
    var name = document.querySelector('input[name=title]').value;
    var price = document.querySelector('input[name=price]').value;
    var image = document.querySelector('input[name=image]').value;
    addBook(name, price, image);

    document.querySelector('.addbook').style.display = 'none';
    renderBooks();
}

function onReadBook(bookId) {
    document.querySelector('.readbook').style.display = 'block';
}

function onUpdateRating(difference) {
    if (!updateBook(difference, 'RATING')) {
        alert('this is an invalid rating. rating must be between 0 and 10');
        return;
    }

    renderBook(gCurrBookId);
}

function onChoosePage(pageNumber) {
    choosePage(pageNumber);
    renderBooks();
}

function onSetFilter(txt) {
    setFilter({txt:txt});
    renderBooks();
}