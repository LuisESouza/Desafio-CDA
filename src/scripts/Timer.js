import { useState, useEffect } from 'react';

export function useTimer(initialTime, gameOver) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {

    if(timeLeft === 0 ||  gameOver === true) {
      return ;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, gameOver]);

  return timeLeft;
}