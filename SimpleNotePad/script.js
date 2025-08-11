const saveBtn = document.getElementById("saveBtn");
const textArea = document.getElementById("textArea");
const historySection = document.getElementById("historySection");



function save () {

    if (textArea.value === "") {
        alert("Please input something in before trying to save");
    }
    else {

    let createNewTextSection = document.createElement ("section");
    let createNewTextArea = document.createElement ("textarea");
    createNewTextArea.classList = "history";
    createNewTextArea.value = textArea.value;

    createNewTextSection.appendChild (createNewTextArea);
    historySection.appendChild (createNewTextSection);


    textArea.value = "";

    
    }
    
}

saveBtn.addEventListener("click", save);