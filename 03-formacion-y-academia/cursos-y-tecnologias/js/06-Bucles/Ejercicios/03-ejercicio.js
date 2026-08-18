/**
 * Crea un bucle que imprima todos los nÃºmeros pares entre 1 y 50.
 * @param {number} [inicio=1] - Valor inicial de la secuencia.
 * @param {number} [fin=50] - Valor final (incluido) de la secuencia.
 * @returns {number[]|null} Array con la secuencia de números o null si las entradas son inválidas.
 */
function generarNumerosPares(inicio = 1, fin = 50) {
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
  for (let i = inicio; i <= fin; i += 2) {
    if (i % 2 === 0) {
      numeros.push(i);
    }
  }

  return numeros;
}

// --- Casos de Prueba ---
// Imprimir directamente el array como objeto/lista
console.log("Secuencia de pares del 1 al 50:", generarNumerosPares());

// Prueba de reutilización con otro rango
console.log("Secuencia pares del 5 al 10:", generarNumerosPares(5, 10));

// Prueba de Guard Clause
console.log("Rango inválido (10 a 5):", generarNumerosPares(10, 5));
