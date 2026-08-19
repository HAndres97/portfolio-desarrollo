/**
 * Crea una funciÃ³n que reciba un array de nÃºmeros y devuelva el mayor de ellos.
 *
 * @param {number[]} numerosArray
 * @returns {number|null} -Funcion delvuelve el mayor o null
 *
 */
function encontrarNumeroMayor(numerosArray) {
  //1-Guard Clouse
  if (!Array.isArray(numerosArray) || numerosArray.length === 0) {
    console.log("Error:Dato incorrecto");
    return null;
  }
  const sonNumerosValidos = numerosArray.every(
    (item) => typeof item === "number" && !Number.isNaN(item),
  );
  if (!sonNumerosValidos) {
    console.log(
      "Error: Todos los elementos del array deben ser números válidos.",
    );
    return null;
  }
  //2-Encontramos el numero mayor
  let numeroMayor = numerosArray[0];
  for (const numero of numerosArray) {
    if (numero > numeroMayor) {
      numeroMayor = numero;
    }
  }
  //Devolvemos resultado
  return numeroMayor;
}
// --- Casos de Prueba ---
const numerosPositivos = [2, 5, 6, 7, 8, 9, 34, 67];
const numerosNegativos = [-5, -12, -30, -2];

console.log("Mayor positivo:", encontrarNumeroMayor(numerosPositivos)); // Output: 67
console.log("Mayor negativo:", encontrarNumeroMayor(numerosNegativos)); // Output: -2 (Corregido)
console.log("Prueba Guard Clause:", encontrarNumeroMayor([1, "hola"])); // Output: null
/**
 * *Una vez validado el array la forma mas sencilla
 * const numeroMayor = Math.max(...numerosArray);
 *
 */
