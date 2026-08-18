/**
 * Imprime por consola cada nombre contenido en una lista.
 *
 * @param {string[]} nombresArray - Array con los nombres a imprimir.
 * @returns {boolean} Returns true si se imprimieron correctamente, false si la entrada es inválida.
 */
function imprimirNombres(nombresArray) {
  // 1. Guard Clause: Verificar que sea un Array válido y no esté vacío
  if (!Array.isArray(nombresArray) || nombresArray.length === 0) {
    console.log("Error: Debes proporcionar una lista con al menos un nombre.");
    return false;
  }

  // 2. Iteración limpia con for...of
  for (const nombre of nombresArray) {
    // Validación opcional por elemento: asegura que sea un string antes de procesar
    if (typeof nombre === "string" && nombre.trim() !== "") {
      console.log(nombre.trim());
    } else {
      console.log(`[Aviso: Elemento omitido por no ser un texto válido]`);
    }
  }

  return true;
}

// --- Casos de Prueba ---
const listaNombres = ["Andres", "Marta", "Arya", "Wendy"];

console.log("--- Caso con Array Válido ---");
imprimirNombres(listaNombres);

console.log("\n--- Caso con Elementos Mixtos / No String ---");
imprimirNombres(["Andres", 123, "Arya", ""]);

console.log("\n--- Caso con Entrada Inválida (Guard Clause) ---");
imprimirNombres("No soy un array"); // Output: Error
