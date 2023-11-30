const choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    let choice = Math.floor(Math.random() * choices.length);
    return choice = choices[choice];
}

function playRound() {
    let computerChoice = getComputerChoice();
    let userChoice = prompt("What will you choose?")
    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1)
    if (computerChoice === userChoice) {
        return "It's a tie!";
    } else if (userChoice === "Rock" && computerChoice === "Scissors" || userChoice === "Paper" && computerChoice === "Rock" || userChoice === "Scissors" && computerChoice === "Paper") {
        return `You win! ${userChoice} beats ${computerChoice}!`
    } else {
        return `You lose! ${computerChoice} beats ${userChoice}!`
    }
}