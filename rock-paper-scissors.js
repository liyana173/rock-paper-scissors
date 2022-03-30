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
                return ('Tie!');
                break;
            case 'paper':
                result = 'win';
                return ('You win! Paper beats rock!');
                break;
            case 'scissors':
                result = 'lose';
                return ('You lose! Rock beats scissors!');
                break;
        }
    }

    else if (computerSelection == 'paper') {
        switch (playerSelection.toLowerCase()) {
            case 'rock':
                result = 'lose';
                return ('You lose! Paper beats rock!');
                break;
            case 'paper':
                result = 'tie';
                return ('Tie!');
                break;
            case 'scissors':
                result = 'win';
                return ('You win! Scissors beat paper!');
                break;
        }
    }

    else {
        switch (playerSelection.toLowerCase()) {
            case 'rock':
                result = 'win';
                return ('You win! Rock beats scissors!');
                break;
            case 'paper':
                result = 'lose';
                return ('You lose! Scissors beat paper!');
                break;
            case 'scissors':
                result = 'tie';
                return ('Tie!');
                break;
        }
    }
}


let playerSelection = 'rock';
let computerSelection = computerPlay();
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))
