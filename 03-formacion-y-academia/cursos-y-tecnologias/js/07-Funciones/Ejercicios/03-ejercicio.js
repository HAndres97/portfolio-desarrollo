/**
 *
 * Crea una funciÃ³n que reciba un string y devuelva el nÃºmero de vocales que contiene.
 *
 * @param {string} cadenaTexto
 * @param {number|null} Cantidad total de vocales o null si la entrada es inválida.
 */
function contarVocales(cadenaTexto) {
  if (typeof cadenaTexto !== "string" || !cadenaTexto.trim()) {
    console.log("Error:Tipo de dato incorrecto");
    return null;
  }
  const VOCALES = new Set(["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"]);
  const cadenaTextoLimpia = cadenaTexto.toLowerCase().trim();
  let contadorVocales = 0;
  for (const letra of cadenaTextoLimpia) {
    if (VOCALES.has(letra)) {
      contadorVocales++;
    }
  }
  return contadorVocales;
}
const cadenaTexto = "Cadena de Texto  ";
console.log("Número de vocales en la cadena:", contarVocales(cadenaTexto));
console.log(contarVocales(23));
