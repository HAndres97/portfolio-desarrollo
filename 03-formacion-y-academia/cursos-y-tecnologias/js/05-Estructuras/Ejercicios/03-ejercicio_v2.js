/**
 * 7. Creación e inicialización del Mapa de meses
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

/**
 * 8. Comprueba si un número de mes existe en el mapa y devuelve su valor.
 *
 * @param {Map<number, string>} mapa - El mapa a consultar.
 * @param {number} numeroMes - Clave numérica del mes.
 * @returns {string|null} Nombre del mes o null si no existe.
 */
function obtenerNombreMes(mapa, numeroMes) {
  if (!(mapa instanceof Map) || typeof numeroMes !== "number") {
    console.log("Error: Tipos de entrada inválidos.");
    return null;
  }

  if (mapa.has(numeroMes)) {
    return mapa.get(numeroMes);
  }

  console.log(`Error: El mes número ${numeroMes} no existe en el mapa.`);
  return null;
}

// 9. Añadir clave semántica con un Array de meses de verano
const mesesVerano = ["junio", "julio", "agosto"];
calendario.set("verano", mesesVerano); // Usamos "verano" como clave semántica de tipo String

// 10. Transformar Array -> Set -> Almacenar en Map
const miArray = [1, 2, 3, 4, 5, 6, 7];
const miSet = new Set(miArray); // Elimina duplicados si los hubiera
const miMap = new Map([["numerosUnicos", miSet]]);

// --- Casos de Prueba ---
console.log("--- Consulta de Mes ---");
console.log(obtenerNombreMes(calendario, 5)); // Output: "mayo"
console.log(obtenerNombreMes(calendario, 14)); // Output: null

console.log("--- Clave Semántica de Verano ---");
console.log(calendario.get("verano")); // Output: ["junio", "julio", "agosto"]

console.log("--- Map con Set Contenido ---");
console.log(miMap.get("numerosUnicos")); // Output: Set(7) { 1, 2, 3, 4, 5, 6, 7 }
