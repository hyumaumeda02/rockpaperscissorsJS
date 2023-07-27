function getComputerChoice() {
    switch(Math.floor(Math.random() * 3)) {
        case 0: 
            return "Rock";
        case 1: 
            return "Paper";
        case 2: 
            return "Scissors";
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
        return "You Win! Rocks beat Scissors";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
        return "You Lose! Paper beats Rock";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "rock"){
        return "It's a tie!";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "paper"){
        return "It's a tie!";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        return "You Win! Paper beats Rock";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors"){
        return "You Lose! Scissor beats Paper";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
        return "You Win! Scissors beats Paper";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"){
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "scissors"){
        return "It's a tie!";
    }
}

const btn1 = document.querySelector(".rock");
const btn2 = document.querySelector(".paper");
const btn3 = document.querySelector(".scissors");
const results = document.querySelector(".results");
const playerScoreText = document.querySelector(".playerScore");
const computerScoreText = document.querySelector(".computerScore");
const playerChoiceImg = document.querySelector(".playerChoiceImg");
const computerChoiceImg = document.querySelector(".computerChoiceImg");
let playerScore = 0;
let computerScore = 0;


btn1.addEventListener("click", () => {
    const compChoice = getComputerChoice();
    results.textContent = (playRound("rock", compChoice));
    playerChoiceImg.textContent = "ROCK";
    computerChoiceImg.textContent = compChoice.toUpperCase();

    if (results.textContent.slice(0,7) == "You Win"){
        playerScore += 1;
    } else if (results.textContent.slice(0,8) == "You Lose"){
        computerScore += 1;
    }
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;

    if (playerScore == 5) {
        alert("Winner Winner Chicken Dinner!");
    } else if (computerScore == 5) {
        alert("Come by again, loser!");
    }
});
btn2.addEventListener("click", () => {
    const compChoice = getComputerChoice();
    results.textContent = (playRound("paper", compChoice));
    playerChoiceImg.textContent = "PAPER";
    computerChoiceImg.textContent = compChoice.toUpperCase();

    if (results.textContent.slice(0,7) == "You Win"){
        playerScore += 1;
    } else if (results.textContent.slice(0,8) == "You Lose"){
        computerScore += 1;
    }
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;

    if (playerScore == 5) {
        alert("Winner Winner Chicken Dinner!");
    } else if (computerScore == 5) {
        alert("Come by again, loser!");
    }
})
;
btn3.addEventListener("click", () => {
    const compChoice = getComputerChoice();
    results.textContent = (playRound("scissors", compChoice));
    playerChoiceImg.textContent = "SCISSORS";
    computerChoiceImg.textContent = compChoice.toUpperCase();

    if (results.textContent.slice(0,7) == "You Win"){
        playerScore += 1;
    } else if (results.textContent.slice(0,8) == "You Lose"){
        computerScore += 1;
    }
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;

    if (playerScore == 5) {
        alert("Winner Winner Chicken Dinner!");
    } else if (computerScore == 5) {
        alert("Come by again, loser!");
    }
});


// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     let result = playRound(prompt("Play Rock, Paper, Scissors. Choose one and type it below!"), getComputerChoice());
//     console.log(result);
//     if (result.slice(0,7) == "You Win"){
//         playerScore += 1;
//     } else if (result.slice(0,8) == "You Lose"){
//         computerScore += 1;
//     } 
//     result = playRound(prompt("Play Rock, Paper, Scissors. Choose one and type it below!"), getComputerChoice());
//     console.log(result);
//     if (result.slice(0,7) == "You Win"){
//         playerScore += 1;
//     } else if (result.slice(0,8) == "You Lose"){
//         computerScore += 1;
//     } 
//     result = playRound(prompt("Play Rock, Paper, Scissors. Choose one and type it below!"), getComputerChoice());
//     console.log(result);
//     if (result.slice(0,7) == "You Win"){
//         playerScore += 1;
//     } else if (result.slice(0,8) == "You Lose"){
//         computerScore += 1;
//     } 
//     result = playRound(prompt("Play Rock, Paper, Scissors. Choose one and type it below!"), getComputerChoice());
//     console.log(result);
//     if (result.slice(0,7) == "You Win"){
//         playerScore += 1;
//     } else if (result.slice(0,8) == "You Lose"){
//         computerScore += 1;
//     } 
//     result = playRound(prompt("Play Rock, Paper, Scissors. Choose one and type it below!"), getComputerChoice());
//     console.log(result);
//     if (result.slice(0,7) == "You Win"){
//         playerScore += 1;
//     } else if (result.slice(0,8) == "You Lose"){
//         computerScore += 1;
//     } 
//     if (playerScore >= computerScore){
//         return "You Win!";
//     } else if (playerScore <= computerScore){
//         return "You Lose!";
//     } else if (playerSCore == computerScore){
//         return "It's a tie!";
//     }
// }
// console.log(game());



// const playerSelection = "RocK";
// const computerSelection = "Scissors";
// console.log(computerSelection)
// console.log(playRound(playerSelection, computerSelection));