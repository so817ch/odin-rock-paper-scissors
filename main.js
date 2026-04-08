console.log("hello world");
const typeSet = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
  const idx = Math.floor(Math.random() * 3);
  return typeSet[idx];
};

const getHumanChoice = () => {
  const res = prompt('Enter your choice: rock, paper or scissors');
  return res;
};

const pend = (humanChoice, computerChoice) => {
  if (humanChoice === 'rock') {
    if (computerChoice === 'rock') {
      return 0;
    } else if (computerChoice === 'paper') {
      return -1;
    } else {
      return 1;
    }
  } else if (humanChoice == 'paper') {
    if (computerChoice === 'rock') {
      return 1;
    } else if (computerChoice === 'paper') {
      return 0;
    } else {
      return -1;
    }
  } else {
    if (computerChoice === 'rock') {
      return -1;
    } else if (computerChoice === 'paper') {
      return 1;
    } else {
      return 0;
    }
  }
};

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
  const res = pend(humanChoice, computerChoice);
  if (res === -1) {
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else if (res === 0) {
    console.log(`Tie! Both ${humanChoice}`);
  } else {
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  }

  console.log(`score now, human-${humanScore}:computer-${computerScore}`);
};

const playGame = () => {
  for (let i = 1; i <= 5; i++){
    const humanSelection = getHumanChoice().toLowerCase();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log('You Win!');
  } else if (humanScore === computerScore) {
    console.log('Tie!');
  } else {
    console.log('You Lose!');
  }
}

playGame();