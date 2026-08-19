/**
 * Crea una funciÃ³n que reciba un array de nÃºmeros y devuelva un nuevo array con cada nÃºmero elevado al cuadrado.
 *
 * @param {number[]} arrayNumeros
 * @returns {number[]|null} elevarCuadrado -funcion
 *
 */
function elevarCuadrado(arrayNumeros) {
  if (!Array.isArray(arrayNumeros) || arrayNumeros.length === 0) {
    console.log("Error: Dato incorrecto");
    return null;
  }
  const validacionNumeros = arrayNumeros.every(
    (item) =>
      typeof item === "number" && !Number.isNaN(item) && Number.isInteger(item),
  );
  if (!validacionNumeros) {
    console.log("Error: Arrays de datos incorrectos");
    return null;
  }
  /**
   * Forma de funcion
   * const arrayCuadrados = [];
   * for(numero of arrayNumeros){
   *    arrayCuadrados.push(numero*numero);
   * }
   * return arrayCuadrados;
   */
  const arrayCuadrados = arrayNumeros.map((numero) => numero * numero);
  return arrayCuadrados;
}
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Array de cuadrados :", elevarCuadrado(arrayNumeros));
console.log("Array de cuadrados :", elevarCuadrado(""));
console.log("Array de cuadrados :", elevarCuadrado([]));
console.log("Array de cuadrados :", elevarCuadrado(9));
