/*
 Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas. 
*/
let numero = 10;
let suma = 0;
suma += numero; // suma = suma + 5
let resta = 10;
resta -= 5; // resta = resta - 5
let multiplicacion = 10;
multiplicacion *= 5; // multiplicacion = multiplicacion * 5
let division = 10;
division /= 5; // division = division / 5
let modulo = 10;
modulo %= 5; // modulo = modulo % 5
let exponente = 10;
exponente **= 5; // exponente = exponente ** 5

console.log(suma); // 15
console.log(resta); // 5
console.log(multiplicacion); // 50
console.log(division); // 2
console.log(modulo); // 0
console.log(exponente); // 100000
