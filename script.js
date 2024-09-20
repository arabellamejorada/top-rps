const readlineSync = require('readline-sync');

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  let choice = readlineSync.question("Please enter rock, paper, or scissors: ").toLowerCase();
  while (!['rock', 'paper', 'scissors'].includes(choice)) {
    choice = readlineSync.question("Invalid choice. Please enter rock, paper, or scissors: ").toLowerCase();
  }
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}`);
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock')
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}:`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Scores: Human ${humanScore}, Computer ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (humanScore < computerScore) {
    console.log("Sorry, you lost the game.");
  } else {
    console.log("The game is a tie!");
    }
}

// Make sure to call the playGame function
playGame();
