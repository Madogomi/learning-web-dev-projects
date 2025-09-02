const today = new Date();
let thisMonth = today.getMonth();
let thisYear = today.getFullYear();
const months = [
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
];
const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
function getDay () {
    const firstDay = new Date(thisYear, thisMonth, 1);
    const lastDay = new Date(thisYear, thisMonth + 1, 0);
    const lastMonthFirstDay = new Date(thisYear, today.getMonth(), 0);
    document.getElementById("currentDate").textContent =
    `${daysOfTheWeek[new Date().getDay()]}, ${new Date().getDate()} of ${months[new Date().getMonth()]}, ${new Date().getFullYear()}`;
    let liTag = ``;

    for (let i = firstDay.getDay(); i > 0; i--) {
        liTag += `<li class="inactive days">${(lastMonthFirstDay.getDate() - i) + 1}</li>`;
    }
    for (let i = firstDay.getDate(); i <= lastDay.getDate(); i++) {
        liTag += `<li class="days present">${i}</li>`;
    }
    let num = 1;
    for (let i = lastDay.getDay(); i < 6; i++) {
        liTag += `<li class="inactive days">${num}</li>`;
        num++
    }
    document.querySelector("div").textContent = `${months[thisMonth]}, ${thisYear}`;
    document.getElementById("daysOfTheMonth").innerHTML = liTag;

    if (document.querySelector("div").textContent === `${months[new Date().getMonth()]}, ${new Date().getFullYear()}`) {
        for (let day of document.querySelectorAll(".present")) {
            if (day.textContent === `${new Date().getDate()}`) {
                day.style.border = "blue solid"
            }
        }
    }
}
document.addEventListener("DOMContentLoaded", getDay());
document.getElementById("prevBtn").addEventListener("click", function() {
    if (thisMonth <= 0) {
        thisMonth = 11;
        thisYear--;
        getDay();
    } else {
        thisMonth--;
        getDay();
    }
});
document.getElementById("nextBtn").addEventListener("click", function() {
    if (thisMonth >= 11) {
        thisMonth = 0;
        thisYear++;
        getDay();
    } else {
        thisMonth++;
        getDay();
    }
});