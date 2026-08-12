/*
Reemplaza todos los espacios en blanco de un string por guiones.
*/
let cadena_texto =
  "Esta es una cadena de texto donde se van a cambiar los espacios en blanco por guiones";
//let cadena_remplazada = cadena_texto.replace(/ /g, "-");
const cadenaReemplazada = cadena_texto.replaceAll(" ", "-");
console.log(cadenaReemplazada);
