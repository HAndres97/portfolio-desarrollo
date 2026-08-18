/**
 * Usa un bucle para generar los primeros 10 nÃºmeros de la secuencia de Fibonacci.
 * @param {number} limiteSecuencia=10
 * @returns {number[],null} funcion
 */
function generarSecuenciaFibonacci(limiteSecuencia) {
  if (typeof limiteSecuencia !== "number" || Number.isNaN(limiteSecuencia)) {
    console.log("Error:Dato incorrecto");
    return null;
  }
  const secuenciaFabonacci = [];
  for (let i = 1; i <= limiteSecuencia; i++) {
    if (secuenciaFabonacci.length === 0) {
      secuenciaFabonacci.push(0, 1);
    }
    const suma = secuenciaFabonacci[i - 1] + secuenciaFabonacci[i];
    secuenciaFabonacci.push(suma);
  }
  return secuenciaFabonacci;
}
const limiteSecuencia = 10;

console.log(
  `Secuencia Fibonacci: ${generarSecuenciaFibonacci(limiteSecuencia)}`,
);
console.log(`Secuencia Fibonacci: ${generarSecuenciaFibonacci("Array")}`);
