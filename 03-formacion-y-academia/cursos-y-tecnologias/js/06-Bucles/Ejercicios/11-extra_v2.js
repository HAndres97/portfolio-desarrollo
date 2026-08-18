/**
 * Analiza un listado de transacciones de ventas y calcula métricas consolidadas.
 *
 * @param {Array<Object>} transacciones - Lista de objetos de venta.
 * @returns {Object|null} Objeto con las métricas consolidadas o null si falla la entrada.
 */
function analizarVentas(transacciones) {
  // 1. Guard Clause: Validar que sea un array no vacío
  if (!Array.isArray(transacciones) || transacciones.length === 0) {
    console.log(
      "Error: Debes proporcionar un array de transacciones no vacío.",
    );
    return null;
  }

  // 2. Estado de acumuladores
  let totalVentas = 0;
  let ventaMayor = 0;
  const clientesUnicos = new Set();
  const ventasPorCategoria = new Map();

  // 3. Iteración sobre cada transacción
  for (const transaccion of transacciones) {
    // Validar que la transacción sea un objeto válido (no null ni primitivo)
    if (typeof transaccion !== "object" || transaccion === null) {
      console.log(
        "Aviso: Se omitió una transacción corrupta (no es un objeto).",
      );
      continue;
    }

    const { cliente, monto, categoria } = transaccion;

    // Validar que el monto sea un número positivo válido
    const montoValido =
      typeof monto === "number" && !Number.isNaN(monto) && monto > 0;
    const clienteValido = typeof cliente === "string" && cliente.trim() !== "";
    const categoriaValida =
      typeof categoria === "string" && categoria.trim() !== "";

    // Si algún dato clave falla, omitimos esta transacción completa
    if (!montoValido || !clienteValido || !categoriaValida) {
      console.log(
        `Aviso: Transacción omitida por datos inválidos (ID: ${transaccion.id || "Desconocido"}).`,
      );
      continue;
    }

    // A) Acumular monto total y calcular la mayor venta
    totalVentas += monto;
    if (monto > ventaMayor) {
      ventaMayor = monto;
    }

    // B) Normalizar y registrar cliente único en el Set
    const clienteLimpio = cliente.toLowerCase().trim();
    clientesUnicos.add(clienteLimpio);

    // C) Acumular ventas por categoría en el Map
    const categoriaLimpia = categoria.trim();
    const totalActualCategoria = ventasPorCategoria.get(categoriaLimpia) || 0;
    ventasPorCategoria.set(categoriaLimpia, totalActualCategoria + monto);
  }

  // 4. Retorno final (FUERA DEL BUCLE)
  return {
    totalVentas,
    ventaMayor,
    clientesUnicos,
    ventasPorCategoria,
  };
}

// --- Casos de Prueba ---
const ventasDelDia = [
  { id: 1, cliente: " Ana ", monto: 120.5, categoria: "Electrónica" },
  { id: 2, cliente: "carlos", monto: 80.0, categoria: "Ropa" },
  { id: 3, cliente: "ANA", monto: 200.0, categoria: "Electrónica" },
  { id: 4, cliente: "Marta", monto: -50.0, categoria: "Ropa" }, // Transacción inválida
  { id: 5, cliente: " Carlos ", monto: 50.0, categoria: "Ropa" },
  "transaccionCorrupta", // Elemento no objeto
];

console.log("--- 1. Resultado del Análisis ---");
console.log(analizarVentas(ventasDelDia));

console.log("\n--- 2. Prueba con Array Vacio ---");
console.log(analizarVentas([]));

console.log("\n--- 3. Prueba con Tipo Erróneo ---");
console.log(analizarVentas("noEsunArray"));
