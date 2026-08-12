/*
Comprueba si dos strings son iguales. 
*/
//const palabra1 = "palabra";

// Redundante
//let comparacion = palabra1 === "Palabra" ? true : false;

//console.log(comparacion);

/**
 * Compara si dos cadenas son iguales.
 *
 * @param {string} str1 - Primera cadena a comparar.
 * @param {string} str2 - Segunda cadena a comparar.
 * @param {boolean} [ignorarMayusculas=false] - Si es true, ignora mayúsculas/minúsculas.
 * @returns {boolean}
 */
function sonIguales(str1, str2, ignorarMayusculas = false) {
  // Paso 1: Cláusula de guarda - Si alguno no es un string, devolvemos false
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return false;
  }

  // Paso 2: Si el usuario quiere ignorar mayúsculas, convertimos ambos a minúsculas
  if (ignorarMayusculas) {
    return str1.toLowerCase() === str2.toLowerCase();
  }

  // Paso 3: Comparación estricta directa
  return str1 === str2;
}
const palabra1 = "palabra";
const palabra2 = "Palabra";

// Comparación estricta (distingue mayúsculas)
console.log(sonIguales(palabra1, palabra2)); // false

// Comparación flexible (ignora mayúsculas)
console.log(sonIguales(palabra1, palabra2, true)); // true
