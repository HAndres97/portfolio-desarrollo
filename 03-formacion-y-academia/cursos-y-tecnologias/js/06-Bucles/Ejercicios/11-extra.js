/**
 * Escribe una función llamada analizarVentas que procese un array de transacciones y devuelva un objeto con métricas consolidadas.
 * Parámetros de entrada:
 * - transacciones (Array de Objetos): Cada objeto representa una venta y tiene la siguiente estructura:
 * { id: 101, cliente: " Ana ", monto: 150.5, categoria: "Electrónica" }
 * Procesamiento de Datos (Uso de Bucles e Iteración):
Usa bucles (for, for...of, etc.) o métodos de iteración para recorrer la lista y calcular:

totalVentas: La suma acumulada de todos los montos de ventas válidos.

ventaMayor: El valor del monto de la venta más alta registrada.

clientesUnicos: Un Set (o Array deduplicado) con los nombres de todos los clientes únicos, normalizados (sin espacios extra al inicio/final con .trim() y en minúsculas/capitalizados de forma limpia).

ventasPorCategoria: Un Map (u Objeto) donde la clave sea el nombre de la categoría y el valor sea el monto total acumulado acumulado para esa categoría.

Validaciones de Seguridad y Casos Borde (Guard Clauses):

transacciones debe ser estrictamente un Array no vacío (Array.isArray y .length > 0).

Si una transacción en la lista no es un objeto válido, o tiene un monto que no sea un número positivo válido (typeof === "number" && !Number.isNaN(monto) && monto > 0), se debe omitir esa transacción (o mostrar un aviso) sin romper la ejecución del resto.

Si la entrada principal falla la Guard Clause, muestra un error explícito en consola y devuelve null.

Retorno de la Función:
Debe devolver un objeto con el siguiente formato:

JavaScript
{
  totalVentas: 450.75,
  ventaMayor: 200,
  clientesUnicos: Set(3) { "ana", "carlos", "marta" },
  ventasPorCategoria: Map(2) { "Electrónica" => 350.5, "Ropa" => 100.25 }
}
Documentación JSDoc:
Incluye la cabecera JSDoc correspondiente con @ param y @ returns.
*/

/**
 *
 * @param {Map} ventasDelDia
 * @returns {Map|null} salida
 */
function analizarVentas(ventasDelDia) {
  if (!Array.isArray(ventasDelDia) || ventasDelDia.length === 0) {
    console.log("Error: Datos incorrectos");
    return null;
  }
  let totalVentas = 0;
  let ventaMayor = 0;
  const clientesUnicos = [];
  const ventasPorCategoria = new Map();
  for (const transaccion of ventasDelDia) {
    if (typeof transaccion !== "object") {
      continue;
    } else {
      const monto = transaccion["monto"];
      if (typeof monto === "number" && !Number.isNaN(monto) && monto > 0) {
        if (monto > ventaMayor) {
          ventaMayor = monto;
        }
        totalVentas += monto;
      }
      const cliente = transaccion["cliente"].toLowerCase().trim();
      clientesUnicos.push(cliente);
      console.log(clientesUnicos, ventaMayor, totalVentas);
    }
  }
  const solucion = new Map();
  solucion["totalVentas"] = totalVentas;
  solucion["ventaMayor"] = ventaMayor;
  solucion["clientesUnicos"] = clientesUnicos;
  return solucion;
}
const ventasDelDia = [
  { id: 1, cliente: " Ana ", monto: 120.5, categoria: "Electrónica" },
  { id: 2, cliente: "carlos", monto: 80.0, categoria: "Ropa" },
  { id: 3, cliente: "ANA", monto: 200.0, categoria: "Electrónica" },
  { id: 4, cliente: "Marta", monto: -50.0, categoria: "Ropa" }, // Transacción inválida (monto negativo)
  { id: 5, cliente: " Carlos ", monto: 50.0, categoria: "Ropa" },
  "transaccionCorrupta", // Elemento no objeto
];

// Pruebas que debes realizar:
// 1. analizarVentas(ventasDelDia)
console.log(analizarVentas(ventasDelDia));
// 2. analizarVentas([]) -> Debe activar Guard Clause
console.log(analizarVentas([]));
// 3. analizarVentas("noEsUnArray") -> Debe activar Guard Clause
console.log(analizarVentas("noEsunArray"));
