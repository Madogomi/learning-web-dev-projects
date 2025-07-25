const form = document.getElementById("form");

//get all the units//
const numberOne = document.getElementById("number1");
const numberTwo = document.getElementById("number2");
const numberThree = document.getElementById("number3");
const numberFour = document.getElementById("number4");

//get all the grades //
const grade1 = document.getElementById("grade1");
const grade2 = document.getElementById("grade2");
const grade3 = document.getElementById("grade3");
const grade4 = document.getElementById("grade4");


//get result section//
const resultSection = document.getElementById("resultSection");

const results = document.getElementById("results");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    if(isNaN(numberOne.value) || isNaN(numberTwo.value) || isNaN(numberThree.value) || isNaN(numberFour.value) || isNaN(grade1.value) || isNaN(grade2.value) || isNaN(grade3.value) || isNaN(grade4.value)) {
        alert("please input the correct value");
        return;
    };
    function gradePoint(score) {
        if (score >= 70) return 5;
        else if (score >= 60) return 4;
        else if (score >= 50) return 3;
        else if (score >= 40) return 2;
        else if (score >= 30) return 1;
        else return 0;
    };
    function coursePoint(score, unit) {
       return gradePoint(score) * unit;
    };

    function totalUnit(one, two, three, four) {
        return Number(one) + Number(two) +  Number(three) + Number(four);
    };


    const totalUnits = totalUnit(numberOne.value, numberTwo.value , numberThree.value , numberFour.value);


    const gpa1 = coursePoint(grade1.value, numberOne.value); 
    const gpa2 = coursePoint(grade2.value, numberTwo.value); 
    const gpa3 = coursePoint(grade3.value, numberThree.value); 
    const gpa4 = coursePoint(grade4.value, numberFour.value);
    

    const totalGpa = gpa1 + gpa2 + gpa3 +gpa4;

    results.textContent = "Your GPA score is " + (totalGpa / totalUnits).toFixed(2);


    resultSection.classList.remove("hidden");

    const inputs = document.querySelectorAll("input");

    
    inputs.forEach((input) => input.value = "");
});