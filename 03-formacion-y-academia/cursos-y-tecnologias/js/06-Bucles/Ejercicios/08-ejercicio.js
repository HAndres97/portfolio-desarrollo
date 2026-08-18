/**
 * Usa un bucle para invertir una cadena de texto.
 * @param {string} texto
 * @returns {string|null}
 */
function invertirCadena(texto) {
  if (typeof texto !== "string" || !texto.trim()) {
    console.log("Error: Dato incorrecto");
    return null;
  }
  const textoLimpio = texto.trim();
  let textoInvertido = "";
  for (let i = textoLimpio.length - 1; i >= 0; i--) {
    //console.log(textoLimpio[i]); Prueba
    textoInvertido += textoLimpio[i];
    //textoInvertido.concat("", textoLimpio[i]);-Por que no sirve?
  }
  return textoInvertido;
}
const texto = " Esto es una cadena de texto";
console.log(`Texto invertido: ${invertirCadena(texto)}`);
console.log(`Texto invertido: ${invertirCadena(9)}`);

/**
 * *
 * *const invertirExpress = (texto) =>
 * *typeof texto === "string" ? texto.split("").reverse().join("") : null;
 * *console.log(invertirExpress("Hola")); // "aloH"
 *
 * *.split(""): Convierte el String en un Array de caracteres (['H', 'o', 'l', 'a']).
 * *.reverse(): Invierte el orden de los elementos del Array (['a', 'l', 'o', 'H']).
 * *.join(""): Une los elementos del Array de nuevo en un String ("aloH")
 *
 */
