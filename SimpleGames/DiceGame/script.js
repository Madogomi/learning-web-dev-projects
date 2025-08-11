const roll = document.getElementById("roll");

function rollDice (event) {
    event.preventDefault();
    let input = Number(document.getElementById("diceNumber").value);
    
    let diceNumber;

    do {
        diceNumber = Math.floor(Math.random() * 6) + 1;
    } while (input === diceNumber);

    document.getElementById("section").classList.remove("hidden");
    document.getElementById("image").src = `diceImages/diceImage${diceNumber}.png`;
    document.getElementById("image").alt = "Dice " + diceNumber;
    document.getElementById("quote").textContent = `You lose fool, the dice showed a ${diceNumber}`
}



roll.addEventListener("submit", rollDice);