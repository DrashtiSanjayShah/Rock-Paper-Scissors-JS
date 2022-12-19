const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")

let computerChoice
let userChoice
let result

const possibleChoices = document.querySelectorAll("button")
// e = event
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => { 
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generatecomputerChoice()
    getResult()
}))  

function generatecomputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1   //or use 3
        
    if(randomNumber === 1) {
        computerChoice = "rock"
    }
    if(randomNumber === 2) {
        computerChoice = "paper"
    }
    if(randomNumber === 3) {
        computerChoice = "scissors"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "it's a draw!"
    }
    if (computerChoice === "rock" && userChoice ==="paper") {
        result = "You Won!!"
    }
    if (computerChoice === "rock" && userChoice === "scissors") {
        result = "You lost"
    }
    if (computerChoice === "paper" && userChoice === "scissors") {
        result = "You lost"
    }
    if (computerChoice === "paper" && userChoice === "rock") {
        result = "You won"
    }
    if (computerChoice === "scissor" && userChoice === "paper") {
        result = "You lost"
    }
    if (computerChoice === "scissor" && userChoice === "rock") {
        result = "You won"
    }
    resultDisplay.innerHTML = result
}



