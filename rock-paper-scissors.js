function computerPlay() {
    //create an array for rock, paper and scissors
    //choose a random index between 0 and 2
    //return the element at that index

    let choices = ['rock', 'paper', 'scissors'];
    randomIndex = Math.floor(Math.random()*3);
    return choices.at(randomIndex);
}

console.log(computerPlay())