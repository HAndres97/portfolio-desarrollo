/**
 * Escribe una función llamada procesarCatalogos que organice y limpie esa información utilizando Arrays, Set y Map.
 * Requisitos de Negocio:
 * Parámetros de entrada:
 * - tagsNuevos (Array de Strings): Una lista de nuevas etiquetas recibidas (ejemplo: [" ROPA ", "calzado", "Ropa", " ACCESORIOS "]).
 * - categoriaBase (Map): Un Map existente donde la clave es el nombre de la categoría (String) y el valor es un Set con las etiquetas únicas ya guardadas.
 *
 * Limpieza y Deduplicación (Uso de Set):
 * - Cada etiqueta debe normalizarse (minúsculas y sin espacios al inicio/final con .trim()).
 * - Elimina cualquier etiqueta duplicada o cadena vacía ("").
 * - Ejemplo: [" ROPA ", "calzado", "Ropa", " "] $\rightarrow$ debe convertirse en las etiquetas únicas "ropa" y "calzado".
 *
 * Mapeo y Combinación (Uso de Map):
 * - Recibes un tercer parámetro opcional nombreCategoria (string, por defecto "general").
 * - Si la categoría dada ya existe en el Map, añade las nuevas etiquetas limpias al Set existente sin sobrescribir las anteriores.
 * - Si la categoría no existe en el Map, créala asociándole un nuevo Set con las etiquetas procesadas.
 * - Devuelve el Map actualizado.
 *
 *
 * Validaciones de Seguridad y Casos Borde (Guard Clauses):
 * - tagsNuevos debe ser estrictamente un Array (Array.isArray).
 * - categoriaBase debe ser estrictamente una instancia de Map (instanceof Map).
 * - nombreCategoria debe ser una cadena de texto no vacía.
 * - Si cualquiera de estas validaciones falla, muestra un mensaje explícito de error en consola y devuelve null.
 * Documentación:
 * - Incluye la cabecera JSDoc correspondiente (@ param y @ returns).
 */
/**
 * @param {Map} catalogoTienda
 * @param {string[]} tagsNuevos
 * @returns {Map|null} procesarCatalagos
 */

function procesarCatalogos(tagsNuevos, categoriaBase, nombreCategoria) {
  // Guard Close
  if (
    !Array.isArray(tagsNuevos) ||
    !(categoriaBase instanceof Map) ||
    typeof nombreCategoria !== "string"
  ) {
    console.log("Error: Datos incorrectos");
    return null;
  }
  //Limpiamos el nombre de la categoeria, a minusculas y sin espacios
  const categoriaLimpio = nombreCategoria.toLowerCase().trim();
  // Limpiamos los tags, sin repeticiones, minusculas y eliminamos los espacios
  const tagsFiltros = tagsNuevos
    .map((tags) => tags.toLowerCase().trim())
    .filter((tags) => tags !== "");
  const tagsLimpios = new Set(tagsFiltros);

  // Si existe la categoria, añadimos los nuevos tags
  if (categoriaBase.has(categoriaLimpio)) {
    const tagBase = categoriaBase.get(categoriaLimpio);
    const tagsUnidos = tagBase.union(tagsLimpios);
    categoriaBase.set(categoriaLimpio, tagsUnidos);
    return categoriaBase;
  }
  categoriaBase.set(categoriaLimpio, tagsLimpios);
  return categoriaBase;
}
// Map inicial con datos existentes
const catalogoTienda = new Map([
  ["ofertas", new Set(["verano", "outlet"])],
  ["calzado", new Set(["zapatillas"])],
]);

// Pruebas que deberías realizar:
// 1. Agregar a categoría existente "ofertas": [" VERANO ", "flash", "outlet", "  "]
console.log(
  procesarCatalogos(
    [" VERANO ", "flash", "outlet", "  "],
    catalogoTienda,
    "ofertas",
  ),
);
// 2. Agregar a nueva categoría "ropa": [" Camisetas ", "PANTALONES", "camisetas"]
console.log(
  procesarCatalogos(
    [" Camisetas ", "PANTALONES", "camisetas"],
    catalogoTienda,
    "ropa",
  ),
);
// 3. Pasar un tipo de dato incorrecto (ej. un número en lugar de Map) para comprobar la Guard Clause
console.log(procesarCatalogos(6, catalogoTienda, 8));
