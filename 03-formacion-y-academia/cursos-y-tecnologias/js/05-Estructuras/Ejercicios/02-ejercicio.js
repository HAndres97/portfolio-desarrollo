/**
 * Crea un set que almacene cinco animales.
 * Añaade dos más. Uno de ellos repetido
 * Elimina uno concreto a tu elección.
 * @param {Set<string>} conjunto - La instancia de Set donde guardar los animales.
 * @param {string} animalAgregar1
 * @param {string} animalAgregar2
 * @returns {Set<string>|null} agregarAnimal
 * @returns {Set<string>|null} eliminarAnimal
 */

function agregarAnimal(miSet, animalAgregar1, animalAgregar2) {
  if (
    typeof animalAgregar1 !== "string" ||
    typeof animalAgregar2 !== "string" ||
    !animalAgregar1.trim() ||
    !animalAgregar2.trim()
  ) {
    console.log("Error: Datos de entrada inválidos.");
    return null;
  }

  const animal1Limpio = animalAgregar1.toLowerCase().trim();
  const animal2Limpio = animalAgregar2.toLowerCase().trim();

  //Agregamos
  miSet.add(animal1Limpio);
  miSet.add(animal2Limpio);

  return miSet;
}
function eliminarAnimal(miSet, animalEliminar) {
  if (typeof animalEliminar !== "string" || !animalEliminar.trim()) {
    console.log("Error: Datos de entrada inválidos.");
    return null;
  }

  const animalLimpio = animalEliminar.toLowerCase().trim();
  if (!miSet.has(animalLimpio)) {
    console.log(`El animal ${animalLimpio} no existe en el set`);
    return null;
  }
  //Eliminamos el animal
  miSet.delete(animalLimpio);
  return miSet;
}
const miSet = new Set(["toro", "gallina", "cerdo", "ovejas", "cordero"]);
//Pruebas de agregar

console.log(agregarAnimal(miSet, "elefante", "Tigre"));
console.log(agregarAnimal(miSet, "Ballena", "Tigre"));
console.log(agregarAnimal(miSet, 6));
// Prueba eliminar

console.log(eliminarAnimal(miSet, "gallina"));
console.log(eliminarAnimal(miSet, "gallina"));
console.log(eliminarAnimal(miSet, 9));
