/**
 * 4. Convierte todos los strings de un array a mayúsculas.
 *
 * @param {string[]} letrasArray - Array de cadenas de texto a transformar.
 * @returns {string[]|null} Nuevo array con los textos en mayúsculas o null si falla la entrada.
 */
function transformarAMayusculas(letrasArray) {
  // 1. Guard Clause: Validar que sea un Array y que no esté vacío
  if (!Array.isArray(letrasArray) || letrasArray.length === 0) {
    console.error("Error: Debes proporcionar un array no vacío.");
    return null;
  }

  // 2. Validación de elementos internos
  const sonTodosStrings = letrasArray.every(
    (item) => typeof item === "string" && item.trim() !== "",
  );

  if (!sonTodosStrings) {
    console.log(
      "Error: Todos los elementos del array deben ser textos válidos.",
    );
    return null;
  }

  // Opción A: Con bucle for...of clásico
  const resultado = [];
  for (const texto of letrasArray) {
    resultado.push(texto.trim().toUpperCase());
  }
  return resultado;

  // Opción B: Con .map() en 1 sola línea (Forma Funcional Senior)
  // return letrasArray.map((texto) => texto.trim().toUpperCase());
}

// --- Casos de Prueba ---
const listaLetras = ["I", "o", "A", "e"];

console.log("Array transformado:", transformarAMayusculas(listaLetras));
// Output: ["I", "O", "A", "E"]

console.log("Prueba Guard Clause (Número):", transformarAMayusculas(9));
// Output: null

console.log(
  "Prueba Guard Clause (Tipos mixtos):",
  transformarAMayusculas(["3", 98]),
);
// Output: null
