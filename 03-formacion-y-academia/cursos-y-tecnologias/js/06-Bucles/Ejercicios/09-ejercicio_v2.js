/**
 * Genera una cantidad especificada de números de la secuencia de Fibonacci.
 *
 * @param {number} [limiteSecuencia=10] - Cantidad exacta de elementos a generar.
 * @returns {number[]|null} Array con la secuencia o null si la entrada es inválida.
 */
function generarSecuenciaFibonacci(limiteSecuencia = 10) {
  // 1. Guard Clause: Validar que sea un entero positivo mayor o igual a 1
  if (
    typeof limiteSecuencia !== "number" ||
    Number.isNaN(limiteSecuencia) ||
    !Number.isInteger(limiteSecuencia) ||
    limiteSecuencia <= 0
  ) {
    console.log("Error: Debes ingresar un número entero mayor a 0.");
    return null;
  }

  // 2. Casos base para límites pequeños (1 o 2 elementos)
  const baseFibonacci = [0, 1];
  if (limiteSecuencia === 1) return [0];
  if (limiteSecuencia === 2) return baseFibonacci;

  // 3. Bucle para generar a partir del 3er elemento
  const secuencia = [0, 1];

  for (let i = 2; i < limiteSecuencia; i++) {
    // El término actual es la suma de los dos anteriores
    const siguienteValor = secuencia[i - 1] + secuencia[i - 2];
    secuencia.push(siguienteValor);
  }

  return secuencia;
}

// --- Casos de Prueba ---
console.log("Primeros 10 números:", generarSecuenciaFibonacci(10));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] (Exactamente 10 elementos)

console.log("Primeros 5 números:", generarSecuenciaFibonacci(5));
// Output: [0, 1, 1, 2, 3]

console.log(
  "Prueba Guard Clause (String):",
  generarSecuenciaFibonacci("Array"),
);
// Output: null
