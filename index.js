const form = document.querySelector('form');
const input = document.querySelector('input');
const todos = document.querySelector('.todos');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const newTodo = document.createElement('li');
  const todoText = document.createTextNode(input.value);
  newTodo.appendChild(todoText);
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.innerText = 'Delete';
  newTodo.appendChild(deleteBtn);
  todos.appendChild(newTodo);
  input.value = '';
});

todos.addEventListener('click', function(e) {
  if (e.target.classList.contains('delete-btn')) {
    e.target.parentElement.remove();
  }
});
