export function sortearLetra() {
  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const indiceAleatorio = Math.floor(Math.random() * alfabeto.length);
  return alfabeto[indiceAleatorio];
}