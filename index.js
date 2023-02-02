const values = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
let computerSelection = '';

function getComputerChoice() {
    let randomValue = Math.floor(Math.random()*values.length);
    return values[randomValue];
}

function getPlayerChoice(){
    let playerChoice = prompt("Choose: Rock, Paper or Scissors");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    if(computerSelection === playerSelection){
        return "It's a tie!"
    } 

    if(computerSelection === 'rock'){
        if(playerSelection === 'scissors'){
            computerScore++;
            return "You lose! Rock wins!"
        }else {
            if(playerSelection === "paper") {
                playerScore++;
                return "You win!";
    }
}
}

    if(computerSelection === 'scissors'){
        if(playerSelection === 'paper'){
            computerScore++;
            return "You lose! Scissor wins!"
        }else {
            if(playerSelection === "rock") {
                playerScore++;
                return "You win!";
    }
}
}

    if(computerSelection === 'paper'){
        if(playerSelection === 'rock'){
            computerScore++;
            return "You lose! Paper wins!"
        }else {
            if(playerSelection === "scissors") {
                playerSelection++;
                return "You win!";
    }
}
}
}

function game(){
    for(let i = 0; i < 5; i++){
        playerSelection = getPlayerChoice();
        console.log("Player selection: " + playerSelection);
        computerSelection = getComputerChoice();
        console.log("Computer selection: " + computerSelection);
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
    }

    if(computerScore > playerScore){
        console.log("The computer wins!")
    } else if(computerScore === playerScore){
        console.log("It's a tie! No one wins")
    } else{
        console.log("You win!")
    }
}

game();
