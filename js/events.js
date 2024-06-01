const celdas = document.querySelectorAll('.celda');

document.addEventListener('DOMContentLoaded', () => {
    celdas.forEach(cell => cell.addEventListener('click', handleCellClick));
    document.getElementById('restartButton').addEventListener('click', restartGame);
    restartGame();

    playClickSound();
});
