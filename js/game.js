let currentPlayer = 'X';
let gameActive = true;
const gameState = ['', '', '', '', '', '', '', '', ''];
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const handleCellClick = (event) => {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('index'));

    if (gameState[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    updateGameState(clickedCellIndex, clickedCell);
    handleResultValidation();

    if (gameMode === 'Single Player' && gameActive && currentPlayer === 'O') {
        setTimeout(handleComputerMove, 1000)
    }
}

const updateGameState = (index, cell) => {
    gameState[index] = currentPlayer;
    cell.textContent = currentPlayer;
    document.getElementById('currentGame').textContent = `Game: ${gameMode}`;

}

const handleResultValidation = () => {
    let roundWon = false;

    for (const winCondition of winningConditions) {
        const [a, b, c] = winCondition.map(index => gameState[index]);

        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        gameActive = false;
        updateWinMessage();
        emptyCurrentMessage();
        return;
    }

    if (!gameState.includes('')) {
        gameActive = false;
        updateNoWin();
        return;
    }

    switchPlayer();
}

const switchPlayer = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    if (currentPlayer !== 'X') {
        playSoundX();
    } else {
        playSoundO();
    }
    updateCurrentMessage();
}



const restartGame = () => {
    gameActive = true;
    currentPlayer = 'X';
    gameState.fill('');
    celdas.forEach(cell => (cell.textContent = ''));
    playSoundRestar();
    emptyCurrentMessage();
}


const handleComputerMove = () => {
    document.getElementById('currentGame').textContent = `Game: ${gameMode}`;
    let availableCells = gameState.map((cell, index) => cell === '' ? index : null).filter(index => index !== null);
    let randomCellIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
    let cell = document.querySelector(`.celda[index="${randomCellIndex}"]`);
    updateGameState(randomCellIndex, cell);
    handleResultValidation();
}