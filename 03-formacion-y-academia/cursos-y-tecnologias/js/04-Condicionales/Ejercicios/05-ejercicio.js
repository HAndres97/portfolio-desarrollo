/**
 * Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable.
 *
 * @returns {string|null} categoria "adulto", "menor" o null si la edad es invalida
 * @param {number} edad - la edad de la persona en años
 */
function valorEdad(edad) {
  if (typeof edad !== "number" || Number.isNaN(edad) || edad <= 0) {
    console.log("Error: Tipo de dato incorrecto");
    return null;
  }
  const EDAD_ADULTO = 18;
  const categoria = edad >= EDAD_ADULTO ? "adulto" : "menor";
  console.log(`Eres un ${categoria}`);
  return categoria;
}
valorEdad(17);
valorEdad(25);
valorEdad("f");
