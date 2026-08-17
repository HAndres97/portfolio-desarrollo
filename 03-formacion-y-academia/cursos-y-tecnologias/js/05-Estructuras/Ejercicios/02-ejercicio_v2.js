/**
 * Agrega dos animales a un Set de forma segura.
 *
 * @param {Set<string>} conjunto - La instancia de Set donde guardar los animales.
 * @param {string} animalAgregar1 - Primer animal a agregar.
 * @param {string} animalAgregar2 - Segundo animal a agregar.
 * @returns {Set<string>|null} Instancia del Set actualizada o null si falla la validación.
 */
function agregarAnimal(conjunto, animalAgregar1, animalAgregar2) {
  // 1. Guard Clause: Verificación de instancia Set y tipos de string
  if (
    !(conjunto instanceof Set) ||
    typeof animalAgregar1 !== "string" ||
    typeof animalAgregar2 !== "string" ||
    !animalAgregar1.trim() ||
    !animalAgregar2.trim()
  ) {
    console.log(
      "Error: Datos de entrada inválidos o la estructura no es un Set.",
    );
    return null;
  }

  // 2. Normalización
  const animal1Limpio = animalAgregar1.toLowerCase().trim();
  const animal2Limpio = animalAgregar2.toLowerCase().trim();

  // 3. Adición (.add ignora duplicados automáticamente)
  conjunto.add(animal1Limpio);
  conjunto.add(animal2Limpio);

  return conjunto;
}

/**
 * Elimina un animal específico de un Set.
 *
 * @param {Set<string>} conjunto - La instancia de Set de donde eliminar.
 * @param {string} animalEliminar - El animal a eliminar.
 * @returns {Set<string>|null} Instancia del Set actualizada o null si el elemento no existe o la entrada es inválida.
 */
function eliminarAnimal(conjunto, animalEliminar) {
  // 1. Guard Clause
  if (
    !(conjunto instanceof Set) ||
    typeof animalEliminar !== "string" ||
    !animalEliminar.trim()
  ) {
    console.log(
      "Error: Datos de entrada inválidos o la estructura no es un Set.",
    );
    return null;
  }

  const animalLimpio = animalEliminar.toLowerCase().trim();

  // 2. Verificación de existencia previa con .has()
  if (!conjunto.has(animalLimpio)) {
    console.log(`Error: El animal "${animalLimpio}" no existe en el Set.`);
    return null;
  }

  // 3. Eliminación limpia
  conjunto.delete(animalLimpio);
  return conjunto;
}

// --- Casos de Prueba ---
const miSet = new Set(["toro", "gallina", "cerdo", "ovejas", "cordero"]);

console.log("--- Pruebas de Agregar ---");
console.log(agregarAnimal(miSet, "elefante", "Tigre"));
// Se agregan "elefante" y "tigre"
console.log(agregarAnimal(miSet, "Ballena", "Tigre"));
// Agrega "ballena"; "tigre" se ignora automáticamente por estar duplicado

console.log("--- Pruebas de Eliminar ---");
console.log(eliminarAnimal(miSet, "gallina")); // Elimina "gallina" exitosamente
console.log(eliminarAnimal(miSet, "gallina")); // Muestra error: "El animal 'gallina' no existe..."
console.log(eliminarAnimal(miSet, 9)); // Muestra error: "Datos de entrada inválidos..."

/**
 * Reemplaza a verficacion y accion del delete animal.
 * Alternativa Senior más corta:
 * const seElimino = conjunto.delete(animalLimpio);
 * (!seElimino) {
 * console.log(`Error: El animal "${animalLimpio}" no existe en el Set.`);
 * return null;
 * }
 * return conjunto;
 *
 *
 */
