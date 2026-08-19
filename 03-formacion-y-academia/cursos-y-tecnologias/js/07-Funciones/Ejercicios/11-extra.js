/**
 * Imagina que estás construyendo la lógica central del backend de una aplicación de
 * productividad. Recibes un listado de tareas enviadas por los usuarios y debes procesar, filtrar y 
 * transformar la información devolviendo un informe consolidado.Escribe una función llamada procesarTareas (puedes usar la sintaxis de Function Declaration o Arrow Function) que reciba una lista de tareas y aplique las siguientes reglas de negocio:🎯 
 * 
 * Requisitos de Negocio:
 * Parámetros de entrada:
 * tareas (Array de Objetos): Cada objeto representa una tarea con esta estructura:
 * JavaScript{ id: 1, titulo: "  Reporte mensual ", completada: false, prioridad: "alta" }
Procesamiento y Transformación (Integrando tus Apuntes y Ejercicios):
Normalización de Texto: Limpia los títulos de las tareas eliminando espacios extra 
en los extremos (.trim()) y convirtiéndolos a mayúsculas (.toUpperCase()).  


Filtrado: Selecciona únicamente las tareas que NO estén completadas 
(completada === false) y cuya prioridad sea "alta" o "critica".
Extracción: Genera un nuevo array que contenga únicamente los títulos limpios en
 mayúsculas de las tareas filtradas.
 
 Validaciones de Seguridad (Guard Clauses según tus apuntes):
 Valida que tareas sea estrictamente un Array no vacío (Array.isArray y .length > 0). 
Si una tarea dentro de la lista no es un objeto válido, o su título no es un string 
válido con texto real (typeof === "string" y .trim() !== "")
 omite esa tarea sin romper la ejecución del resto.
 
 Si la entrada principal falla la Guard Clause, muestra un error explícito en consola y
  devuelve null.  
  
  Retorno de la Función:
Debe devolver un nuevo array de strings con los títulos limpios en mayúsculas de las tareas urgentes pendientes.  Documentación JSDoc:
Incluye la cabecera JSDoc con @ param y @ returns.  
 * 
*/
/**
 * @param {object[]} misTareas - Set de datos
 * @returns {string[]} tareasUrgentes - retorno de la funcion
 */

function procesarTareas(misTareas) {
  // Evita problemas con datos que no sean arrays
  if (!Array.isArray(misTareas) || misTareas.length === 0) {
    console.log("Error:Datos incorrectos");
    return null;
    //Creamos variable donde guardamos, las tareas urgentes.
  }
  const tareasUrgentes = [];
  // Recorremos el Array
  for (const tarea of misTareas) {
    // Evita errores de tipo object
    if (typeof tarea !== "object" || tarea === null) {
      console.log("Tarea: Corrupta");
      continue;
    }
    // Desustructuracion
    const { titulo, completada, prioridad } = tarea;
    // Validacion de titulo
    const tituloValido = typeof titulo === "string" && titulo.trim() !== "";
    if (!tituloValido) {
      console.log("Titulo Invalido");
      continue;
    }
    if (
      completada === false &&
      (prioridad === "alta" || prioridad === "critica")
    ) {
      const tituloLimpio = titulo.trim().toUpperCase();
      tareasUrgentes.push(tituloLimpio);
    }
  }
  return tareasUrgentes;
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
console.log(procesarTareas(misTareas));
//    --> Debe devolver: ["REVISAR LOGS DEL SERVIDOR", "ACTUALIZAR DEPENDENCIAS"]
// 2. procesarTareas([])         --> Output: Error / null
console.log(procesarTareas([]));
// 3. procesarTareas("noArray")  --> Output: Error / null
console.log(procesarTareas("noArray"));

/**
 * probable solucion con map, filter,reduce
 * map -> para cambiar todos los titulos a mayuscululas y trim
 * filter() -> filtrar solo los completado false y prioridad alta y critica
 * reduce para guardarlo en un array []
 *
 */
