const userName = document.getElementById("name-of-candidate");
//grab the element in the html with the total id
const totalDisplay = document.getElementById("total");
//grab the element in the html with the average id
const averageDisplay = document.getElementById("average");
//grab the div that wraps the result section (with id="results")
const btn = document.getElementById("submit-button");
const resultsBox = document.getElementById('results');
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
const fifth = document.getElementById("fifth");
const shortNote = document.getElementById("short-note");






btn.addEventListener("click", function(event){
  event.preventDefault();
    if (
    isNaN(first.valueAsNumber) ||
    isNaN(second.valueAsNumber) ||
    isNaN(third.valueAsNumber) ||
    isNaN(fourth.valueAsNumber) ||
    isNaN(fifth.valueAsNumber) ||
    userName.value.length < 3
  ) {
    alert("Please fill in all the correct inputs.");
    return;
  }

  resultsBox.classList.remove("hidden");
  
  const valueOfInput =  first.valueAsNumber + second.valueAsNumber + third.valueAsNumber + fourth.valueAsNumber + fifth.valueAsNumber;
  
  totalDisplay.textContent = valueOfInput;
  averageDisplay.textContent = valueOfInput / 5;
  shortNote.textContent = "Mr/Mrs " + userName.value + ", your JAMB score is " + valueOfInput ;
});