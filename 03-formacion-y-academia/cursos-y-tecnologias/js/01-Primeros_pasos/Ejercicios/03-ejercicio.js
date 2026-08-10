/*
 Declara variables con valores asociados a todos los datos de tipo primitivos. 
*/

let nombre = "Juan";
let edad = 30;
let esEstudiante = true;
let direccion = null;
let telefono = undefined;
let simbolo = Symbol();
let myBigInt = 1234567890123456789012345678901234567890n;

console.log(typeof nombre); // "string"
console.log(typeof edad); // "number"
console.log(typeof esEstudiante); // "boolean"
console.log(typeof direccion); // "object"
console.log(typeof telefono); // "undefined"
console.log(typeof simbolo); // "symbol"
console.log(typeof myBigInt); // "bigint"
