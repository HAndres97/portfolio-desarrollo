/*
Declara constantes con valores asociados a todos los tipos de datos primitivos.
*/

const nombre = "Juan";
const edad = 30;
const esEstudiante = true;
const direccion = null;
const telefono = undefined;
const simbolo = Symbol();
const myBigInt = 1234567890123456789012345678901234567890n;

console.log(typeof nombre); // "string"
console.log(typeof edad); // "number"
console.log(typeof esEstudiante); // "boolean"
console.log(typeof direccion); // "object"
console.log(typeof telefono); // "undefined"
console.log(typeof simbolo); // "symbol"
console.log(typeof myBigInt); // "bigint"
