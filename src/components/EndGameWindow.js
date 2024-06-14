import React from 'react';
import '../assets/App.css';
import { MyButton } from './utils/Buttons';

export function EndGameWindow({ letraAtualIndex, totalLetras, onRestart, onBackToMenu }) {
  return (
    <div className='end-game'>
      <p>Jogo terminado!</p>
      <p>Pontuação: {letraAtualIndex}/{totalLetras}</p>
      <div className='buttons-container-end'>
        <MyButton btnTitle="Reiniciar" btnClass="btn btn-restart" onClick={onRestart} />
        <MyButton btnTitle="Inicio" btnClass="btn btn-back" onClick={onBackToMenu} />
      </div>
      
    </div>
  );
}
