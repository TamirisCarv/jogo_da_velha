const buttons = document.querySelectorAll('button');
const playerSelect = document.getElementById('player');
const result = document.getElementById('result');
let currentPlayer;
let computerPlayer;

function play(event) {
  const button = event.target;
  button.textContent = currentPlayer;
  button.disabled = true;
  if (checkWin()) {
    result.textContent = currentPlayer + " ganhou!";
    buttons.forEach(button => button.disabled = true);
  } else if (checkTie()) {
    result.textContent = "Empate!";
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    computerPlay();
  }
}

function computerPlay() {
  const availableButtons = Array.from(buttons).filter(button => !button.disabled);
  const randomIndex = Math.floor(Math.random() * availableButtons.length);
  const randomButton = availableButtons[randomIndex];
  randomButton.textContent = computerPlayer;
  randomButton.disabled = true;
  if (checkWin()) {
    result.textContent = computerPlayer + " ganhou!";
    buttons.forEach(button => button.disabled = true);
  } else if (checkTie()) {
    result.textContent = "Empate!";
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWin() {
  const rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  return rows.some(row => {
    const [a, b, c] = row;
    return buttons[a].textContent &&
           buttons[a].textContent === buttons[b].textContent &&
           buttons[b].textContent === buttons[c].textContent;
  });
}

function checkTie()
