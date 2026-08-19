/**
 * Crea una funciÃ³n que calcule el factorial de un nÃºmero dado.
 * @param {number} numero - Se le pasa por referencia
 * @returns {number|null} - funcion que regresa el fctorial
 *
 */

function calcularFactorial(numero) {
  if (typeof numero !== "number" || Number.isNaN(numero) || numero < 0) {
    console.log("Error: Datos incorrectos");
    return null;
  }
  // 2. Por definición matemática, el factorial de 0 y de 1 siempre es 1
  if (numero === 0 || numero === 1) return 1;
  let acumulador = 1;
  for (let i = 2; i <= numero; i++) {
    acumulador *= i;
  }
  return acumulador;
}
const numero = 5;
console.log(calcularFactorial(numero));
console.log(calcularFactorial(56));
