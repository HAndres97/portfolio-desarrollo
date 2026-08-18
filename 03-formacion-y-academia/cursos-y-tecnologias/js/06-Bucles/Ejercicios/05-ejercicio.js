/**
 *
 *  Escribe un bucle que cuente el nÃºmero de vocales en una cadena de texto.
 *
 * @param {string} texto
 * @returns {number|null}
 */
function contadorVocales(texto, vocales) {
  if (typeof texto !== "string" || !texto.trim() || !Array.isArray(vocales)) {
    console.log("Error: Dato incorrecto");
    return null;
  }
  const textoLimpio = texto.toLowerCase().trim();
  let contador = 0;
  for (const vocal of vocales) {
    contador += textoLimpio.split(vocal).length - 1;
  }
  return contador;
}
const vocales = ["a", "e", "i", "o", "u"];
const texto = "Esto es una prueba de texto con muchas vocales";

console.log(
  `Las vocales total de la cadena de texto : ${contadorVocales("Texto sin filtros", vocales)}`,
);
console.log(
  `Las vocales total de la cadena de texto : ${contadorVocales(texto, vocales)}`,
);
console.log(
  `Las vocales total de la cadena de texto : ${contadorVocales(9, vocales)}`,
);
