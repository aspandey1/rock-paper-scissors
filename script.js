function getComputer() {
    var selection = ["Rock", "Paper", "Scissors"];
    return selection[Math.floor(Math.random() * (3 - 0) ) + 0];
}

function getPlayer() {
    var ans = prompt("Pick: ");
    return ans;
}

function playRound(playerPick){
    let tries = 0;
    let computerScore = 0;
    let playerScore = 0;

    while (tries < 5) {
        var playerPick = getPlayer().toUpperCase();
        var computerPick = getComputer().toUpperCase();
        let lowerPlayer = playerPick.toLowerCase();
        let lowerComputer = computerPick.toLowerCase();

    
        if (lowerPlayer == "paper" && lowerComputer == "rock"){
            playerScore ++;
        }
        else if (lowerPlayer == "rock" && lowerComputer == "scissors"){
            playerScore ++;
        }
        else if (lowerPlayer == "scissors" && lowerComputer == "paper"){
            playerScore ++;
        }
        else if (lowerPlayer == lowerComputer){
            tries --;
        }
        else{
            computerScore ++;
        }

        alert(`Your pick was: ${playerPick}. Computer was ${computerPick}. Result is PLAYER: ${playerScore} and COMPUTER: ${computerScore}.`);

        tries ++;
    }

    if (playerScore > computerScore) {
        alert("You WON :)")
    }
    else {
        alert("You LOST :(")
    }
}