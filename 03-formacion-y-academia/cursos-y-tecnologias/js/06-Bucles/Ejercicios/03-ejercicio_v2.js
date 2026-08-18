/**
 * Genera un array con la secuencia de números pares dentro de un rango determinado.
 *
 * @param {number} [inicio=1] - Valor inicial de la secuencia.
 * @param {number} [fin=50] - Valor final (incluido) de la secuencia.
 * @returns {number[]|null} Array con la secuencia de números pares o null si las entradas son inválidas.
 */
function generarNumerosPares(inicio = 1, fin = 50) {
  // 1. Guard Clause: Validar que los límites sean números enteros válidos
  if (
    typeof inicio !== "number" ||
    typeof fin !== "number" ||
    Number.isNaN(inicio) ||
    Number.isNaN(fin) ||
    !Number.isInteger(inicio) ||
    !Number.isInteger(fin) ||
    inicio > fin
  ) {
    console.log("Error: Los rangos ingresados no son válidos.");
    return null;
  }

  const numerosPares = [];

  // 2. Optimización: Ajustar 'primerPar' al primer número par dentro del rango
  const primerPar = inicio % 2 === 0 ? inicio : inicio + 1;

  // 3. Bucle optimizado: Salta de 2 en 2 (Evita iteraciones innecesarias)
  for (let i = primerPar; i <= fin; i += 2) {
    numerosPares.push(i);
  }

  return numerosPares;
}

// --- Casos de Prueba ---
console.log("Secuencia de pares del 1 al 50:", generarNumerosPares());
console.log("Secuencia de pares del 5 al 10:", generarNumerosPares(5, 10)); // [6, 8, 10]
console.log("Rango inválido (10 a 5):", generarNumerosPares(10, 5)); // null

/**
 * Tip para Entrevistas Técnicas
Cuándo evaluar la condición vs Ajustar el incremento:

Si te piden filtrar números pares de una lista o array aleatorio existente
(donde no puedes predecir los valores), se utiliza el operador módulo con .filter(num => num % 2 === 0).

Si estás generando una secuencia matemática continua desde un rango inicio/fin,
ajustar la variable del bucle con i += 2 es la solución óptima en rendimiento.
 * 
*/
