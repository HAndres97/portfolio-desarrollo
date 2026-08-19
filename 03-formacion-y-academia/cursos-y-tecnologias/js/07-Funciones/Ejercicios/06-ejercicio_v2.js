/**
 * Encuentra los elementos comunes entre dos arrays, normalizando textos a minúsculas.
 *
 * @param {Array} miArray - Primer array con valores heterogéneos.
 * @param {Array} miArray2 - Segundo array con valores heterogéneos.
 * @returns {Array|null} Array con los elementos comunes o null si los datos de entrada son inválidos.
 */
function encontrarComunes(miArray, miArray2) {
  // 1. Guard Clause: Validar que ambos sean Arrays no vacíos
  if (
    !Array.isArray(miArray) ||
    !Array.isArray(miArray2) ||
    miArray.length === 0 ||
    miArray2.length === 0
  ) {
    console.log("Error: Debes proporcionar dos arrays no vacíos.");
    return null;
  }

  // 2. Función helper interna para normalizar un elemento
  const normalizarElemento = (elemento) => {
    // Si es string y no es cadena vacía tras trim
    if (typeof elemento === "string" && elemento.trim() !== "") {
      return elemento.toLowerCase().trim();
    }
    return elemento;
  };

  // 3. Limpieza de ambos arrays reutilizando la función helper
  const limpio1 = miArray.map(normalizarElemento);
  const limpio2 = miArray2.map(normalizarElemento);

  // 4. Intersección eficiente con Set
  const set1 = new Set(limpio1);
  const set2 = new Set(limpio2);

  // Set.prototype.intersection() (ES2024)
  const setComunes = set1.intersection(set2);

  return [...setComunes];
}

// --- BANCO DE PRUEBAS ---
const miArray1 = ["Hola", 45, 78, "h", "Programador", "f"];
const miArray2 = ["Hoa", 4, 78, "f", "Programador", "", NaN];

console.log("Comunes:", encontrarComunes(miArray1, miArray2));
// Output: [ 78, 'f', 'programador' ]

console.log(
  "Prueba Guard Clause (String):",
  encontrarComunes("hola", miArray2),
);
// Output: Error / null

console.log("Prueba Guard Clause (Vacio):", encontrarComunes([], miArray2));
// Output: Error / null
