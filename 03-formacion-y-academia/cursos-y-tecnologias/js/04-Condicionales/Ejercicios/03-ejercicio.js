/**
 * Verifica si un numero es positivo, negativo o cero e impreme un mensaje
 * @param {number} numero - Numero a verificar
 * @param {void}
 */

function verificarNumero(numero) {
  if (typeof numero !== "number" || Number.isNaN(numero)) {
    console.log("Error: El dato ingresado debe ser un numero válido");
    return;
  }
  if (numero < 0) {
    console.log("El numero es negativo");
  } else if (numero > 0) {
    console.log("El numero es positivo");
  } else {
    console.log("El numero es cero");
  }
}
verificarNumero("f");
verificarNumero(-6);
verificarNumero(3);
