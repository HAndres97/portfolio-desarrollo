/**
 * NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios.

// 1. Crea una funciÃ³n que reciba dos nÃºmeros y devuelva su suma.
 * @param {number} numero1
 * @param {number} numero2
 * @returns {number|null} -Funcion sumar
*/
function sumarNumeros(numero1, numero2) {
  if (
    typeof numero1 !== "number" ||
    typeof numero2 !== "number" ||
    Number.isNaN(numero1) ||
    Number.isNaN(numero2)
  ) {
    console.log("Error:Datos incorrectos");
    return null;
  }
  return numero1 + numero2;
}
const numero1 = 6;
const numero2 = 8;
console.log(sumarNumeros(numero1, numero2));
console.log(sumarNumeros(NaN, numero2));
console.log(sumarNumeros(numero1, "String"));

//Otra forma de hacerlo

const sumar = function (a, b) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    Number.isNaN(a) ||
    Number.isNaN(b)
  ) {
    return null;
  }
  return a + b;
};
console.log("Funcion en una constante: ", sumar(5, 7));

//Funcion Flecha
const sumarV2 = (a, b) => {
  return a + b;
};
//*  (a+b)=> a+b;
const sumarArrow = (a, b) =>
  typeof a === "number" &&
  typeof b === "number" &&
  !Number.isNaN(a) &&
  !Number.isNaN(b)
    ? a + b
    : null;
console.log("Desde otra constante: ", sumarV2(9, 8));
