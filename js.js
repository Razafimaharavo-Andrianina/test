const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
list.innerHTML = localStorage.getItem("tasks");
function addTask(){
    const tasktext = input.value.trim();
    if (tasktext ==="") return;
    const li = document.createElement("li");
    li.innerHTML = `${tasktext}<span onclick="removeTask(this)">x</span>`;
    /*li.addEventListener("click", function(e){
        if (e.target.tagName !== "SPAN") 
            this.classList.toggle("done");
        saveTasks();
    });*/
    list.appendChild(li);
    input.value="";    
    saveTasks();
}

function removeTask(span) {
    span.parentElement.remove();
    saveTasks();
}
function saveTasks(){
    localStorage.setItem("tasks", list.innerHTML);
}
 
input.addEventListener("keypress", function(e){
    if (e.key === "Enter") addTask();
});
list.addEventListener("click", function(e){

    if (e.target.tagName === "SPAN") {
        removeTask(e.target);
        return;
    }

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
        saveTasks();
    }

});