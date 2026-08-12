/*
Crea una cadena de texto en varias líneas.
Interpolación de cadenas de texto
*/
let palabra = "Interpolacion";
let numero = 10;
let cadena_texto =
  " Esto es una cadena de texto, \n y van a contar la longitud";
console.log(cadena_texto);
let otra_cadena_texto = ` Esto es una cadena de texto,
y van a contar la longitud`;
console.log(otra_cadena_texto);

let otra_cadena_texto2 = ` Esto es una cadena de texto,
y van a contar la longitud ${palabra.length} y poner un numero ${numero}`;
console.log(otra_cadena_texto2);
