/**
 *  Crea un bucle que sume todos los nÃºmeros del 1 al 100 y muestre el resultado.
 * @param {number} numeroInferior
 * @param {number} numeroSuperior
 * @returns {number|null} sumarSecuencia
 *
 */
function sumarSecuencia(numeroInferior = 1, numeroSuperior = 100) {
  let sumatorio = 0;
  if (
    typeof numeroInferior !== "number" ||
    typeof numeroSuperior !== "number" ||
    Number.isNaN(numeroInferior) ||
    Number.isNaN(numeroSuperior) ||
    numeroSuperior < numeroInferior
  ) {
    console.log("Error: Datos incorrectos");
    return null;
  }
  for (let i = numeroInferior; i <= numeroSuperior; i++) {
    sumatorio = sumatorio + i;
  }
  return sumatorio;
}
console.log(sumarSecuencia());
console.log(sumarSecuencia(2, 200));
console.log(sumarSecuencia("hola", "programador"));
console.log(sumarSecuencia(400, 300));
