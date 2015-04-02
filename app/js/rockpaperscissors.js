////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return (move || getInput() );
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return (move || randomPlay() );
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === computerMove) {
        winner = "tie"; 
        console.log("tie");
    }
    else if ((playerMove == "rock") && (computerMove == "paper")) {
        winner = "computer";
        
    }
    else if ((playerMove == "scissors") && (computerMove == "rock")) {
        winner = "computer";
        
    }
    else if ((playerMove == "paper") && (computerMove == "scissors")) {
        winner = "computer";
        
    }
    else if ((playerMove == "paper") && (computerMove == "rock")) {
        winner = "player";
        
    }
    else if ((playerMove == "rock") && (computerMove == "scissors")){
        winner = "player";
        
    }
    else if ((playerMove == "scissors") && (computerMove == "paper")) {
        winner = "player";
        
    }
    else {
        console.log("Someone did something other than rps!");
        
    }
    
       
    // if they are equal.. tie
    // if player rock and computer paper
    // if player rock and computer scissors
    // if player scissors and computer paper
    // if player scissors and computer rock
    // if player paper and computer scissors
    // if player paper and computer rock
    
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner;
    var overallWinner;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while ((playerWins < 2) && (computerWins <2)) {
        var playerMove = getPlayerMove(getInput());
        var computerMove = getComputerMove(randomPlay());
        console.log('\n\nPlayer chose ' + playerMove + '\nComputer chose ' + computerMove);
        winner = getWinner(playerMove, computerMove);
        if (winner == "player") { playerWins++; }
        if (winner == "computer") {computerWins++; }
        console.log('\nThe winner is...' + winner)
        console.log('The score is currently ' + playerWins + ' for player to ' + computerWins + ' for computer\n');
        
    }

    if (playerWins > computerWins) {overallWinner = "Player";}
    else {overallWinner = "The computer";}
    console.log(overallWinner + ' is the overall winner!\n');
    return [playerWins, computerWins];
}
// playToFive();

    
function playToX() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner;
    var overallWinner;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    console.log("What would you like to play to?");
    var x = prompt();
    while ((playerWins < x) && (computerWins < x)) {
        var playerMove = getPlayerMove(getInput());
        var computerMove = getComputerMove(randomPlay());
        console.log('\n\nPlayer chose ' + playerMove + '\nComputer chose ' + computerMove);
        winner = getWinner(playerMove, computerMove);
        if (winner == "player") { playerWins++; }
        if (winner == "computer") {computerWins++; }
        console.log('\nThe winner is...' + winner)
        console.log('The score is currently ' + playerWins + ' for player to ' + computerWins + ' for computer\n');
        
    }

    if (playerWins > computerWins) {overallWinner = "Player";}
    else {overallWinner = "The computer";}
    console.log(overallWinner + ' is the overall winner!\n');
    return [playerWins, computerWins];
}

playToX();



















