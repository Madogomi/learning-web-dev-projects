const newTask = document.getElementById("newTask");

newTask.addEventListener("click", function (event) {
    event.preventDefault();
    newTask.classList.toggle("hidden");
    document.getElementById("addTask").classList.toggle("hidden");

})



const Task = (event) => {
    event.preventDefault();

    if (document.querySelector("input").value == "") {
        alert("Please Input a task");
        return;
    }

    const p = document.createElement("p");
    p.textContent = document.querySelector("input").value;

    const circle = document.createElement("div");
    circle.textContent = "O";
    p.prepend(circle);

    const span = document.createElement("span");
    span.textContent = "X";
    p.appendChild(span);

    document.getElementById("tasks").appendChild(p);



    document.querySelector("input").value = "";
    newTask.classList.toggle("hidden");
    document.getElementById("addTask").classList.toggle("hidden");
}

document.getElementById("addTask").addEventListener("submit", Task);


const completeAndDelete = (e) => {
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    else if(e.target.tagName === "DIV"){
        e.target.parentElement.classList.toggle("complete");
        e.target.classList.toggle("complete");
    }
};

document.getElementById("tasks").addEventListener("click", completeAndDelete);