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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let result = playRound(prompt("Play Rock, Paper, Scissors. Choose one and type it below!"), getComputerChoice());
    console.log(result);
    if (result.slice(0,7) == "You Win"){
        playerScore += 1;
    } else if (result.slice(0,8) == "You Lose"){
        computerScore += 1;
    } 
    result = playRound(prompt("Play Rock, Paper, Scissors. Choose one and type it below!"), getComputerChoice());
    console.log(result);
    if (result.slice(0,7) == "You Win"){
        playerScore += 1;
    } else if (result.slice(0,8) == "You Lose"){
        computerScore += 1;
    } 
    result = playRound(prompt("Play Rock, Paper, Scissors. Choose one and type it below!"), getComputerChoice());
    console.log(result);
    if (result.slice(0,7) == "You Win"){
        playerScore += 1;
    } else if (result.slice(0,8) == "You Lose"){
        computerScore += 1;
    } 
    result = playRound(prompt("Play Rock, Paper, Scissors. Choose one and type it below!"), getComputerChoice());
    console.log(result);
    if (result.slice(0,7) == "You Win"){
        playerScore += 1;
    } else if (result.slice(0,8) == "You Lose"){
        computerScore += 1;
    } 
    result = playRound(prompt("Play Rock, Paper, Scissors. Choose one and type it below!"), getComputerChoice());
    console.log(result);
    if (result.slice(0,7) == "You Win"){
        playerScore += 1;
    } else if (result.slice(0,8) == "You Lose"){
        computerScore += 1;
    } 
    if (playerScore >= computerScore){
        return "You Win!";
    } else if (playerScore <= computerScore){
        return "You Lose!";
    } else if (playerSCore == computerScore){
        return "It's a tie!";
    }
}
console.log(game());
// const playerSelection = "RocK";
// const computerSelection = getComputerChoice();
// console.log(computerSelection)
// console.log(playRound(playerSelection, computerSelection));