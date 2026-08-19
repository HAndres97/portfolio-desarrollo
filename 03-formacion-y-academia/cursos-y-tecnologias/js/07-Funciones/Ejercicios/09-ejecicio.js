/**
 *  Crea una funciÃ³n que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.
 * @param {string} cadenaTexto
 * @returns {string|null} invertirPalabras
 */
function invertirPalabras(cadenaTexto) {
  if (typeof cadenaTexto !== "string" || !cadenaTexto.trim()) {
    console.log("Error: Datos incorrectos");
    return null;
  }
  /**
   * Con funciones
   * const textoLimpio = cadenaTexto.trim().split(" ");
   * let textoAlreves = "";
   * for (const palabra of textoLimpio){
   *       textoAlrevs = palabra + " " + textoAlreves;,
   * }
   * return textoAlreves.trim();
   *
   */
  const textoAlreves = cadenaTexto.trim().split(" ").reverse().join(" ");
  return textoAlreves;
}
const cadenaTexto = "Esto es una cadena de texto. ";
console.log(invertirPalabras(cadenaTexto));
console.log(invertirPalabras(9));
