/**
 * Organiza, limpia y agrega nuevas etiquetas a un catálogo de categorías.
 *
 * @param {string[]} tagsNuevos - Lista de etiquetas a procesar.
 * @param {Map<string, Set<string>>} categoriaBase - Mapa del catálogo existente.
 * @param {string} [nombreCategoria="general"] - Nombre de la categoría (por defecto "general").
 * @returns {Map<string, Set<string>>|null} El Mapa actualizado o null si la validación falla.
 */
function procesarCatalogos(
  tagsNuevos,
  categoriaBase,
  nombreCategoria = "general",
) {
  // 1. Guard Clause: Validaciones estrictas
  if (
    !Array.isArray(tagsNuevos) ||
    !(categoriaBase instanceof Map) ||
    typeof nombreCategoria !== "string" ||
    !nombreCategoria.trim()
  ) {
    console.log("Error: Parámetros de entrada inválidos.");
    return null;
  }

  // 2. Normalización del nombre de la categoría
  const categoriaLimpia = nombreCategoria.toLowerCase().trim();

  // 3. Limpieza, normalización y filtrado de tags (blindado contra tipos no-string)
  const tagsFiltrados = tagsNuevos
    .filter((tag) => typeof tag === "string") // Garantiza que solo procesamos texto
    .map((tag) => tag.toLowerCase().trim())
    .filter((tag) => tag !== "");

  const nuevosTagsSet = new Set(tagsFiltrados);

  // 4. Mapeo y combinación en el Map
  if (categoriaBase.has(categoriaLimpia)) {
    // Si la categoría existe, unimos las etiquetas al Set actual
    const tagsExistentes = categoriaBase.get(categoriaLimpia);

    // Forma 1 (Soporte moderno de ES2024 / JS Avanzado)
    const tagsUnidos = tagsExistentes.union(nuevosTagsSet);
    categoriaBase.set(categoriaLimpia, tagsUnidos);

    // Forma 2 (Alternativa tradicional equivalente):
    // nuevosTagsSet.forEach((tag) => tagsExistentes.add(tag));
  } else {
    // Si no existe, creamos la clave con el nuevo Set
    categoriaBase.set(categoriaLimpia, nuevosTagsSet);
  }

  return categoriaBase;
}

// --- Casos de Prueba ---
const catalogoTienda = new Map([
  ["ofertas", new Set(["verano", "outlet"])],
  ["calzado", new Set(["zapatillas"])],
]);

console.log("--- 1. Agregar a categoría existente 'ofertas' ---");
console.log(
  procesarCatalogos(
    [" VERANO ", "flash", "outlet", "  "],
    catalogoTienda,
    "ofertas",
  ),
);

console.log("--- 2. Agregar a nueva categoría 'ropa' ---");
console.log(
  procesarCatalogos(
    [" Camisetas ", "PANTALONES", "camisetas"],
    catalogoTienda,
    "ropa",
  ),
);

console.log("--- 3. Prueba con parámetro opcional por defecto ('general') ---");
console.log(procesarCatalogos(["accesorios", "relojes"], catalogoTienda));

console.log("--- 4. Comprobación de Guard Clause (Fallo intencional) ---");
console.log(procesarCatalogos(6, catalogoTienda, 8)); // Output: null
