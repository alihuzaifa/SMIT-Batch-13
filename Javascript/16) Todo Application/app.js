var inputEl = document.getElementById("todo");
var listEl = document.getElementById("list");
var btn = document.getElementById("btn");

var todos = [];
var editIndex = -1;

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function editTodo(index) {
  var element = todos[index];
  inputEl.value = element;
  editIndex = index;
  btn.innerHTML = "Update Todo";
}

function renderTodos() {
  listEl.innerHTML = "";
  for (var index = 0; index < todos.length; index++) {
    var item = todos[index];
    listEl.innerHTML += `<div class="item">
      <p>${item}</p>
      <button onclick="deleteTodo(${index})">Del</button>
      <button onclick="editTodo(${index})">Edit</button>
    </div>`;
  }
}

renderTodos();

function addTodo() {
  if (editIndex === -1) {
    // Add Todo
    if (inputEl.value === "") {
      alert("Please fill value");
    } else {
      todos.push(inputEl.value);
    }
  } else {
    // Edit Todo
    todos.splice(editIndex, 1, inputEl.value);
    btn.innerHTML = "Add Todo";
    editIndex = -1;
  }

  inputEl.value = "";
  renderTodos();
}
