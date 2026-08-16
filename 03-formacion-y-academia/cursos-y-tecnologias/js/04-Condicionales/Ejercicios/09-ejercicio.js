/**
 *
 * Switch para estacion del año dependiento del mes
 *@param {string} mes -Valor del mes
 *@return {string|null} -resultado
 */

function indicarEstacion(mes) {
  // 1. Guard Clause: Validación temprana de tipo
  if (typeof mes !== "string") {
    console.log("Error: El mes ingresado debe ser una cadena de texto.");
    return null;
  }
  const mesLimpio = mes.toLowerCase().trim();

  switch (mesLimpio) {
    case "diciembre":
    case "enero":
    case "febrero":
      return "Invierno";
    case "marzo":
    case "abril":
    case "mayo":
      return "Primavera";
    case "junio":
    case "julio":
    case "agosto":
      return "Verano";
    case "septiembre":
    case "octubre":
    case "noviembre":
      return "Otoño";
    default:
      console.log("Error: El mes ingresado no existe.");
      return null;
  }
}
console.log(indicarEstacion("marzo"));
console.log(indicarEstacion("mar"));
console.log(indicarEstacion(9));
console.log(indicarEstacion("OTOÑO"));
