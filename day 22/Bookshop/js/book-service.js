'use strict'
const KEY = 'books';
const PAGE_SIZE = 6;

var gBooks =  _createBooks();
var gId = gBooks.length + 1;
var gPageIndx = 0;
var gFilter = {txt: ''}
var gNumPages;


// addBook('123', 4.5, "../img.photo2.jpeg");
// updateBook(5, 66);
// deleteBook(2);


//TODO add filter and sort
function GetBooksForDisplay() { 
    //if we are before the first page
    if (gPageIndx < 0) {
        gPageIndx = 0;
    }

    var regex = new RegExp(gFilter.txt, 'ig');
    var books = gBooks.filter(function(book){
        return regex.test(book.name);
    });

    gNumPages = Math.ceil(books.length / PAGE_SIZE);
    //if we are after the last page
    while (gPageIndx * PAGE_SIZE >= books.length) gPageIndx -= 1;

    var startIndx = Math.floor(gPageIndx * PAGE_SIZE);

    return books.slice(startIndx, startIndx + PAGE_SIZE);
}

function addBook(name, price, imageurl) {
    gBooks.push(_createBook(name, price, imageurl));
    _saveToStorage();
}

function removeBook(bookId) {
    var bookIdx = gBooks.findIndex(function(book){
        return book.id === bookId;
    });

    gBooks.splice(bookIdx, 1);
    saveToStorage();
}

//TODO readbook model
//TODO combine these 2 as 1 function with attributetoUpdate as a param

//returns the book updated
function updateBook(bookId, bookPrice, addributeToUpdate) {
    var book = getBookById(bookId)

    if (!book) return false;

    if (addributeToUpdate === 'PRICE') book.price = bookPrice;
    else if (addributeToUpdate === 'RATING') {
        book.rating += difference;
        if (book.rating < 0 || book.rating > 10) return 0;
    }
    return book;
}

//returns 0 if the rating cannot be updated
// function updateRating(bookId, difference) {
//     var book = getBookById(bookId);

//     if (!book) return 0;

    
//     return book;
// }

function getBookById(bookId) {
    return gBooks.find(function(book){
        return book.id === bookId;
    });
}


function _createBooks(){
    var books = loadFromStorage(KEY);
    if (!books || books.length === 0) {
        books = [];
        for (var i = 0; i < 10; i++) {
           books.push(_createBook("title "+i, 1.50));
        }
        _saveToStorage();
    } 
    
    console.log("books created", books);
    return books;
}

function _createBook(name, price, imageurl="../img/photo1.jpg") {
    return {
        id: gId++,
        name: name,
        price: price,
        photo: imageurl,
        rating: 0
    }
}

function _saveToStorage() {
    saveToStorage(KEY, gBooks);
}

function choosePage(pageNumber) {
    gPageIndx = pageNumber;
}

function setFilter(filterBy) {
    gFilter = filterBy;
    console.log(gFilter);
}

//TODO in sort use diff as 1 or minus 1
//add check that change of price is not 0