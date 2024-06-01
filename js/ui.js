const emptyCurrentMessage = () => {
    document.getElementById('messageCurrentPlayer').textContent = ` `;
}

const updateNoWin = () => {
    const messageWinnerPlayer = document.getElementById('messageNoWin');
    messageWinnerPlayer.textContent = `Empate!!!`;
    messageWinnerPlayer.style.display = 'block';
    playSoundEmpate();
    document.querySelectorAll('.div__main, .button, .messageCurrentPlayer, .tittle').forEach(element => {
        element.classList.add('blur');
    });
    document.querySelector('button').disabled = true;
    setTimeout(() => {
        messageWinnerPlayer.style.display = 'none';
        document.querySelectorAll('.div__main, .messageCurrentPlayer, .button, .tittle').forEach(element => {
            element.classList.remove('blur');
        });
        document.querySelector('button').disabled = false;
    }, 2000);
}

const updateCurrentMessage = () => {
    document.getElementById('messageCurrentPlayer').textContent = `Siguiente turno: Jugador ${currentPlayer}`;
}

const updateWinMessage = () => {
    const messageWinnerPlayer = document.getElementById('messageWinnerPlayer');
    messageWinnerPlayer.textContent = `Ganador: Jugador ${currentPlayer}`;
    messageWinnerPlayer.style.display = 'block';
    playSoundWin();
    document.querySelectorAll('.div__main, .button, .messageCurrentPlayer, .tittle').forEach(element => {
        element.classList.add('blur');
    });
    document.querySelector('button').disabled = true;
    setTimeout(() => {
        messageWinnerPlayer.style.display = 'none';
        document.querySelectorAll('.div__main, .messageCurrentPlayer, .button, .tittle').forEach(element => {
            element.classList.remove('blur');
        });
        document.querySelector('button').disabled = false;
    }, 2000);
}
