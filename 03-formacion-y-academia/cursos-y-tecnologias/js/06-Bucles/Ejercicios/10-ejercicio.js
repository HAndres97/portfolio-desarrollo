/**
 * Dado un array de nÃºmeros, usa un bucle para crear un nuevo array que contenga solo los nÃºmeros mayores a 10.
 * @param {number[]} arrayNumeros
 * @returns {number[]|null}
 *
 */
function seleccionarNumeros(arrayNumeros) {
  if (!Array.isArray(arrayNumeros) || arrayNumeros.length === 0) {
    console.log("Error: Dato incorrecto");
    return null;
  }
  // 2. Validación de elementos: Garantiza que todos sean números válidos
  const sonNumerosValidos = arrayNumeros.every(
    (item) => typeof item === "number" && !Number.isNaN(item),
  );
  if (!sonNumerosValidos) {
    console.log("Error: Los datos son incorrectos");
    return null;
  }
  const arrayMayores = [];
  for (const numero of arrayNumeros) {
    if (numero > 10) {
      arrayMayores.push(numero);
    }
  }
  return arrayMayores.sort();
}
const arrayNumeros = [1, 2, 3, 4, 67, 89, 23, 4, 65];
console.log(
  `Los numeros mayores de 10 son: ${seleccionarNumeros(arrayNumeros)}`,
);
//Cuidado con ``, convierto todo a string, si queremos sacar numeros con ""
console.log(`Los numeros mayores de 10 son: ${seleccionarNumeros(89)}`);
console.log(
  `Los numeros mayores de 10 son: ${seleccionarNumeros([1, 2, 3, "hola"])}`,
);

/**
 *
 * * Filtrado inmutable en 1 línea:
 * *const mayoresDe10 = arrayNumeros.filter((numero) => numero > 10);
 */
