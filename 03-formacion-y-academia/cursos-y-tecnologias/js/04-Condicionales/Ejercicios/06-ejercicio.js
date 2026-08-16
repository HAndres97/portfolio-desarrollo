/**
 * Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
 * @param {string} mes -Ayuda a mostrar la estacion
 * @returns {string|null} Indica la estacion, o null si no se ha introducido un mes dentro del rango
 */

const primavera = ["marzo", "abril", "mayo"];
const verano = ["junio", "julio", "agosto"];
const otoño = ["septiembre", "octubre", "noviembre"];
const invierno = ["diciembre", "enero", "febrero"];

function mostrarEstacion(mes) {
  if (typeof mes !== "string") {
    return "Error: Escribe bien el dato";
  }

  if (primavera.includes(mes.toLowerCase())) {
    return "Primavera";
  } else if (verano.includes(mes.toLowerCase())) {
    return "Verano";
  } else if (otoño.includes(mes.toLowerCase())) {
    return "Otoño";
  } else if (invierno.includes(mes.toLowerCase())) {
    return "Invierno";
  } else {
    return "Mes no encontrado";
  }
}
console.log(mostrarEstacion("enero"));
console.log(mostrarEstacion("eneros"));
console.log(mostrarEstacion(34));
