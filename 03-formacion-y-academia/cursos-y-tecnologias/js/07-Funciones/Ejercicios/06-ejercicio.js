/**
 * Crea una funciÃ³n que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.
 *
 * @param {Array} miArray- array con distintos valores.
 * @param {Array} miArray2 -array con distintos valores.
 * @returns {Array|null} -funcion que devuelve lo comun de los arrays
 */
function encontrarComunes(miArray, miArray2) {
  if (
    !Array.isArray(miArray) ||
    !Array.isArray(miArray2) ||
    miArray.length === 0 ||
    miArray2.length === 0
  ) {
    console.log("Error:Datos incorrectos");
    return null;
  }
  const miArrayLimpio = miArray.map((elemento) => {
    if (typeof elemento === "string" && elemento.trim() !== 0) {
      return elemento.toLowerCase().trim();
    }
    return elemento;
  });
  const miArrayLimpio2 = miArray2.map((elemento) => {
    if (typeof elemento === "string" && elemento.trim() !== "") {
      return elemento.toLowerCase().trim();
    }
    return elemento;
  });
  const setArray1 = new Set(miArrayLimpio);
  const setArray2 = new Set(miArrayLimpio2);
  const setComunes = setArray1.intersection(setArray2);
  const ArrayComunes = [...setComunes];
  return ArrayComunes;
}
const miArray = ["Hola", 45, 78, "h", "Programador", "f"];
const miArray2 = ["Hoa", 4, 78, "f", "Programador", "", NaN];
console.log("Comunes:", encontrarComunes(miArray, miArray2));
console.log("Comunes:", encontrarComunes("hola", miArray2));
console.log("Comunes:", encontrarComunes([], miArray2));
