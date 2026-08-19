function procesarTareasDeclarativo(misTareas) {
  // Guard Clause de entrada
  if (!Array.isArray(misTareas) || misTareas.length === 0) {
    console.log("Error: Datos incorrectos.");
    return null;
  }

  return (
    misTareas
      // 1. Filtramos solo los objetos válidos que cumplan los requisitos de negocio
      .filter((tarea) => {
        const esObjetoValido = typeof tarea === "object" && tarea !== null;
        if (!esObjetoValido) return false;

        const { titulo, completada, prioridad } = tarea;
        const esTituloValido =
          typeof titulo === "string" && titulo.trim() !== "";

        return (
          esTituloValido &&
          completada === false &&
          (prioridad === "alta" || prioridad === "critica")
        );
      })
      // 2. Transformamos los elementos filtrados extrayendo y limpiando el título
      .map((tarea) => tarea.titulo.trim().toUpperCase())
  );
}
const misTareas = [
  {
    id: 1,
    titulo: "  Revisar logs del servidor ",
    completada: false,
    prioridad: "alta",
  },
  { id: 2, titulo: "Comprar cafe", completada: true, prioridad: "baja" },
  {
    id: 3,
    titulo: "  actualizar dependencias ",
    completada: false,
    prioridad: "critica",
  },
  { id: 4, titulo: " Documentar API ", completada: true, prioridad: "alta" },
  { id: 5, titulo: "   ", completada: false, prioridad: "alta" }, // Título inválido (solo espacios)
  "tareaCorrupta", // Elemento no objeto
];

// Pruebas que debes ejecutar en consola:
// 1. procesarTareas(misTareas)
console.log(procesarTareasDeclarativo(misTareas));
//    --> Debe devolver: ["REVISAR LOGS DEL SERVIDOR", "ACTUALIZAR DEPENDENCIAS"]
// 2. procesarTareas([])         --> Output: Error / null
console.log(procesarTareasDeclarativo([]));
// 3. procesarTareas("noArray")  --> Output: Error / null
console.log(procesarTareasDeclarativo("noArray"));
