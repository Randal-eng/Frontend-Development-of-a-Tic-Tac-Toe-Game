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

const celdas = document.querySelectorAll('.celda');

const handleCellClick = (event) => {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('index'));

    if (gameState[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    handleResultValidation();
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
        alert(`¡Jugador ${currentPlayer} ha ganado!`);
        return;
    }

    if (!gameState.includes('')) {
        gameActive = false;
        alert('¡Empate!');
        return;
    }

    switchPlayer();
}

const switchPlayer = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

const restartGame = () => {
    gameActive = true;
    currentPlayer = 'X';
    gameState.fill('');
    celdas.forEach(cell => (cell.textContent = ''));
}

celdas.forEach(cell => cell.addEventListener('click', handleCellClick));
document.getElementById('restartButton').addEventListener('click', restartGame);
document.addEventListener('DOMContentLoaded', restartGame);
