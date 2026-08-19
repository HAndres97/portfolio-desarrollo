/**
 * 7. Crea una funciÃ³n que reciba un array de nÃºmeros y devuelva la suma de todos los nÃºmeros pares.
 *
 * @param {number[]} arrayNumeros
 * @returns {number|null}
 *
 */
function sumarPares(arrayNumeros) {
  if (!Array.isArray(arrayNumeros) || arrayNumeros.length === 0) {
    console.log("Error: Dato incorrecto");
    return null;
  }
  const validacionNumeros = arrayNumeros.every(
    (item) =>
      typeof item === "number" && !Number.isNaN(item) && Number.isInteger(item),
  );
  if (!validacionNumeros) {
    console.log("Error: Arrays de datos incorrectos");
    return null;
  }
  let sumatorio = 0;
  for (const numero of arrayNumeros) {
    if (numero % 2 === 0) {
      sumatorio += numero;
    }
  }
  // Opcion con reduce
  // const sumatario = arrayNumeros.reduce((acumulador,numero) =>{
  //    if(numero % 2 === 0){
  //        acumulador += numero;
  // }
  //
  //},0);

  /**
   * *Formas mas limpia = return numero % 2 === 0 ? acumulador + numero : acumulador;
   *
   */
  return sumatorio;
}
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Suma numero pares =", sumarPares(arrayNumeros));
console.log("Suma numero pares =", sumarPares("Hola"));
console.log("Suma numero pares =", sumarPares(7));
