/**
 * Genera un array con la secuencia de números enteros dentro de un rango determinado.
 *
 * @param {number} [inicio=1] - Valor inicial de la secuencia.
 * @param {number} [fin=20] - Valor final (incluido) de la secuencia.
 * @returns {number[]|null} Array con la secuencia de números o null si las entradas son inválidas.
 */
function generarSecuenciaNumeros(inicio = 1, fin = 20) {
  // 1. Guard Clause: Validar que los límites sean números enteros válidos
  if (
    typeof inicio !== "number" ||
    typeof fin !== "number" ||
    Number.isNaN(inicio) ||
    Number.isNaN(fin) ||
    inicio > fin
  ) {
    console.log("Error: Los rangos ingresados no son válidos.");
    return null;
  }

  // 2. Instanciación local (Evita depender de variables globales)
  const numeros = [];

  // 3. Bucle de iteración
  for (let i = inicio; i <= fin; i++) {
    numeros.push(i);
  }

  return numeros;
}

// --- Casos de Prueba ---
// Imprimir directamente el array como objeto/lista
console.log("Secuencia del 1 al 20:", generarSecuenciaNumeros());

// Prueba de reutilización con otro rango
console.log("Secuencia del 5 al 10:", generarSecuenciaNumeros(5, 10));

// Prueba de Guard Clause
console.log("Rango inválido (10 a 5):", generarSecuenciaNumeros(10, 5));
