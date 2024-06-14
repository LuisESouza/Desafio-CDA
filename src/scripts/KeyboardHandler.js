import { Sounds } from './Sounds';

const sounds = new Sounds();

export const handleKeyDown = (event, letrasSorteadas, letraAtualIndex, setLetraAtualIndex, setGameOver, botaoClicado, setBotaoClicado) => {
  const teclaPressionada = event.key.toUpperCase();
  const letraAtual = letrasSorteadas[letraAtualIndex];

  if (!botaoClicado[letraAtualIndex]) {
    if (teclaPressionada === letraAtual) {
      const newBotaoClicado = [...botaoClicado];
      newBotaoClicado[letraAtualIndex] = true;
      setBotaoClicado(newBotaoClicado);

      sounds.keySound();
      
      if (letraAtualIndex === letrasSorteadas.length - 1) {
        setLetraAtualIndex(letraAtualIndex + 1);
        setTimeout(() => {
          setGameOver(true);
        }, 10);
      } else {
        setLetraAtualIndex(letraAtualIndex + 1);
      }
    } else {
      setGameOver(true);
    }
  }
};
