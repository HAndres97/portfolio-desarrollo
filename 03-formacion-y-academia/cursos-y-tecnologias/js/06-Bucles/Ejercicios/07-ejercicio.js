/**
 * Escribe un bucle que imprima la tabla de multiplicar del 5.
 * @param {number} numero -Que se va a multiplicar
 * @returns {boolean|null} funcion
 */
function mostrarMultiplicacion(numero) {
  if (typeof numero !== "number" || Number.isNaN(numero)) {
    console.log("Error: Dato incorrecto");
    return null;
  }
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
  return true;
}
console.log(mostrarMultiplicacion(5));
console.log(mostrarMultiplicacion("saf"));
console.log(mostrarMultiplicacion(NaN));
