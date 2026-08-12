/*
Comprueba si dos strings tienen la misma longitud
*/
const cadena1 = "Una cadena de texto";
const cadena2 = "Una cadena de texto";

const comprobacion = cadena1.length === cadena2.length;

console.log(comprobacion);
/**
 * Comprueba si dos textos tienen exactamente el mismo número de caracteres.
 *
 * @param {string} texto1 - Primer texto.
 * @param {string} texto2 - Segundo texto.
 * @returns {boolean}
 */
function tienenMismaLongitud(texto1, texto2) {
  // Paso 1: Validar que ambos argumentos sean realmente strings
  if (typeof texto1 !== "string" || typeof texto2 !== "string") {
    return false;
  }

  // Paso 2: Obtener las longitudes
  const longitud1 = texto1.length;
  const longitud2 = texto2.length;

  // Paso 3: Comparar con igualdad estricta
  return longitud1 === longitud2;
}

// Pruebas:
console.log(tienenMismaLongitud("Hola", "Gato")); // true (4 === 4)
console.log(tienenMismaLongitud("Hola", "Mundo")); // false (4 === 5)
