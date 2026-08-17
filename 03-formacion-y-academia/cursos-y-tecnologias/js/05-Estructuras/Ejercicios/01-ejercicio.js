/**
 * Crea una array que almecena cinco animales
 * Añade 2 mas, uno al principio y otro al final.
 * Elimina un animal y al que se encuentra en tercera posicion.
 * @param {Array} miArray
 * @param {String} animaleAgregar1 - Agregamos un animal
 * @param {String} animaleAgregar2 - Agregamos un animal
 * @param {String} animalEliminar - Eliminamos un animal
 * @returns {Array|null} agregarAnimales
 * @returns {Array|null} eliminarAnimal
 *
 *
 */
// Creamos el array
const miArray = ["leon", "elefante", "hipopotamo", "zebra", "girafa"];

function agregarAnimales(animalAgregar1, animalAgregar2) {
  if (
    typeof animalAgregar1 !== "string" ||
    typeof animalAgregar2 !== "string" ||
    !animalAgregar1.trim() ||
    !animalAgregar2.trim()
  ) {
    console.log("Error:Dato incorrecto, introduzca dato correcto");
    return null;
  }
  const animalLimpio1 = animalAgregar1.toLowerCase().trim();
  const animalLimpio2 = animalAgregar2.toLowerCase().trim();
  if (miArray.includes(animalLimpio1)) {
    console.log(`Error: EL animal ${animalLimpio1} ya existe en el array`);
    return null;
  } else if (miArray.includes(animalLimpio2)) {
    console.log(`Error: EL animal ${animalLimpio2} ya existe en el array`);
    return null;
  }

  // Agregamos el animal al principio
  miArray.unshift(animalLimpio1);
  // Agregamos el animal al final
  miArray.push(animalLimpio2);

  return miArray;
}
function elminarAnimal(animalEliminar) {
  if (typeof animalEliminar !== "string" || !animalEliminar.trim()) {
    console.log("Error:Dato incorrecto, introduzca dato correcto");
    return null;
  }
  const animalLimpio = animalEliminar.toLowerCase().trim();
  if (!miArray.includes(animalLimpio)) {
    console.log(`Error funcion eliminar ${animalLimpio} no existe en el array`);
    return null;
  }
  //Eliminamos al animal
  const indice = miArray.indexOf(animalLimpio);
  miArray.splice(indice, 1);

  //Eliminamos la tercera posicion
  const longitud = miArray.length;
  if (longitud < 3) {
    console.log("Error funcion eliminar: la 3 posicion ya que no existe");
    return null;
  } else {
    miArray.splice(2, 1);
    return miArray;
  }
}
// Pruebas Agregar
console.log("Pruebas de Agregar");
console.log(agregarAnimales("toro", "gallina"));
console.log(agregarAnimales("toro", "gallina"));
console.log(agregarAnimales(6));

//Pruebas Eliminar
console.log("Pruebas de Eliminar");
console.log(elminarAnimal("toro"));
console.log(elminarAnimal("toro"));
console.log(elminarAnimal(6));
