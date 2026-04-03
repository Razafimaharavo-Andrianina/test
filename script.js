const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

function addTask() {
    taskText = input.value.trim();
    if ( taskText == "" ) return;
    const li = document.createElement("li");
    li.innerHTML = `${taskText} <span onclick = "removeTask(THIS)">X</span>`;
    list.appendChild(li);
    input.value = ""; 
}
//to store the data in the browser
list.innerHTML = localStorage.getItem("tasks");
function saveTasks() {
    localStorage.setItem("tasks", list.innerHTML);
}

input.addEventListener("keypress",function(e){
    if (e.key ==="Enter") addTask();
    saveTasks();
});

function removeTask(span) {
    span.parentElement.remove();
}

list.addEventListener("click", function(e) {
    if ( e.target.tagName === "SPAN") { 
        removeTask(e.target);
    }
    if ( e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
    saveTasks();
})