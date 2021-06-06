'use strict'

var gCurrBookId;
var gCurrBook;

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
        <td><button data-trans="btn-read" class="read" onclick="onReadBook(${book.id})" >Read</button></td>
        <td><button data-trans="btn-update" class="update" onclick="onUpdateBook(${book.id}, 'PRICE')">Update</button></td>
        <td><button data-trans="btn-delete" class="delete" onclick="onRemoveBook(${book.id})">Delete</button></td>
        </tr>`
    }

    document.querySelector('tbody').innerHTML = strHTML;
     document.querySelector('.buttons').innerHTML = btnsHTML;
     doTrans();
    
    //renderPageButtons();
}
function renderBook(){
    // var bookId =window.name;
    // debugger;
    
    
    var strHTML =
        `<h1 data-trans="book-title">${gCurrBook.name}</h1>
            <img src="${gCurrBook.photo}" alt="">`

    
    

    document.querySelector('table').style.display = 'none';
    document.querySelector('.readbook').style.display = 'block';
    document.querySelector('.book-info').innerHTML = strHTML;
    debugger;
    document.querySelector('.rating p').innerHTML = `${gCurrBook.rating}`;
}

function showAddBookForm(){
    document.querySelector('.addbook').style.display = 'block';
}


function onCloseBook() {
    console.log('closing book');
    document.querySelector('.readbook').style.display = 'none';
    document.querySelector('table').style.display = 'inline';
}

function onRemoveBook(bookId) {
    removeBook(bookId);
    renderBooks();
}

function onUpdateBook(bookId) {
    var bookPrice = +prompt('price?');
    updatePrice(bookId, bookPrice);
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
    gCurrBook = getBookById(bookId);
    renderBook(bookId)
}

function onUpdateRating(difference) {
    updateRating(difference);
     renderBook();
}

function onChoosePage(pageNumber) {
    choosePage(pageNumber);
    renderBooks();
}

function onSetFilter(txt) {
    setFilter({txt:txt});
    renderBooks();
}

function onSetLang(lang) {
    console.log('lets set the lang...');
    if (lang === 'he') document.body.classList.add('rtl')
    else document.body.classList.remove('rtl')
    setLang(lang);
    doTrans();
    // renderBooks();
    
}

function onSortBy(attribute) {
    sortBy(attribute);
    renderBooks();
}