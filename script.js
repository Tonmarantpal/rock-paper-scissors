const choices = ["Rock", "Paper", "Scissors"]
const buttons = document.querySelectorAll("button")
const p = document.querySelector(".result")
const score = document.querySelector(".score")
p.textContent = "Please begin!"
let playerScore = 0;
let computerScore = 0;
score.textContent = `Player's score: ${playerScore} | Computer's score :${computerScore}`


function getComputerChoice() {
    let choice = Math.floor(Math.random() * choices.length);
    return choice = choices[choice];
}

function playRound(userChoice) {
    let computerChoice = getComputerChoice();
    userChoice = userChoice
    if (computerChoice === userChoice) {
        score.textContent = `Player's score: ${playerScore} | Computer's score :${computerScore}`
        p.textContent = "It's a tie!";
    } else if (userChoice === "Rock" && computerChoice === "Scissors" || userChoice === "Paper" && computerChoice === "Rock" || userChoice === "Scissors" && computerChoice === "Paper") {
        playerScore++
        score.textContent = `Player's score: ${playerScore} | Computer's score :${computerScore}`
        p.textContent = `You win! ${userChoice} beats ${computerChoice}!`
    } else {
        computerScore++
        score.textContent = `Player's score: ${playerScore} | Computer's score :${computerScore}`
        p.textContent = `You lose! ${computerChoice} beats ${userChoice}!`
    }

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            p.textContent = "GAME OVER! You are the winner!"
            playerScore = 0;
            computerScore = 0;
        } else {
            p.textContent = "GAME OVER! Computer is the winner!"
            playerScore = 0;
            computerScore = 0;
        }
    }
}



buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playRound(e.target.innerText)
    } )
})

