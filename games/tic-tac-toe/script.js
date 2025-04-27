const $ticTacToe = document.querySelector(".tic-tac-toe");
const $status = document.createElement("h2");
const $board = document.createElement("div");
const $resetButton = document.createElement("button");
let $cells = []; // div 요소 자체 저장
let player = 'X';
let gameOver = false;

const wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
    [0, 4, 8], [2, 4, 6]             // diagonals
];

function init() {
  $status.innerText = `Current Player: ${player}`;
  $board.classList.add("board");
  $resetButton.innerText = "Reset";
  $resetButton.id = "reset";

  $resetButton.addEventListener('click', resetBoard);

  // 보드 셀 만들기
  for (let i = 0; i < 9; i++) {
    const $cell = document.createElement("div");
    $cell.classList.add("cell");
    $cell.dataset.idx = i;
    $cell.addEventListener('click', onClickCell);
    $board.appendChild($cell);
    $cells.push($cell);
  }

  $ticTacToe.appendChild($status);
  $ticTacToe.appendChild($board);
  $ticTacToe.appendChild($resetButton);
}

function resetBoard() {
  player = 'X';
  gameOver = false;
  $status.innerText = `Current Player: ${player}`;
  
  $cells.forEach(cell => {
    cell.innerText = '';
    cell.classList.remove('taken', 'winner');
  });
}

function onClickCell(e) {
  if (gameOver) return;
  const idx = e.target.dataset.idx;

  if ($cells[idx].innerText === '') {
    $cells[idx].innerText = player;
    $cells[idx].classList.add('taken');

    if (checkWinner(player)) {
      $status.innerText = `Congratulations, ${player} Won!`;
      gameOver = true;
    } else if (checkDraw()) {
      $status.innerText = "It's a draw!";
      gameOver = true;
    } else {
      player = player === 'X' ? 'O' : 'X';
      $status.innerText = `Current Player: ${player}`;
    }
  }
}

function checkWinner(currentPlayer) {
  for (const combo of wins) {
    const [a, b, c] = combo;
    if (
      $cells[a].innerText === currentPlayer &&
      $cells[b].innerText === currentPlayer &&
      $cells[c].innerText === currentPlayer
    ) {
      // 승리한 셀 강조
      $cells[a].classList.add('winner');
      $cells[b].classList.add('winner');
      $cells[c].classList.add('winner');
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return $cells.every(cell => cell.innerText !== '');
}

// 시작
init();
