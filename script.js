console.log("Yo is this thing on");
console.log(getComputerChoice());


function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3);
    console.log("choiceNum = " + choiceNum);
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
        (playerSelection== "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
            result = "Player Wins!";
        } else {
            result = "Computer Wins!";
        }

        console.log("Player Chose " + playerSelection + ". Computer Chose " + computerSelection +". " + result);
        return result;
}