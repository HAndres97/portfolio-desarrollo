/*
Tipos de datos

En JavaScript, los tipos de datos se clasifican en dos categorías: primitivos y no primitivos.

1. Tipos primitivos
    - String : Cadena de texto
    - Number : Números enteros y decimales
    - Boolean : Valores de verdadero o falso
    - Null : Representa la ausencia de valor
    - Undefined : Representa una variable que ha sido declarada pero no inicializada
    - Symbol : Representa un valor exclusivo

2. Tipos no primitivos
    - Object : Representa una colección de propiedades
    - Array : Representa una lista ordenada de valores
    - Function : Representa un bloque de código reutilizable

    Verificación de tipos de datos
En JavaScript, se utiliza typeof para verificar el tipo de dato de una variable.
typeof variable === "number"

*/
let nombre = "Juan"; // String
let edad = 30; // Number
let esEstudiante = true; // Boolean
let direccion = null; // Null
let telefono; // Undefined
let simbolo = Symbol(); // Symbol
let myBigInt = 1234567890123456789012345678901234567890n; // BigInt, se usa cuando Number no es suficiente para representar un número entero grande

console.log(typeof nombre); // "string"
console.log(typeof edad); // "number"
console.log(typeof esEstudiante); // "boolean"
console.log(typeof direccion); // "object"
console.log(typeof telefono); // "undefined"
console.log(typeof simbolo); // "symbol"
console.log(typeof myBigInt); // "bigint"
