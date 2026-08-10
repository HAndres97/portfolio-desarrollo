/*
Variables en JavaScript 

Las variables son contenedores de datos que permiten almacenar y manipular valores. 
En JavaScript, las variables se declaran utilizando la palabra clave var, let o const.

var se usa para declarar variables globales y locales. 
let se utiliza para declarar variables locales 
const se utiliza para declarar constantes.

Buenas prácticas al declarar variables:
1. Utilizar nombres descriptivos y significativos para las variables.
2. Evitar el uso de palabras reservadas del lenguaje.
3. Utilizar camelCase para nombrar variables (por ejemplo: miVariable).
4. Declarar variables en el ámbito más reducido posible.
5. Inicializar las variables al momento de declararlas.

El uso de var, let y const tiene diferencias importantes:
1. var: 
   - Esta en desuso y se debe evitar.
   - Tiene un alcance de función (function scope).
   - Permite la redeclaración y reasignación de variables.
   - Puede generar problemas de hoisting, ya que las variables declaradas con var se elevan al inicio del ámbito.
2. let:
   - Tiene un alcance de bloque (block scope).
   - No permite la redeclaración de variables.
   - Puede generar problemas de hoisting, ya que las variables declaradas con let se elevan al inicio del bloque.
3. const:
   - Tiene un alcance de bloque (block scope).
   - No permite la redeclaración ni la reasignación de variables.
   - Puede generar problemas de hoisting, ya que las variables declaradas con const se elevan al inicio del bloque.

*/
var nombre = "Juan"; // Declaración de variable con var
let apellido = "Pérez"; // Declaración de variable con let
const edad = 30; // Declaración de variable con const

console.log(
  "Mi nombre es " + nombre + " " + apellido + " y tengo " + edad + " años.",
);
