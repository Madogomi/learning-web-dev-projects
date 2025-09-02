let date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();
const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

function showDates(month, year) {
    let startingDate = new Date(year, month, 1).getDate();
    let startingDay = new Date(year, month, 1).getDay();
    let formerMonthLastDay = new Date(year, month, 0).getDate();
    let endDate = new Date(year, month + 1, 0).getDate();
    let endDay = new Date(year, month + 1, 0).getDay();
    let lis = ``;
    let num = 1;

    for (let i = startingDay; i > 0; i--) {
        lis += `<li class="inactive">${formerMonthLastDay - i + 1}</li>`;
    }
    for (let i = startingDate; i <= endDate; i++) {
        lis += `<li class="presentDays">${i}</li>`;
    }
    for (let i = endDay; i < 6; i++) {
        lis += `<li class="inactive">${num}</li>`;
        num++;
    }

    document.getElementById("monthAndYear").textContent = `${monthNames[month]}, ${year}`;
    document.getElementById("daysOfTheWeek").innerHTML = lis;

    if (document.getElementById("monthAndYear").textContent === `${monthNames[date.getMonth()]}, ${date.getFullYear()}`) {
        for (const li of document.querySelectorAll(".presentDays")) {
            if (li.textContent === `${date.getDate()}`) {
                li.style.border = "black solid";
                li.style.borderRadius = "1rem";
            }
        }
    }
}
function store() {
    localStorage.setItem("habits", `${document.getElementById("taskSpace").innerHTML}`);
}

function completeTask() {
    let habitNumber = document.querySelectorAll(".taskList");
    let completedHabits = document.querySelectorAll(".complete");

    if (habitNumber.length > 0 && habitNumber.length == completedHabits.length) {
        if (document.getElementById("monthAndYear").textContent === `${monthNames[date.getMonth()]}, ${date.getFullYear()}`) {
        for (const li of document.querySelectorAll(".presentDays")) {
            if (li.textContent === `${date.getDate()}`) {
                li.classList.add("allTaskComplete");
            }
        }
    }
    } else if (habitNumber.length > 0 && completedHabits.length >= habitNumber.length / 2) {
    if (document.getElementById("monthAndYear").textContent === `${monthNames[date.getMonth()]}, ${date.getFullYear()}`) {
        for (const li of document.querySelectorAll(".presentDays")) {
            if (li.textContent === `${date.getDate()}`) {
                li.classList.remove("allTaskComplete");
                li.classList.add("almostallTaskComplete");
            }
        }
    }
    } else {
        if (document.getElementById("monthAndYear").textContent === `${monthNames[date.getMonth()]}, ${date.getFullYear()}`) {
        for (const li of document.querySelectorAll(".presentDays")) {
            if (li.textContent === `${date.getDate()}`) {
                li.classList.remove("allTaskComplete");
                li.classList.remove("almostallTaskComplete")
            }
        }
    }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    showDates(currentMonth, currentYear);
    document.getElementById("taskSpace").innerHTML = localStorage.getItem("habits");
    completeTask();
});

document.getElementById("previousMonth").addEventListener("click", function() {
    if(currentMonth <= 0) {
        currentMonth = 11;
        currentYear--;
    }else {
        currentMonth--;
    }
    showDates(currentMonth, currentYear);
    completeTask();
})


document.getElementById("nextMonth").addEventListener("click", function() {
    if(currentMonth >= 11) {
        currentMonth = 0;
        currentYear++;
    }else {
        currentMonth++;
    }
    showDates(currentMonth, currentYear);
    completeTask();
})

document.getElementById("newTask").addEventListener("click", function() {
    document.getElementById("newTask").classList.toggle("hidden");
    document.getElementById("task").classList.toggle("hidden");
    completeTask();
});

document.getElementById("task").addEventListener("submit", function(e) {
    e.preventDefault();
    let input = document.getElementById("taskInput");
    let newHabit = document.createElement("li");
    newHabit.classList.add("taskList");

    newHabit.innerHTML = `<span class="incomplete">O</span>${input.value}<span class="delete">X</span>`;

    document.getElementById("taskSpace").appendChild(newHabit);


    document.getElementById("newTask").classList.toggle("hidden");
    document.getElementById("task").classList.toggle("hidden");
    input.value = "";
    store();
    completeTask();
});
document.getElementById("clear").addEventListener("click", function() {
    document.getElementById("taskSpace").innerHTML = ``;
    store();
    completeTask();
});
document.getElementById("taskSpace").addEventListener("click", function(e) {
    if (e.target.classList.contains("incomplete")) {
        e.target.parentElement.classList.toggle("complete");
        store();
        completeTask();
    } else if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
        store();
        completeTask();
    }
});