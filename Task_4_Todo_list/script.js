let todos = [];

function addTodo() {
  const todoInput = document.getElementById('todoInput');
  const todoText = todoInput.value.trim();

  if (todoText === '') {
    alert('Please enter a task.');
    return;
  }

  const todo = {
    text: todoText,
    completed: false
  };

  todos.push(todo);
  todoInput.value = '';

  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function updateTodo(index) {
  const newTask = prompt('Update the task:', todos[index].text);

  if (newTask === null || newTask.trim() === '') {
    alert('Task cannot be empty.');
    return;
  }

  todos[index].text = newTask;
  renderTodos();
}

function markAsCompleted(index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
}

function renderTodos() {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = '';

  todos.forEach((todo, index) => {
    const todoItem = document.createElement('li');
    todoItem.classList.toggle('completed', todo.completed);

    todoItem.innerHTML = `
      <span>${todo.text}</span>
      <div>
        <button class="mark-btn" onclick="markAsCompleted(${index})">${todo.completed ? 'Unmark' : 'Mark as Read'}</button>
        <button class="update-btn" onclick="updateTodo(${index})">Update</button>
        <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
      </div>
    `;

    todoList.appendChild(todoItem);
  });
}
