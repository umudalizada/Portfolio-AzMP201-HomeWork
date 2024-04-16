const checkElements = document.querySelectorAll('.check');

checkElements.forEach(checkElement => {
    checkElement.addEventListener('click', () => {
        const textExists = checkElement.querySelector('ul');
        if (textExists) {
            textExists.remove();
        } else {
            const pDiv = document.createElement("ul");
            const pElement = document.createElement("li");
            pElement.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.";
            pElement.style.listStyle="none"
            pDiv.appendChild(pElement); 
            checkElement.appendChild(pDiv);
        }
    });
});

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todolist");
const deleteAllBtn = document.getElementById("delete-all-btn");

const todos = [];

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
        todos.push(todoText);
        todoInput.value = "";
        renderTodos();
    }
});

function renderTodos() {
    todoList.innerHTML = "";
    
    todos.forEach((todo, index) => {
        const todoItem = document.createElement("li");
        todoItem.className = "todo-item";
        todoItem.textContent = todo;
        const editIcons = document.createElement("div");
        const editIcon = document.createElement("i");
        editIcon.className = "fas fa-marker";
        editIcon.addEventListener("click", () => {
            const editText = prompt("Edit your todo:", todo);
            if (editText !== null) {
                todos[index] = editText.trim();
                renderTodos();
            }
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            todos.splice(index, 1);
            renderTodos();
        });

        todoItem.appendChild(editIcons);
        editIcons.append(editIcon,deleteBtn)
        todoList.appendChild(todoItem);
    });
}

deleteAllBtn.addEventListener("click", () => {
    todos.length = 0;
    renderTodos();
});

renderTodos();