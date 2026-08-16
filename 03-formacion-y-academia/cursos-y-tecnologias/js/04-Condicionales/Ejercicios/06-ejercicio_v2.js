/**
 * Muestra en qué estación del año nos encontramos dependiendo del mes indicado.
 *
 * @param {string} mes - Nombre del mes a evaluar.
 * @returns {string|null} Nombre de la estación o null si el mes es inválido.
 */
function mostrarEstacion(mes) {
  // 1. Guard Clause: Validación temprana de tipo
  if (typeof mes !== "string") {
    console.log("Error: El mes ingresado debe ser una cadena de texto.");
    return null;
  }

  // 2. Normalización de entrada (minúsculas y sin espacios extra)
  const mesLimpio = mes.toLowerCase().trim();

  // 3. Estructura de datos agrupada (Diccionario de Estaciones)
  const estaciones = {
    Primavera: ["marzo", "abril", "mayo"],
    Verano: ["junio", "julio", "agosto"],
    Otoño: ["septiembre", "octubre", "noviembre"],
    Invierno: ["diciembre", "enero", "febrero"],
  };

  // 4. Búsqueda limpia en el diccionario
  for (const [estacion, meses] of Object.entries(estaciones)) {
    if (meses.includes(mesLimpio)) {
      return estacion;
    }
  }

  // 5. Si no se encuentra coincidencia en ningún array
  console.log("Error: El mes introducido no existe.");
  return null;
}

// --- Casos de Prueba ---
console.log(mostrarEstacion("enero")); // Output: "Invierno"
console.log(mostrarEstacion("  MAYO ")); // Output: "Primavera" (gracias a .trim() y .toLowerCase())
console.log(mostrarEstacion("eneros")); // Output: null (con aviso en consola)
console.log(mostrarEstacion(34)); // Output: null (con aviso en consola)
