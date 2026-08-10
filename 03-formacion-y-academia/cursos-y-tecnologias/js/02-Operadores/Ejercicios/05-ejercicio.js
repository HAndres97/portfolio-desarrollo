/*
  Combina operadores aritméticos, de comparáción y lógicas
*/

let a = 10;
let b = 5;
let c = 3;

console.log(a + b * c); // 35
console.log((a % b) + c); // 2
console.log(a < b && b > c); // false
console.log(a > b || b < c); // true

let resultado = (a + b) * c > 30 && a < 20 ? "es verdadero" : "es falso";
console.log(resultado); // es verdadero

let resultado2 = (a + b) * c > 30 || a < 20 ? "es verdadero" : "es falso";
console.log(resultado2); // es verdadero
