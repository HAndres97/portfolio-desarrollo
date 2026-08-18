/**
 * Suma todos los números enteros dentro de un rango determinado (inclusive).
 *
 * @param {number} [numeroInferior=1] - Límite inferior del rango.
 * @param {number} [numeroSuperior=100] - Límite superior del rango.
 * @returns {number|null} La suma acumulada o null si los parámetros no son válidos.
 */
function sumarSecuencia(numeroInferior = 1, numeroSuperior = 100) {
  // 1. Guard Clause: Validación de tipos, enteros y coherencia de rango
  if (
    typeof numeroInferior !== "number" ||
    typeof numeroSuperior !== "number" ||
    Number.isNaN(numeroInferior) ||
    Number.isNaN(numeroSuperior) ||
    !Number.isInteger(numeroInferior) ||
    !Number.isInteger(numeroSuperior) ||
    numeroSuperior < numeroInferior
  ) {
    console.log(
      "Error: Los límites deben ser números enteros válidos y el límite inferior debe ser menor o igual al superior.",
    );
    return null;
  }

  // 2. Acumulador
  let sumatorio = 0;

  // 3. Bucle de suma acumulativa
  for (let i = numeroInferior; i <= numeroSuperior; i++) {
    sumatorio += i; // Operador de adición abreviado (sumatorio = sumatorio + i)
  }

  return sumatorio;
}

// --- Casos de Prueba ---
console.log("Suma del 1 al 100:", sumarSecuencia()); // Output: 5050
console.log("Suma del 2 al 200:", sumarSecuencia(2, 200)); // Output: 20100
console.log("Tipos erróneos:", sumarSecuencia("hola", "prog")); // Output: null
console.log("Rango invertido:", sumarSecuencia(400, 300)); // Output: null

/**
 * 💡 La Fórmula de Gauss ($O(1)$ vs $O(N)$):Si en una prueba técnica te piden sumar los números del $1$ al $N$ y
 *  quieres impresionar al entrevistador, puedes mencionar que el bucle for tiene una complejidad temporal de $O(N)$ 
 * (hace $100$ iteraciones para $100$ números), mientras que existe la Fórmula de la Suma de Gauss que resuelve el problema en
 *  tiempo constante $O(1)$ sin necesidad de bucle:$$\text{Suma} = \frac{N \times (N + 1)}{2}$$
 * 
 *Ejemplo matemático del 1 al 100 en 1 sola operación: 
 const sumaGauss = (100 * (100 + 1)) / 2; // Output: 5050
 * 
*/
