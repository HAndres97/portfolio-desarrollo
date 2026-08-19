/**
 * Invierte el orden de las palabras contenidas en una cadena de texto.
 *
 * @param {string} cadenaTexto - Texto de entrada a procesar.
 * @returns {string|null} Cadena con el orden de las palabras invertido o null si la entrada es inválida.
 */
function invertirPalabras(cadenaTexto) {
  // 1. Guard Clause: Validar que sea un string y no esté vacío
  if (typeof cadenaTexto !== "string" || !cadenaTexto.trim()) {
    console.log("Error: Debes proporcionar un texto válido.");
    return null;
  }

  // 2. Proceso de inversión:
  // - trim(): Elimina espacios a los extremos
  // - split(/\s+/): Divide por 1 o más espacios en blanco (evita elementos vacíos "")
  // - reverse(): Invierte el array de palabras
  // - join(" "): Une las palabras con un único espacio
  return cadenaTexto.trim().split(/\s+/).reverse().join(" ");
}

// --- BANCO DE PRUEBAS ---
const textoEstandar = "Esto es una cadena de texto. ";
const textoEspaciosMultiples = "  Hola   mundo   desde   JavaScript  ";

console.log("Estándar:", `"${invertirPalabras(textoEstandar)}"`);
// Output: "texto. de cadena una es Esto"

console.log(
  "Espacios múltiples:",
  `"${invertirPalabras(textoEspaciosMultiples)}"`,
);
// Output: "JavaScript desde mundo Hola" (Sin espacios dobles extra)

console.log("Prueba Guard Clause (Número):", invertirPalabras(9));
// Output: null
