console.log("Yo is this thing on");
console.log(getComputerChoice());


function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3);
    console.log("choiceNum = " + choiceNum);
    let choiceStr;
    switch(choiceNum) {
        case 0:
            choiceStr = "Rock";
            break;
        case 1:
            choiceStr = "Paper";
            break;
        case 2:
            choiceStr = "Scissors";
            break;
        default:
            console.log("Error getComputerChoice switch default");
    }
    return choiceStr;
}