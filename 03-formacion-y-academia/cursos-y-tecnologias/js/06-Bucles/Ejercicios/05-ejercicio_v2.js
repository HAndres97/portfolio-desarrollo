/**
 * Cuenta el número total de vocales (incluidas mayúsculas y acentuadas) en una cadena de texto.
 *
 * @param {string} texto - Cadena de texto a analizar.
 * @returns {number|null} Cantidad total de vocales o null si la entrada no es válida.
 */
function contadorVocales(texto) {
  // 1. Guard Clause: Validación estricta de tipo y texto no vacío
  if (typeof texto !== "string" || !texto.trim()) {
    console.log("Error: Debes ingresar una cadena de texto válida.");
    return null;
  }

  // 2. Normalización de entrada
  const textoLimpio = texto.toLowerCase().trim();

  // 3. Definición de vocales (incluye vocales con tilde)
  const VOCALES = new Set(["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"]);

  let totalVocales = 0;

  // 4. Bucle for...of directo sobre la cadena de texto
  for (const caracter of textoLimpio) {
    if (VOCALES.has(caracter)) {
      totalVocales++;
    }
  }

  return totalVocales;
}

// --- Casos de Prueba ---
const textoPrueba = "Esto es una prueba de texto con muchas vocales";

console.log("Total vocales:", contadorVocales("Texto sin filtros")); // Output: 5
console.log("Total vocales:", contadorVocales(textoPrueba)); // Output: 17
console.log(
  "Total vocales con tildes:",
  contadorVocales("Música e iluminación"),
); // Output: 10
console.log("Prueba Guard Clause:", contadorVocales(9)); // Output: null
