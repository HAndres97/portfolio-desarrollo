/**
 * Crea una funciÃ³n que reciba un nÃºmero y devuelva true si es primo, y false en caso contrario.
 * @param {number} numero
 * @returns {boolean|null} Funcion que devuelve si es primo
 */
function esPrimo(numero) {
  // 1. Barrera de seguridad: Validar que sea un número entero
  if (
    typeof numero !== "number" ||
    Number.isNaN(numero) ||
    !Number.isInteger(numero)
  ) {
    console.log("Error: El dato debe ser un número entero.");
    return null;
  }

  // 2. Descartar menores o iguales a 1 (el 0 y el 1 no son primos)
  if (numero <= 1) return false;

  // 3. El número 2 es el único primo par
  if (numero === 2) return true;

  // 4. Descartar todos los demás números pares rápidos
  if (numero % 2 === 0) return false;

  // 5. Bucle optimizado: Solo busca hasta la raíz cuadrada del número
  // Avanza de 2 en 2 para probar solo números impares (3, 5, 7...)
  const limite = Math.sqrt(numero);
  for (let i = 3; i <= limite; i += 2) {
    if (numero % i === 0) {
      return false; // Si es divisible por otro número, NO es primo
    }
  }

  return true; // Si pasó todas las pruebas, SÍ es primo
}

// --- BANCO DE PRUEBAS ---
console.log("¿El 7 es primo?:", esPrimo(7)); // Imprime: true
console.log("¿El 14 es primo?:", esPrimo(14)); // Imprime: false (es divisible por 2 y 7)
console.log("¿El 1 es primo?:", esPrimo(1)); // Imprime: false
console.log("¿El 2 es primo?:", esPrimo(2)); // Imprime: true

// Prueba con texto por seguridad
console.log(esPrimo("11")); // Imprime error y devuelve: false
