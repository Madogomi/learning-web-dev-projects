const budgetDescription = document.getElementById("budgetDescription");
const budgetType = document.getElementById("budgetType");
const budgetAmount = document.getElementById("budgetAmount");
const budgetDate = document.getElementById("budgetDate");
const inputField = document.getElementById("inputField");
const totalAmount = document.getElementById("totalAmount");
const budgetHistory = document.getElementById("budgetHistory");


totalAmount.textContent = localStorage.getItem("totalMoney")
budgetHistory.innerHTML = localStorage.getItem("allHistory");

function saveData() {
    const completeHistory = String(budgetHistory.innerHTML);
    localStorage.setItem("allHistory", completeHistory);
}
const totalAssets = () => localStorage.setItem("totalMoney", totalAmount.textContent);



function addButton(event) {
    event.preventDefault();
    const descriptionValue = budgetDescription.value;
    const typeValue = budgetType.value;
    const amountValue = budgetAmount.value;
    const dateValue = budgetDate.value;
    const history = document.createElement("section");
    history.classList.add("history");
    
    history.innerHTML = `
      <input type="text" readonly value= '${descriptionValue}'>
      <input type="text" readonly value= '${typeValue}'>
      <input type="number" readonly value= '${amountValue}'>
      <input type="date" readonly value= '${dateValue}'>
      <button class="delete">Delete</button>`;

    budgetHistory.appendChild(history);


      const income = Number(totalAmount.textContent) + Number(amountValue);
      const expense = Number(totalAmount.textContent) - Number(amountValue);


    if (typeValue === "income") {
        totalAmount.textContent = income;
    }

    else {
        totalAmount.textContent = expense;
    }

    budgetDescription.value = "";
    budgetAmount.value = "";
    budgetDate.value = "";

    console.log(typeof(totalAmount.textContent));
    
    saveData();
    totalAssets();



};


inputField.addEventListener("submit", addButton);

function deleteButton (e) {
    if (e.target.classList.contains("delete")) {
        const parent = e.target.closest(".history");
        const amount = Number(parent.children[2].value);
        const type = parent.children[1].value;

        if (type === "income") {
            totalAmount.textContent = Number(totalAmount.textContent) - amount;
        }
        else {
            totalAmount.textContent = Number(totalAmount.textContent) + amount;
        }
        parent.remove();
    }
    
    saveData();
    totalAssets();

};




budgetHistory.addEventListener("click", deleteButton);


const clearAll = () => {
    localStorage.clear();
    budgetHistory.innerHTML = "";
    totalAmount.textContent = "";
};
document.getElementById("clearBtn").addEventListener("click", clearAll);