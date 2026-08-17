/**
 *
 * 7. Crea un mapa que asocie el numero del mes a su nombre.
 * 8. Comprueba si el mes número 5 existe en el map e imprime su valor.
 * 9. Añade al mapa una clave con un array que almacene los meses de verano.
 * 10. Crea un Array, transfórmalo a un Set y almacenalo en un Map.
 *
 * @param {Map} calendario - Valor-Nombre del mes
 */
const calendario = new Map([
  [1, "enero"],
  [2, "febrero"],
  [3, "marzo"],
  [4, "abril"],
  [5, "mayo"],
  [6, "junio"],
  [7, "julio"],
  [8, "agosto"],
  [9, "septiembre"],
  [10, "octubre"],
  [11, "noviembre"],
  [12, "diciembre"],
]);
// Comprueba si el mes número 5 existe en el map e imprime su valor.
if (calendario.has(5)) {
  console.log(calendario.get(5));
}
//Añade al mapa una clave con un array que almacene los meses de verano.
calendario.set(13, ["junio", "julio", "agosto"]);
console.log(calendario.get(13));
//Crea un Array, transfórmalo a un Set y almacenalo en un Map.
const miArray = [1, 2, 3, 4, 5, 6, 7];
const miSet = new Set(miArray);
const miMap = new Map([[1, miSet]]);
console.log(miMap);
