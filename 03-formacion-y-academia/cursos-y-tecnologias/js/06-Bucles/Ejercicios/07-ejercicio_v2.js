/**
 * Imprime por consola la tabla de multiplicar de un número hasta un límite determinado.
 *
 * @param {number} numero - Número base para generar la tabla.
 * @param {number} [limite=10] - Límite de multiplicaciones a realizar (por defecto 10).
 * @returns {boolean} Retorna true si la tabla se imprimió correctamente, false si los datos son inválidos.
 */
function mostrarTablaMultiplicar(numero, limite = 10) {
  // 1. Guard Clause: Validación de número base y límite
  if (
    typeof numero !== "number" ||
    typeof limite !== "number" ||
    Number.isNaN(numero) ||
    Number.isNaN(limite) ||
    !Number.isInteger(limite) ||
    limite <= 0
  ) {
    console.log(
      "Error: Debes ingresar un número válido y un límite entero positivo.",
    );
    return false;
  }

  console.log(`--- Tabla de multiplicar del ${numero} ---`);

  // 2. Bucle de impresión de la tabla
  for (let i = 1; i <= limite; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }

  return true;
}

// --- Casos de Prueba ---
console.log("--- Prueba Tabla del 5 (por defecto) ---");
mostrarTablaMultiplicar(5);

console.log("\n--- Prueba Tabla del 7 (hasta el 12) ---");
mostrarTablaMultiplicar(7, 12);

console.log("\n--- Casos de Error (Guard Clauses) ---");
mostrarTablaMultiplicar("saf"); // Output: Error
mostrarTablaMultiplicar(NaN); // Output: Error
