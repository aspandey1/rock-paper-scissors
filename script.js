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
    let state = new Boolean(true);

    while (tries < 5 && state) {
        let res = "";
        var playerPick = getPlayer();
        var computerPick = getComputer();

        if (playerPick == computerPick){
            res = "Hit";
            state = false;
        }
        else{
            res = "Try Again";
        }

        alert(`Your pick was: ${playerPick}. Computer was ${computerPick}. Result is ${res}`);

        tries ++;
    }
}