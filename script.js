const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const taskTableBody = document.getElementById('taskTableBody');

addTaskButton.addEventListener('click', function (e) {
    e.preventDefault();

    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const newRow = document.createElement('tr');

    const taskCell = document.createElement('td');
    taskCell.textContent = taskText;
    taskCell.style.fontWeight = "bold";
    taskCell.style.color = "black";

    const actionsCell = document.createElement('td');
    const doneButton = document.createElement('button');
    doneButton.textContent = "Mark done";

    doneButton.addEventListener('click', function () {
        const isDone = doneButton.textContent === "Mark done";

        if (isDone) {
            taskCell.style.color = "grey";
            taskCell.style.fontWeight = "normal";
            taskCell.style.fontSize = "smaller";
            doneButton.textContent = "Undone";
        } else {
            taskCell.style.color = "black";
            taskCell.style.fontWeight = "bold";
            taskCell.style.fontSize = "initial";
            doneButton.textContent = "Mark done";
        }
    });

    actionsCell.appendChild(doneButton);

    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', function () {
        taskTableBody.removeChild(newRow);
    });
    deleteCell.appendChild(deleteButton);

    newRow.appendChild(taskCell);
    newRow.appendChild(actionsCell);
    newRow.appendChild(deleteCell);

    taskTableBody.appendChild(newRow);

    taskInput.value = "";
});
