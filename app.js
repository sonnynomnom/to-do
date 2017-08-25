// storage for the todos
var items = [];

// grab elements we need
var itemList = document.getElementById('todo-list');
var itemInput = document.getElementById('todo-input');

function addTodo() {

  // get the input's value
  var todoText = itemInput.value;

  // add to the storage array
  items.push(todoText);

  // clear the input's value
  itemInput.value = '';

  renderTodoList();

  console.log('Hey the function is working!');

}

function removeTodo(index) {

  // remove the todo from storage
  items.splice(index, 1);

  renderTodoList();

}

function renderTodoList() {

  // clear the list-style
  itemList.innerHTML = '';

  // loop through the storage array and add elements to the page
  for (var i = 0; i < items.length; i++) {

    var newTodo = document.createElement('li');
    newTodo.id = 'item-' + (i).toString();
    newTodo.innerText = items[i];

    appendOptionButtons(i, newTodo);
    itemList.appendChild(newTodo);

  }

  console.log('Storage array: ', items);

}

function appendOptionButtons(index, item) {

  // functionality to delete the todo
  var deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'X';
  deleteButton.onclick = function() {
    removeTodo(index);
  }

  // functionality to edit the todo
  var editButton = document.createElement('button');
  editButton.id = 'edit-item-' + index;
  editButton.innerHTML = 'Edit';
  editButton.onclick = function() {
    addEditField('item-' + (index).toString());
  }

  // append option buttons to the todo
  item.appendChild(deleteButton);
  item.appendChild(editButton);

}

function addEditField(id) {

  // grab the todo that we want to edit
  var itemToEdit = document.getElementById(id);

  // disable the edit button so that you cant keep pressing it
  document.getElementById('edit-' + id).disabled = true;

  // create a new input where we can update the todo
  var editInput = document.createElement('input');
  editInput.type = "text";
  editInput.id = 'edit-input-' + id;
  editInput.className = 'edit-input';
  editInput.placeholder = "Edit Task";

  // create a new button to submit changes
  var editButton = document.createElement('button');
  editButton.innerHTML = "Update";
  editButton.onclick = function() {
    updateTodo(id);
  }

  // add the input and button to the DOM
  itemToEdit.appendChild(editInput);
  itemToEdit.appendChild(editButton);

}

function updateTodo(id) {

  var index = id.split('-')[1];

  var editInput = document.getElementById('edit-input-' + id);

  items[index] = editInput.value;

  renderTodoList();

}
