const celdas = document.querySelectorAll('.celda');

document.addEventListener('DOMContentLoaded', () => {
    celdas.forEach(cell => cell.addEventListener('click', handleCellClick));
    document.getElementById('restartButton').addEventListener('click', restartGame);
    document.getElementById('twoPlayerButton').addEventListener('click', () => setGameMode('Two Players'));
    document.getElementById('singlePlayerButton').addEventListener('click', () => setGameMode('Single Player'));
    restartGame();
    playClickSound();
});

const setGameMode = (mode) => {
    gameMode = mode;
    restartGame();
}
