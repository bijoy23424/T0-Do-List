function addTask(){
    const newTask = document.createElement("li");
    const taskList = document.querySelector(".task-list");
    taskList.appendChild(newTask);
    newTask.textContent = document.querySelector("#input-task").value;
     document.querySelector("#input-task").value = "";
     deleteTask(newTask);
}
function deleteTask(newTask){
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    newTask.appendChild(deleteBtn);
    deleteBtn.onclick = function(){
        newTask.remove()
    }
}