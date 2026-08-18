/**
 * Crea un bucle que imprima los nÃºmeros del 1 al 20
 * @returns {Array}
 *
 */
const miArray = [];
function imprimirNumeros(miArray) {
  for (let i = 1; i <= 20; i++) {
    // console.log(i); - Imprime los numeros
    miArray.push(i);
  }
  return miArray;
}
console.log(`Los numeros impresos del 1 al 20 : ${imprimirNumeros(miArray)}`);
/**
 * Genera directamente un array del 1 al 20 en 1 sola línea:
 * const del1Al20 = Array.from({ length: 20 }, (_, index) => index + 1);
 *
 */
