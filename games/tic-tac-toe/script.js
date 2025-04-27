const $ticTacToe = document.querySelector(".tic-tac-toe");
const $status = document.createElement("h2");
const $board = document.createElement("div");
const $resetButton = document.createElement("button");
let cells = Array(9).fill('');
let gameOver = false;
let player = 'X';

const wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
    [0, 4, 8], [2, 4, 6]             // diagonals
];

function resetBoard() {
    // 상태 초기화
    cells = Array(9).fill('');
    gameOver = false;
    player = 'X';

    $status.innerText = `Current Player: ${player}`;
    $board.innerHTML = '';
    $board.classList.add("board");

    // 새로운 셀 추가
    for (let i = 0; i < 9; i++) {
        const $cell = document.createElement("div");
        $cell.dataset.idx = i;
        $cell.classList.add("cell");
        $cell.addEventListener('click', onClickEventHandler);
        $board.appendChild($cell);
    }

    // 처음에만 DOM에 추가
    if (!$ticTacToe.contains($status)) {
        $ticTacToe.appendChild($status);
    }
    if (!$ticTacToe.contains($board)) {
        $ticTacToe.appendChild($board);
    }
    if (!$ticTacToe.contains($resetButton)) {
        $resetButton.innerText = "Reset";
        $resetButton.addEventListener('click', resetBoard);
        $ticTacToe.appendChild($resetButton);
    }
}

function onClickEventHandler(e) {
    if (gameOver) return;

    const cell = e.target;
    const idx = cell.dataset.idx;

    if (cells[idx] === '') {
        cell.innerText = player;
        cells[idx] = player;
        cell.classList.add("taken");

        if (checkWinner()) {
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

function checkWinner() {
    return wins.some(win => {
        return win.every(idx => cells[idx] === player);
    });
}

function checkDraw() {
    return cells.every(cell => cell !== '');
}

// 시작
resetBoard();