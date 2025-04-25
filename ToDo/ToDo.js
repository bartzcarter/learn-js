const inputBox = document.getElementById("task-input");
document.getElementById("add").addEventListener('click', add);


function add() {
    if (inputBox.value === "") {return}
    const ul = document.getElementById("todo-list");
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";
    li.textContent = inputBox.value;

    li.appendChild(deleteBtn);
    ul.appendChild(li);

    deleteBtn.addEventListener("click", handleDelete);
    inputBox.value = "";
}

function handleDelete(event) {
    const li = event.target.parentElement;
    li.remove();
}