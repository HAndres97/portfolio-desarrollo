/**
 * Diccionario estático de días por mes (fuera de la función para evitar re-crearlo en memoria)
 */
const DIAS_POR_MES = {
  31: ["enero", "marzo", "mayo", "julio", "agosto", "octubre", "diciembre"],
  30: ["abril", "junio", "septiembre", "noviembre"],
  28: ["febrero"],
};

/**
 * Muestra el número de días que tiene un mes.
 *
 * @param {string} mes - Nombre del mes a evaluar.
 * @param {boolean} [esBisiesto=false] - Indica si se debe evaluar Febrero en año bisiesto.
 * @returns {number|null} Número de días que tiene el mes o null si es inválido.
 */
function obtenerDiasDelMes(mes, esBisiesto = false) {
  // 1. Guard Clause: Validación temprana de tipo
  if (typeof mes !== "string") {
    console.log("Error: El mes ingresado debe ser una cadena de texto.");
    return null;
  }

  // 2. Normalización de entrada
  const mesLimpio = mes.toLowerCase().trim();

  // 3. Manejo especial para año bisiesto
  if (mesLimpio === "febrero" && esBisiesto) {
    return 29;
  }

  // 4. Búsqueda en el diccionario
  for (const [dias, meses] of Object.entries(DIAS_POR_MES)) {
    if (meses.includes(mesLimpio)) {
      return Number(dias); // Convertimos la clave de String a Number
    }
  }

  // 5. Caso no encontrado
  console.log("Error: El mes introducido no existe.");
  return null;
}

// --- Casos de Prueba ---
console.log(obtenerDiasDelMes("enero")); // Output: 31 (Número)
console.log(obtenerDiasDelMes("febrero")); // Output: 28 (Número)
console.log(obtenerDiasDelMes("febrero", true)); // Output: 29 (Año bisiesto)
console.log(obtenerDiasDelMes("mmmm")); // Output: null
console.log(obtenerDiasDelMes(9)); // Output: null
