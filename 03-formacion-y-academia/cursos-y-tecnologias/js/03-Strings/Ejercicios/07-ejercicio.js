/*
Compruebe si una cadena de texto contiene una palabra concreta
*/

const cadenaTexto =
  "Esta es una cadena de texto, para averiguar si funciona un metodo";
console.log(cadenaTexto.includes("es"));

/**
 * Comprueba si un texto contiene una palabra completa,
 * ignorando mayúsculas y minúsculas.
 *
 * @param {string} texto - La cadena donde buscar.
 * @param {string} palabra - La palabra a buscar.
 * @returns {boolean}
 */
function contienePalabra(texto, palabra) {
  if (!texto || !palabra) return false;

  const regex = new RegExp(`\\b${palabra}\\b`, "i");
  return regex.test(texto);
}

// Pruebas
const frase =
  "Esta es una cadena de texto, para averiguar si funciona un metodo";

console.log(contienePalabra(frase, "ES")); // true (encuentra la palabra "es")
console.log(contienePalabra(frase, "funcio")); // false (no coincide parcialmente)
console.log(contienePalabra(frase, "metodo")); // true
