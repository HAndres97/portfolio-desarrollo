/**
 * Multiplica todos los números de una lista y devuelve su producto total.
 *
 * @param {number[]} numerosArray - Array con los números a multiplicar.
 * @returns {number|null} El producto acumulado o null si la entrada es inválida.
 */
function multiplicarNumeros(numerosArray) {
  // 1. Guard Clause: Validar que sea un Array no vacío
  if (!Array.isArray(numerosArray) || numerosArray.length === 0) {
    console.log("Error: Debes proporcionar una lista con al menos un número.");
    return null;
  }

  // 2. Validación de elementos: Garantiza que todos sean números válidos
  const sonNumerosValidos = numerosArray.every(
    (item) => typeof item === "number" && !Number.isNaN(item),
  );

  if (!sonNumerosValidos) {
    console.log(
      "Error: La lista contiene elementos que no son números válidos.",
    );
    return null;
  }

  // 3. Acumulador inicializado en 1 (Neutro multiplicativo)
  let producto = 1;

  // 4. Bucle de multiplicación acumulativa
  for (const numero of numerosArray) {
    producto *= numero;
  }

  return producto;
}

// --- Casos de Prueba ---
const listaNumeros = [1, 2, 3, 4, 5];

console.log("Producto total:", multiplicarNumeros(listaNumeros)); // Output: 120
console.log("Prueba con texto interno:", multiplicarNumeros([1, 2, 3, "hola"])); // Output: null
console.log("Prueba con tipo no array:", multiplicarNumeros(9)); // Output: null

/**
 * * Multiplicación acumulada funcional con .reduce():
 * * const productoTotal = numerosArray.reduce((acumulado, actual) => acumulado * actual, 1);
 *
 */
