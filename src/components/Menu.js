import { useState, React } from 'react';
import { MyButton } from './utils/Buttons';
import { GameWindow } from './GameWindow';
import { Sounds } from '../scripts/Sounds';

const sounds = new Sounds();

export function Menu() {
  const [showGameWindow, setShowGameWindow] = useState(false);

  const handleStartClick = () => {
    sounds.startSound();
    setShowGameWindow(true);
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
        
        {showGameWindow && (
          <GameWindow 
            onRestart={handleRestart}
            onBackToMenu={handleBackToMenu}
          />
        )}
      </section>
    </main> 
  );
}
