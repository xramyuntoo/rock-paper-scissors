let playerScore = 0;
let computerScore = 0;
let playerChoice = "";


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
        div.textContent = "Player Chose " + playerSelection + ". Computer Chose " + computerSelection +". " + result;
        return result;
}

function game() {
    round(playerChoice, getComputerChoice());
    console.log("Player Score: " + playerScore + "/5. Computer Score: " + computerScore + "/5");
    score.textContent = "Player Score: " + playerScore + "/5. Computer Score: " + computerScore + "/5";    
}

const body = document.querySelector("body");

const buttonContainer = document.createElement("div");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorButton = document.createElement("button");
rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorButton.textContent = "Scissors";
rockButton.addEventListener('click', () => {
    playerChoice = "rock";
    game();
  });
paperButton.addEventListener('click', () => {
    playerChoice = "paper";
    game();
});
scissorButton.addEventListener('click', () => {
    playerChoice = "scissors";
    game();
});
buttonContainer.style.flex;
buttonContainer.appendChild(rockButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(scissorButton);

body.appendChild(buttonContainer);

const div = document.createElement("div");
div.textContent = "test";
const score = document.createElement("div");
body.appendChild(div);
body.appendChild(score);