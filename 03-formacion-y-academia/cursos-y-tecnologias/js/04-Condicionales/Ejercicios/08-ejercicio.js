/**
 * Usa switch para imprimir de saludo diferente dependiendo del idioma
 * @param {string} saludo
 *@returns {string|null} Nombre del idioma o null si no se reconoce/inválido.
 */
function verificarIdioma(saludo) {
  if (typeof saludo !== "string") {
    console.log("Error: El dato debe ser una cadena de String");
    return null;
  }
  const saludoLimpio = saludo.toLowerCase().trim();
  switch (saludoLimpio) {
    case "hello":
      return "Ingles";
    case "hola":
      return "Español";
    case "bonjour":
      return "Frances";
    default:
      return "Idioma no encontrado";
      return null;
  }
}
console.log(verificarIdioma(34));
console.log(verificarIdioma("hello"));
console.log(verificarIdioma("Bonjour"));
