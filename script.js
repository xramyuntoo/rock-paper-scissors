let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3);
    let choiceStr;
    switch(choiceNum) {
        case 0:
            choiceStr = "rock";
            break;
        case 1:
            choiceStr = "paper";
            break;
        case 2:
            choiceStr = "scissors";
            break;
        default:
            console.log("Error getComputerChoice switch default");
    }
    return choiceStr;
}

function round(playerSelection, computerSelection) {
    let result;
    if (playerSelection == computerSelection) {
        result = "tie";
    } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
            result = "You Win! " + playerSelection + " beats " + computerSelection;
            playerScore++;
        } else {
            result = "You lose! " + computerSelection + " beats " + playerSelection;
            computerScore++;
        }

        console.log("Player Chose " + playerSelection + ". Computer Chose " + computerSelection +". " + result);
        return result;
}

function game() {
    let input;

    while (playerScore < 5 && computerScore < 5) {
        input = prompt("Enter your choice").toString().toLowerCase();
        round(input, getComputerChoice());
        console.log("Player Score: " + playerScore + "/5. Computer Score: " + computerScore + "/5")
    }

    if(playerScore > computerScore) {
        console.log("Player Wins the Game!")
    } else if (computerScore > playerScore) {
        console.log("Computer Wins the Game!")
    }
}

game();