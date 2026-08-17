/**
 * Agrega dos animales a una lista (uno al principio y otro al final).
 *
 * @param {string[]} lista - Array de animales original.
 * @param {string} animalInicio - Animal a insertar al principio.
 * @param {string} animalFinal - Animal a insertar al final.
 * @returns {string[]|null} Nueva lista con los animales agregados o null si falla.
 */
function agregarAnimales(lista, animalInicio, animalFinal) {
  // 1. Guard Clause: Validaciones de entrada
  if (
    !Array.isArray(lista) ||
    typeof animalInicio !== "string" ||
    typeof animalFinal !== "string" ||
    !animalInicio.trim() ||
    !animalFinal.trim()
  ) {
    console.log("Error: Datos de entrada inválidos.");
    return null;
  }

  const inicioLimpio = animalInicio.toLowerCase().trim();
  const finalLimpio = animalFinal.toLowerCase().trim();

  // 2. Control de duplicados
  if (lista.includes(inicioLimpio) || lista.includes(finalLimpio)) {
    console.log("Error: Uno o ambos animales ya existen en la lista.");
    return null;
  }

  // 3. Modificación limpia
  lista.unshift(inicioLimpio); // Inserta al inicio
  lista.push(finalLimpio); // Inserta al final

  return lista;
}

/**
 * Elimina un animal específico por su nombre y también el elemento en la 3ª posición (índice 2).
 *
 * @param {string[]} lista - Array de animales a modificar.
 * @param {string} animalAEliminar - Nombre del animal que se desea eliminar.
 * @returns {string[]|null} Array modificado o null si falla.
 */
function eliminarAnimal(lista, animalAEliminar) {
  // 1. Guard Clause
  if (
    !Array.isArray(lista) ||
    typeof animalAEliminar !== "string" ||
    !animalAEliminar.trim()
  ) {
    console.log("Error: Datos de entrada inválidos.");
    return null;
  }

  const objetivoLimpio = animalAEliminar.toLowerCase().trim();
  const indiceEncontrado = lista.indexOf(objetivoLimpio);

  if (indiceEncontrado === -1) {
    console.log(`Error: El animal "${objetivoLimpio}" no existe en la lista.`);
    return null;
  }

  // 2. Eliminar el animal especificado
  lista.splice(indiceEncontrado, 1);

  // 3. Eliminar el elemento que queda en la 3ª posición (índice 2)
  const TERCERA_POSICION = 2;
  if (lista.length <= TERCERA_POSICION) {
    console.log(
      "Aviso: No hay suficiente longitud para eliminar el elemento en la 3ª posición.",
    );
    return lista;
  }

  lista.splice(TERCERA_POSICION, 1);
  return lista;
}

// --- Casos de Prueba ---
const animales = ["leon", "elefante", "hipopotamo", "zebra", "girafa"];

console.log("--- Pruebas de Agregar ---");
console.log(agregarAnimales(animales, "toro", "gallina"));
// ["toro", "leon", "elefante", "hipopotamo", "zebra", "girafa", "gallina"]

console.log("--- Pruebas de Eliminar ---");
console.log(eliminarAnimal(animales, "toro"));
// Elimina "toro" (índice 0) y luego el nuevo elemento de la posición 3 (índice 2: "elefante")
