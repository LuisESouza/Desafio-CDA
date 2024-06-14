export class Sounds {
    constructor() {}
  
    keySound() {
        const correctKeyAudio = new Audio('/sounds/clickTecla.mp3');
        correctKeyAudio.currentTime = 0;
        correctKeyAudio.play();
    }

    startSound(){
        const correctStartAudio = new Audio('/sounds/startGame.mp3');
        correctStartAudio.currentTime = 0;
        correctStartAudio.play();
    }

    endSound(){
        const correctEndAudio = new Audio('/sounds/endGame.mp3');
        correctEndAudio.currentTime = 0;
        correctEndAudio.play();
    }
  }
  