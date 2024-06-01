
const playSoundX = () => {
    const soundClicked = new Audio('./sounds/happy-pop-3-185288.wav');
    soundClicked.play();
}

const playSoundO = () => {
    const soundClicked = new Audio('./sounds/happy-pop-2-185287.wav');
    soundClicked.play();
}

const playSoundRestar = () => {
    const soundClicked = new Audio('./sounds/happy-pop-1-185286.wav');
    soundClicked.play();
}

const playSoundWin = () =>{
    const soundClicked = new Audio('./sounds/level-up-2-199574.wav')
    soundClicked.play();
}

const playSoundEmpate = () =>{
    const soundClicked = new Audio('./sounds/error-8-206492.wav')
    soundClicked.play();
}