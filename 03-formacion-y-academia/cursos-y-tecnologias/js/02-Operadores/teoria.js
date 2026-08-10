/*
Operadores
Nos permiten manipular valores y realizar operaciones matemáticas, lógicas,comparar datos, 
y controlar el flujo logico del programa.

Operadores aritmeticos:
+ : Suma
- : Resta
* : Multiplicación
/ : División
% : Resto de la división
** : Exponente
++ : Incremento
-- : Decremento

Operadores de asignación:
= : Asignación
+= : Suma y asignación
-= : Resta y asignación
*= : Multiplicación y asignación
/= : División y asignación
%= : Resto de la división y asignación
**= : Exponente y asignación

Operadores de comparación:
== : Igualdad
=== : Igualdad estricta
!= : Desigualdad
!== : Desigualdad estricta
< : Menor que
> : Mayor que
<= : Menor o igual que
>= : Mayor o igual que

Operadores lógicos:
&& : Y
|| : O
! : Negación

Operadores ternarios:
? : Condicional
: : Alternativa

Valores truthy y falsy:
En JavaScript, los valores truthy son aquellos que se consideran verdaderos en un contexto booleano, mientras que los valores falsy son aquellos que se consideran falsos. 
Los valores truthy incluyen cualquier valor que no sea falsy, como números distintos de cero, cadenas de texto no vacías, objetos y arrays. 
Los valores falsy incluyen: false, 0, "", null, undefined y NaN.

*/
const isRaining = true;
// Operador ternario: Si isRaining es verdadero, se ejecuta la primera expresión, de lo contrario se ejecuta la segunda expresión.
isRaining ? console.log("It's raining") : console.log("It's not raining");
