'use strict'


function onInit() {
    console.log('Init');
    renderTodos();
}

function renderTodos() {

    var todos = getTodosForDisplay();
    var strHTMLs;

    var doneCount = getTodosCount() === getActiveCount()

    if (gFilterBy === 'ALL' && !getTodosCount()) document.querySelector('.todo-list').innerHTML = 'No todos';
    else if (gFilterBy === 'DONE' && doneCount) document.querySelector('.todo-list').innerHTML = 'No Done Todos';
    else if (gFilterBy === 'ACTIVE' && !getActiveCount()) document.querySelector('.todo-list').innerHTML = 'No Active Todos';
    else {
        strHTMLs = todos.map(function (todo) {
            var className = (todo.isDone) ? 'done' : '';
            
            return `
            <li class="${className}" onclick="onToggleTodo('${todo.id}')">
               ${todo.importance}: ${todo.txt} <span class="timestamp">Created at ${todo.createdAt}</span>
                <button onclick="onRemoveTodo('${todo.id}', event)">x</button>
            </li>`;
        });
        document.querySelector('.todo-list').innerHTML = strHTMLs.join('');
    }
    

    document.querySelector('.total-count').innerText = getTodosCount();
    document.querySelector('.active-count').innerText = getActiveCount();
    //TODO variables insead of functions
    
}

function onToggleTodo(todoId) {
    console.log('Toggling Todo:', todoId);
    toggleTodo(todoId);
    renderTodos();
}

function onRemoveTodo(todoId, ev) {
    ev.stopPropagation();
    
    if (confirm('are you sure you want to delete this?')) {
        console.log('Removing Todo:', todoId);
        removeTodo(todoId);
        renderTodos();
    }
}

function onAddTodo(ev) {
    ev.preventDefault();
    var elTxt = document.querySelector('input[name=todoTxt]');
    var elImportance = document.querySelector('select[name=importance]');
    //add validation
    if (!elTxt.value){
        alert('cannot add an empty toDO to the list');
        return;
    }

    console.log('Adding Todo:', elTxt.value, elImportance.value);
    addTodo(elTxt.value, elImportance.value);
    elTxt.value = '';
    renderTodos();
}


function onSetFilter(filterBy) {
    console.log('Filtering by', filterBy);
    setFilter(filterBy);
    renderTodos();
}

function onSortBy(sortBy) {
    debugger;
    console.log('sorting the list by', sortBy);
    SortTodos(sortBy);
    renderTodos();
}

function onSortDirection(direction){
    updateSortDirection(direction);
    renderTodos();
}


