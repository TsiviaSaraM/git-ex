const STORAGE_KEY = 'todosDB';
var gFilterBy = 'ALL' // ALL DONE, ACTIVE
var gSort = {
    sortBy: 'CREATED',
    sortDirection: 'ASC'
}
// var gSortBy = 'CREATED' //TXT, CREATED, IMPORTANACE
var gTodos = _createTodos();


function getTodosForDisplay() {

    if (gFilterBy === 'ALL') return gTodos;
    var todos = gTodos.filter(function (todo) {
        return todo.isDone && gFilterBy === 'DONE' ||
            !todo.isDone && gFilterBy === 'ACTIVE'
    })
    return todos;
}

function SortTodos(sortBy){
    gSort.sortBy = sortBy;
    gTodos.sort(function(todo1, todo2){
        switch (sortBy) {
            case 'IMPORTANCE':
                return (todo1.importance - todo2.importance) 
               
            case 'TXT':
                return todo1.txt.localeCompare(todo2.txt);
            case 'CREATED':
                return todo1.createdAt - todo2.createdAt;
        }
    });
}

function toggleTodo(todoId) {
    var todo = gTodos.find(function (todo) { return todo.id === todoId })
    todo.isDone = !todo.isDone
    _saveTodosToStorage()
}
function removeTodo(todoId) {
    var idx = gTodos.findIndex(function (todo) { return todo.id === todoId })
    gTodos.splice(idx, 1)
    _saveTodosToStorage()

}
function addTodo(txt, importance) {
    var todo = _createTodo(txt, importance)
    gTodos.unshift(todo)
    _saveTodosToStorage()
}
function setFilter(filterBy) {
    gFilterBy = filterBy;
}

function getTodosCount() {
    return gTodos.length
}
function getActiveCount() {
    var activeTodos = gTodos.filter(function(todo){return !todo.isDone})
    return activeTodos.length;
}

function _saveTodosToStorage() {
    saveToStorage(STORAGE_KEY, gTodos)
}

function _createTodos() {
    var todos = loadFromStorage(STORAGE_KEY)
    if (!todos || !todos.length) {
        todos = [_createTodo('Learn CSS', '1'), _createTodo('Learn HTML', '3'), _createTodo('Learn JS', '2')]
        saveToStorage(STORAGE_KEY, todos)
    }
    return todos;
}

function _createTodo(txt, importance) { 
    var todo = {
        id: _makeId(),
        txt: txt,
        isDone: false,
        createdAt: Date.now(),
        importance: importance
    }
    return todo;
}

function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function updateSortDirection(direction) {
    if (direction !== gSort.sortDirection){
        gSort.sortDirection = direction;
        gTodos.reverse();
    }
}