import React, { useState, useEffect } from 'react';
import { MyButton } from './utils/Buttons';
import '../assets/App.css';
import { sortearLetra } from '../scripts/DrawLetters';
import { useTimer } from '../scripts/Timer';
import { handleKeyDown } from '../scripts/KeyboardHandler';
import { EndGameWindow } from './EndGameWindow';
import { Sounds } from '../scripts/Sounds';

const sounds = new Sounds();

export function GameWindow({ onRestart, onBackToMenu, difficulty }) {
  const [letrasSorteadas, setLetrasSorteadas] = useState([]);
  const [letraAtualIndex, setLetraAtualIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [botaoClicado, setBotaoClicado] = useState(Array(6).fill(false));

  useEffect(() => {
    const novasLetras = Array.from({ length: 6 }, () => sortearLetra());
    setLetrasSorteadas(novasLetras);
    setLetraAtualIndex(0);
    setGameOver(false);
    setBotaoClicado(Array(6).fill(false));
  }, []);

  const timeLeft = useTimer(difficulty, gameOver);
  useEffect(() => {
    if (timeLeft === 0 || letraAtualIndex >= letrasSorteadas.length) {
      setGameOver(false);
      if (timeLeft === 0) {
        sounds.endSound();
        setGameOver(true);
      }
    }
  }, [timeLeft, letraAtualIndex, letrasSorteadas.length]);

  useEffect(() => {
    if (!gameOver) {
      const handleKeyPress = (event) => {
        handleKeyDown(event, letrasSorteadas, letraAtualIndex, setLetraAtualIndex, setGameOver, botaoClicado, setBotaoClicado);
      };
      window.addEventListener('keydown', handleKeyPress);
      return () => {
        window.removeEventListener('keydown', handleKeyPress);
      };
    }
  }, [letrasSorteadas, letraAtualIndex, gameOver, botaoClicado]);

  const buttons = letrasSorteadas.map((letra, index) => ({
    title: letra,
    btnClass: botaoClicado[index] ? 'btn btn-game active' : 'btn-game',
  }));

  useEffect(() => {
    if (gameOver) {
      sounds.endSound();
    }
  }, [gameOver]);

  return (
    <div className='main-game'>
      {!gameOver && (
        <>
          <div className='text-game'>
            <p>Pressione as teclas a seguir: </p>
          </div>

          <div className='container-buttons-game'>
            {buttons.map((button, index) => (
              <MyButton key={index} btnTitle={button.title} btnClass={button.btnClass} />
            ))}
          </div>

          <div className='timer'>
            <p>Tempo restante: {timeLeft} segundos</p>
          </div>
        </>
      )}

      {gameOver && (
        <EndGameWindow
          letraAtualIndex={letraAtualIndex}
          totalLetras={letrasSorteadas.length}
          onRestart={onRestart}
          onBackToMenu={onBackToMenu}
        />
      )}
    </div>
  );
}