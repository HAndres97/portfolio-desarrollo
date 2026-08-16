/**
 * 1. Imprime por consola tu nombre si una variable toma su valor.
 *
 * @param {number} valorEvaluado - El valor a comprobar
 * @param {number} [valorEsperado=4] - El valor objetoi por defecto 4
 * @param {string} [nombre="Christian"] - El nombre a imprimir si coincide
 */
function evaluarNombre(valorEvaluado, valorEsperado = 4, nombre = "Christian") {
  //Guar Clause: Validacion temprana de tipos
  if (typeof valorEvaluado !== "number") {
    console.log("Error:El valor ingresado debe ser un numero");
    return;
  }
  //Logica principal
  if (valorEvaluado === valorEsperado) {
    console.log(`Mi nombre es ${nombre}`);
  } else {
    console.log("Valor invalido");
  }
}
evaluarNombre(4);
evaluarNombre(10);
evaluarNombre("f");
