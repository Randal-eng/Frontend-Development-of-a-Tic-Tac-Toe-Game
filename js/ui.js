const emptyCurrentMessage = () => {
    document.getElementById('messageCurrentPlayer').textContent = ` `;
    document.getElementById('currentGame').textContent = ` `;
}

const updateNoWin = () => {
    const messageWinnerPlayer = document.getElementById('messageNoWin');
    messageWinnerPlayer.textContent = `No winner`;
    messageWinnerPlayer.style.display = 'block';
    playSoundEmpate();
    document.querySelectorAll('.div__main, .button, .messageCurrentPlayer, .tittle, .currentGame').forEach(element => {
        element.classList.add('blur');
    });
    document.querySelector('button').disabled = true;
    setTimeout(() => {
        messageWinnerPlayer.style.display = 'none';
        document.querySelectorAll('.div__main, .messageCurrentPlayer, .button, .tittle, .currentGame').forEach(element => {
            element.classList.remove('blur');
        });
        document.querySelector('button').disabled = false;
    }, 2000);
}

const updateCurrentMessage = () => {
    document.getElementById('messageCurrentPlayer').textContent = `Next Player: ${currentPlayer}`;
}

const updateWinMessage = () => {
    const messageWinnerPlayer = document.getElementById('messageWinnerPlayer');
    messageWinnerPlayer.textContent = `Winner: Player ${currentPlayer}`;
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
