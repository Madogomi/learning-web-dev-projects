//select the id elements
const form = document.getElementById("score-form");
//grab all 5 subjects input fields
const scoreInputs = document.querySelectorAll('input[name="score"]');
//grab the element in the html with the total id
const totalDisplay = document.getElementById('total');
//grab the element in the html with the average id
const averageDisplay = document.getElementById('average');
//grab the div that wraps the result section (with id="results")
const resultsBox = document.getElementById('results');
form.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the form from submitting normally
    let total = 0; // Initialize total score
    let count = 0; // Initialize count of valid scores
    // we're trying to now actually calculate the total and average
    scoreInputs.forEach(function(input) {
          const value = input.value.trim(); // Get what the user typed and clean it
          const score = parseFloat(value); // Convert the cleaned value to a number
            if (!isNaN(score)) {
    total += score;     // Add valid score to total
    count++;            // Count it as a valid entry
}