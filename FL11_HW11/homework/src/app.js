let rootNode = document.getElementById('root');

const MAX_WIDTH = 100;
const MAX_ITEMS = 10;
const VALUE_SIZE = MAX_WIDTH / MAX_ITEMS;
const THIRD_ELEM = 2;
const FOURTH_ELEM = 3;
const FIFTH_ELEM = 4;
const SIXTH_ELEM = 5;
let inputDisabled = false;

const todoList = document.getElementById('todo-list');
const addNewTodoInput = document.getElementById('new-todo-text');
const addNewTodoButton = document.getElementById('add-button');
const progress = document.getElementById('progress');

function createCheckBox() {
  const check = document.createElement('button');
  check.className = 'check-blank';
  check.addEventListener('click', checkTodo);
  check.innerHTML = `<i class='material-icons'>check_box_outline_blank</i>`;
  return check;
}

function createTodoTitle(text) {
  const title = document.createElement('input');
  title.className = 'todo-title';
  title.value = text;
  return title;
}

function createTodoText(text) {
  const todoText = document.createElement('p');
  todoText.className = 'todo-text';
  todoText.innerHTML = text;
  return todoText;
}

function createButton(className, iconText, func) {
  const button = document.createElement('button');
  const icon = document.createElement('i');
  icon.className = 'material-icons';
  icon.innerHTML = iconText;
  button.className = className;
  button.addEventListener('click', func);
  button.appendChild(icon);
  return button;
}

function createListItem(text) {
  const li = document.createElement('li');
  li.className = 'todo-item';
  li.setAttribute('draggable', 'true');
  li.appendChild(createCheckBox());
  li.appendChild(createTodoTitle(text));
  li.appendChild(createTodoText(text));
  li.appendChild(createButton('edit-todo', 'edit', updateTodo));
  li.appendChild(createButton('save-todo', 'save', saveTodo));
  li.appendChild(createButton('remove-todo', 'delete', removeTodo));
  return li;
}

function createNotification() {
  const notification = document.createElement('div');
  notification.setAttribute('id', 'notification');
  notification.innerHTML = 'Maximum item per list are created';
  return notification;
}

function checkTodo() {
  this.children[0].innerHTML = 'check_box';
}

function addNewTodo(e) {
  e.preventDefault();
  const todoText = addNewTodoInput.value;
  if (todoText.trim() && todoList.childElementCount < MAX_ITEMS + 1) {
    const item = createListItem(todoText);
    addDnDHandlers(item);
    todoList.appendChild(item);
    addNewTodoInput.value = '';
    progress.style.width = `${todoList.childElementCount * VALUE_SIZE}%`;
  }

  if (todoList.children.length === MAX_ITEMS) {
    if (!inputDisabled) {
      todoList.parentElement.insertBefore(createNotification(), todoList);
    }
    addNewTodoInput.setAttribute('disabled', '');
    addNewTodoInput.setAttribute('placeholder', 'Disabled');
    inputDisabled = true;
  }
}

function saveTodo() {
  this.parentNode.children[0].style.display = 'inline';
  this.parentNode.children[1].style.display = 'none';
  this.parentNode.children[THIRD_ELEM].style.display = 'inline';
  this.parentNode.children[FOURTH_ELEM].style.display = 'inline';
  this.parentNode.children[FIFTH_ELEM].style.display = 'none';
  this.parentNode.children[SIXTH_ELEM].style.display = 'inline';
  if (this.parentNode.children[1].value.trim().length > 0) {
    this.parentNode.children[THIRD_ELEM].innerHTML = this.parentNode.children[1].value;
  }
}

function updateTodo() {
  this.parentNode.children[0].style.display = 'none';
  this.parentNode.children[1].style.display = 'inline';
  this.parentNode.children[THIRD_ELEM].style.display = 'none';
  this.parentNode.children[FOURTH_ELEM].style.display = 'none';
  this.parentNode.children[FIFTH_ELEM].style.display = 'inline';
  this.parentNode.children[SIXTH_ELEM].style.display = 'none';
}

function removeTodo() {
  const currentListItem = this.parentNode;
  this.parentNode.parentNode.removeChild(currentListItem);
  progress.style.width = `${todoList.childElementCount * VALUE_SIZE}%`;
  if (todoList.children.length === MAX_ITEMS - 1) {
    addNewTodoInput.removeAttribute('disabled');
    addNewTodoInput.setAttribute('placeholder', 'Add new todo');
    document.getElementById('notification').remove();
    inputDisabled = false;
  }
}

addNewTodoButton.addEventListener('click', addNewTodo);

let dragSrcEl = null;

function handleDragStart(e) {
  this.style.border = 'none';
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.outerHTML);
  this.classList.add('dragElem');
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  this.style.border = '1px solid #00f1ff';
  this.classList.add('over');
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDragEnter() {
  this.style.border = '1px solid #00f1ff';
}

function handleDragLeave() {
  this.style.border = 'none';
  this.classList.remove('over');
}

function handleDrop(e) {
  this.style.border = 'none';
  if (e.stopPropagation) {
    e.stopPropagation();
  }

  if (dragSrcEl !== this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  this.classList.remove('over');
  return false;
}

function handleDragEnd() {
  this.style.border = 'none';
  this.classList.remove('over');
}

function addDnDHandlers(elem) {
  elem.addEventListener('dragstart', handleDragStart, false);
  elem.addEventListener('dragenter', handleDragEnter, false);
  elem.addEventListener('dragover', handleDragOver, false);
  elem.addEventListener('dragleave', handleDragLeave, false);
  elem.addEventListener('drop', handleDrop, false);
  elem.addEventListener('dragend', handleDragEnd, false);
}
