/**
 * Dado un array de nÃºmeros, usa un bucle para multiplicar todos los nÃºmeros y mostrar el producto.
 *
 * @param {number[]} numerosArray
 * @returns {number|null} funcion multilplicarNumeros
 */
function multiplicarNumeros(numerosArray) {
  if (!Array.isArray(numerosArray) || numerosArray.length === 0) {
    console.log("Error:Dato incorrecto");
    return null;
  }
  const comprobacionNumeros = numerosArray.every(
    (item) => typeof item === "number" && !Number.isNaN(item),
  );
  let contador = 1;
  if (!comprobacionNumeros) {
    console.log("Error:Datos incorrectos");
    return null;
  }
  for (const numeros of numerosArray) {
    contador *= numeros;
  }
  return contador;
}
const numerosArray = [1, 2, 3, 4, 5];
console.log(
  `El producto de mis numeros es :${multiplicarNumeros(numerosArray)}`,
);
console.log(
  `El producto de mis numeros es :${multiplicarNumeros([1, 2, 3, "hola"])}`,
);
console.log(`El producto de mis numeros es :${multiplicarNumeros(9)}`);
