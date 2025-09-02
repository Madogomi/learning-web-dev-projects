function store() {
    localStorage.setItem("allCurrentTasks", `${document.getElementById("tasks").innerHTML}`);
    console.log("save");
}
const newTask = document.getElementById("newTask");

newTask.addEventListener("click", function (event) {
    event.preventDefault();
    newTask.classList.toggle("hidden");
    document.getElementById("addTask").classList.toggle("hidden");

})

const Task = (event) => {
    event.preventDefault();

    if (document.querySelector("input").value.trim() == "") {
        alert("Please Input a task");
        return;
    }

    const p = document.createElement("div");
    
    // Circle (O)
    const circle = document.createElement("b");
    circle.textContent = "O";
    p.appendChild(circle);

    // Task text
    const text = document.createTextNode(document.querySelector("input").value);
    p.appendChild(text);

    // Delete (X)
    const span = document.createElement("span");
    span.textContent = "X";
    p.appendChild(span);

    // Add to DOM
    document.getElementById("tasks").appendChild(p);
    store();


    document.querySelector("input").value = "";
    newTask.classList.toggle("hidden");
    document.getElementById("addTask").classList.toggle("hidden");
}



const completeAndDelete = (e) => {
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        store();
    }
    else if(e.target.tagName === "B"){
        e.target.parentElement.classList.toggle("complete");
        e.target.classList.toggle("complete");
        store();
    }
};
const clear = () => {
    document.getElementById("tasks").innerHTML = "";
    store();
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("tasks").innerHTML = localStorage.getItem("allCurrentTasks");
})
document.getElementById("addTask").addEventListener("submit", Task);
document.getElementById("tasks").addEventListener("click", completeAndDelete);
document.getElementById("clear").addEventListener("click", clear);