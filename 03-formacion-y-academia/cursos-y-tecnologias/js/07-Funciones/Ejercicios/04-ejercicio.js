/**
 * 4. Crea una funciÃ³n que reciba un array de strings y devuelva un nuevo array con las strings en mayÃºsculas.
 *  @param {string[]} letrasArray - parametro que se le pasa a la funcion
 * @returns {string[]|null} -Devuelve letras mayores o null por error
 *
 */
function encontrarLetrasMayusculas(letrasArray) {
  if (!Array.isArray(letrasArray) || letrasArray.length === 0) {
    console.error("Error:Dato incorrecto");
    return null;
  }
  const validacionArray = letrasArray.every(
    (item) => typeof item === "string" && item.trim() !== 0,
  );
  if (!validacionArray) {
    console.log("Error: Datos incorrectos del array");
    return null;
  }
  const letrasMayores = [];
  for (const letra of letrasArray) {
    if (letra >= "A" && letra <= "Z") {
      letrasMayores.push(letra);
    }
  }
  return letrasMayores;
}
const letrasArray = ["I", "o", "A", "e"];
console.log("Las letras mayores son:", encontrarLetrasMayusculas(letrasArray));
console.log("Las letras mayores son:", encontrarLetrasMayusculas(9));
console.log("Las letras mayores son:", encontrarLetrasMayusculas(["3", 98]));

/**
 * * Otra forma de hacerlo mejor
 * for (const texto of letrasArray) {
    const textoLimpio = texto.trim();
    
    // Compara si la cadena es igual a su versión en mayúsculas (soporta Ñ y tildes)
    if (textoLimpio === textoLimpio.toUpperCase()) {
      resultado.push(textoLimpio);
    }
  }
 * 
 * * Forma senior
 * const obtenerSoloMayusculas = (letrasArray) =>
  Array.isArray(letrasArray) && letrasArray.length > 0
    ? letrasArray.filter((texto) => texto.trim() === texto.trim().toUpperCase())
    : null;
*/
