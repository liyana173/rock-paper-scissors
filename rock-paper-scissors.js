function computerPlay() {
    //create an array for rock, paper and scissors
    //choose a random index between 0 and 2
    //return the element at that index

    let choices = ['rock', 'paper', 'scissors'];
    randomIndex = Math.floor(Math.random()*3);
    return choices.at(randomIndex);
}

function playRound(playerSelection, computerSelection) {
    //if computerSelection is rock, go through all playerSelection choices
    //if computerSelection is paper, go through all playerSelection choices
    //if computerSelection is scissors, go through all playerSelection choices
    let result;

    if (computerSelection == 'rock') {
        switch (playerSelection.toLowerCase()) {
            case 'rock':
                result = 'tie';
                //return ('Tie!');
                break;
            case 'paper':
                result = 'win';
                //return ('You win! Paper beats rock!');
                break;
            case 'scissors':
                result = 'lose';
                //return ('You lose! Rock beats scissors!');
                break;
        }
    }

    else if (computerSelection == 'paper') {
        switch (playerSelection.toLowerCase()) {
            case 'rock':
                result = 'lose';
                //return ('You lose! Paper beats rock!');
                break;
            case 'paper':
                result = 'tie';
                //return ('Tie!');
                break;
            case 'scissors':
                result = 'win';
                //return ('You win! Scissors beat paper!');
                break;
        }
    }

    else {
        switch (playerSelection.toLowerCase()) {
            case 'rock':
                result = 'win';
                //return ('You win! Rock beats scissors!');
                break;
            case 'paper':
                result = 'lose';
                //return ('You lose! Scissors beat paper!');
                break;
            case 'scissors':
                result = 'tie';
                //return ('Tie!');
                break;
        }
    }

    return result;
}

/*let playerSelection = "scissors";
let computerSelection = computerPlay();
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));*/


function game() {
    //create variables for playerScore and computerScore
    //if playerScore < computerScore, computer wins and vice versa

    let playerScore = 0;
    let computerScore = 0;
    let result;
    let playerSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Rock, paper or scissors?').toLowerCase();
        computerSelection = computerPlay()
        result = playRound(playerSelection, computerSelection);
        if (result == 'win') {
            playerScore += 1;
            console.log('You win!')
        }

        else if (result == 'lose') {
            computerScore += 1;
            console.log('You lose!')
        }

        else {
            console.log("It's a tie!")
        }

    

        console.log(`Your play: ${playerSelection}
Computer's play: ${computerSelection}
Your score: ${playerScore}
Computer's score: ${computerScore}`)
    }

    if (playerScore > computerScore) {
        return ('You win!');
    } else if (playerScore < computerScore) {
        return ('You lose!');
    } else {
        return ('Tie');
    }


}

//console.log(game())
