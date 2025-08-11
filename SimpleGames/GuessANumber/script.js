const submit = document.getElementById("submit");

function roll(event) {
    event.preventDefault();
    const guess = Number(document.getElementById("guess").value);
    let randomNum;


    
        do {
        randomNum = Math.floor(Math.random() * 10) + 1;
    } while (randomNum === guess);
    alert("You Lose, I already told you that this game is unbeatable, can't you read, you idiot, the number was " + randomNum);
    
    
        }
    


submit.addEventListener("submit", roll);
