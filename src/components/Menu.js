import React, { useState } from 'react';
import { MyButton } from './utils/Buttons';
import { GameWindow } from './GameWindow';
import { DificultWindow } from './DifficultWindow';
import { Sounds } from '../scripts/Sounds';

const sounds = new Sounds();

export function Menu() {
  const [showGameWindow, setShowGameWindow] = useState(false);
  const [difficulty, setDifficulty] = useState(null);

  const handleStartClick = () => {
    if (difficulty !== null) {
      sounds.startSound();
      setShowGameWindow(true);
    } else {
      alert("Selecione uma dificuldade.");
    }
  };

  const handleRestart = () => {
    sounds.startSound();
    setShowGameWindow(false);
    setTimeout(() => {
      setShowGameWindow(true);
    }, 0);
  };

  const handleBackToMenu = () => {
    setShowGameWindow(false);
  };

  return (
    <main>
      {!showGameWindow && <DificultWindow onDifficultySelect={setDifficulty} />}
      <section className='body-menu'>   
        <div className='start-container'>
          <h1>Mini-Game</h1>
          {!showGameWindow && (
            <MyButton 
              btnTitle="Iniciar" 
              btnId="btn-start" 
              btnClass="btn btn-start" 
              onClick={handleStartClick}
            />
          )}
        </div>
        {showGameWindow && difficulty !== null && (
          <GameWindow 
            difficulty={difficulty}
            onRestart={handleRestart}
            onBackToMenu={handleBackToMenu}
          />
        )}
      </section>
    </main> 
  );
}