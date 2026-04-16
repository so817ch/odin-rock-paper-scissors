let humanScore = 0;
let computerScore = 0;
const choices = document.querySelector('.choices');
const results = document.querySelector('.results');
const scoreBoard = document.querySelector('#score-board');
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



const playRound = (humanChoice, computerChoice) => {
  const res = pend(humanChoice, computerChoice);
  let resultText = '';
  if (res === -1) {
    resultText = `You Lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  } else if (res === 0) {
    resultText = `Tie! Both ${humanChoice}`;
  } else {
    resultText = `You Win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  }

  scoreBoard.textContent= `score now, human-${humanScore}:computer-${computerScore}`;

  const result = document.createElement('p');
  result.textContent = resultText;
  results.appendChild(result);
  
  if (humanScore >= 5 || computerScore >= 5) {
    const winner = humanScore >= 5 ? 'You win!' : 'Computer win!';
    scoreBoard.textContent += '=====' + winner + '=====';
    const btnList = document.querySelectorAll('.choices button');
    for (btn of btnList) {
      btn.disabled = true;
    }
  }
};

const playGame = () => {
  for (let i = 1; i <= 5; i++) {
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


choices.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const btn = event.target;
    console.dir(btn);
    playRound(btn.id, getComputerChoice())
  }
})
