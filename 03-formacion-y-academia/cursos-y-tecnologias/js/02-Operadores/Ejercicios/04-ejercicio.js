/*
  Utiliza el operador lógico and y  or 
*/

let a = true;
let b = false;
let c = true;
let d = false;

console.log(a && b); // false
console.log(a || b); // true
console.log(c && d); // false
console.log(c || d); // true

// Combins los operadores and y or para crear expresiones complejas

console.log((a && b) || (c && d)); // true
console.log((a || b) && (c || d)); // true
