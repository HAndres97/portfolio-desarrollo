/**
 * Muestra el número de días que tiene un mes dependiendo de la variable mes
 * @param {string} mes
 * @returns {string|null}
 *
 *
 */
function mostrarNumeroDia(mes) {
  // 1. Guard Clause: Validación temprana de tipo
  if (typeof mes !== "string") {
    console.log("Error: El mes ingresado debe ser una cadena de texto.");
    return null;
  }
  const diasMes = {
    31: ["enero", "marzo", "mayo", "julio", "agosto", "octubre", "diciembre"],
    30: ["abril", "junio", "septiembre", "noviembre"],
    28: ["febrero"],
  };
  const mesLimpio = mes.toLowerCase().trim();

  for (const [dias, meses] of Object.entries(diasMes)) {
    if (meses.includes(mesLimpio)) {
      return dias;
    }
  }
  console.log("Error: El mes introducido no existe");
  return null;
}
console.log(mostrarNumeroDia("enero"));
console.log(mostrarNumeroDia("febrero"));
console.log(mostrarNumeroDia("mmmm"));
console.log(mostrarNumeroDia(9));
