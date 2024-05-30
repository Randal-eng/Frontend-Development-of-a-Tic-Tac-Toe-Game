const celdas = document.getElementsByClassName('celda');

for (let i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click', () =>{
        console.log(`Div ${i + 1} seleccionada`);
    });
}

let jugadorActual = 'X';
let juegoActivo = true;
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





