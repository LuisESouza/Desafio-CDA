import React from 'react';
import '../../assets/buttons.css';

export function MyButton({ btnTitle, btnId, btnClass, onClick }) {
  return (
    <button className={btnClass} id={btnId} onClick={onClick}>
      {btnTitle}
    </button>
  );
}
