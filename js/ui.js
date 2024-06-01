const emptyCurrentMessage = () => {
    document.getElementById('messageCurrentPlayer').textContent = ` `;
}

const updateNoWin = () => {
    const messageNoWin = document.getElementById('messageNoWin');
    messageNoWin.textContent = `EMPATE!!!`;
    messageNoWin.style.display = 'block';
    setTimeout(() => {
        messageNoWin.style.display = 'none';
    }, 3000);
}

const updateCurrentMessage = () => {
    document.getElementById('messageCurrentPlayer').textContent = `Siguiente turno: Jugador ${currentPlayer}`;
}

const updateWinMessage = () => {
    const messageWinnerPlayer = document.getElementById('messageWinnerPlayer');
    messageWinnerPlayer.textContent = `Ganador: Jugador ${currentPlayer}`;
    messageWinnerPlayer.style.display = 'block';
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
