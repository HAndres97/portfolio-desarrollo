# Apuntes de JavaScript: Operadores y Lógica

Los **operadores** permiten manipular valores, realizar cálculos matemáticos, comparar datos, combinar expresiones lógicas y controlar el flujo del programa.

---

## 1. Operadores Aritméticos

Realizan operaciones matemáticas estándar entre números.

```javascript
const a = 10;
const b = 3;

console.log(a + b); // 13  (Suma)
console.log(a - b); // 7   (Resta)
console.log(a * b); // 30  (Multiplicación)
console.log(a / b); // 3.333... (División)
console.log(a % b); // 1   (Módulo / Resto de la división)
console.log(a ** b); // 1000 (Exponenciación: 10 elevado a 3)
```

> ⚠️ **Consejo Senior sobre Incremento (`++`) y Decremento (`--`):**
> Aunque existen `x++` y `x--`, en código profesional moderno **se evita su uso dentro de expresiones complejas** porque mutan la variable y pueden causar confusión de lectura. En su lugar, prefiere la asignación explícita `x += 1`.

---

## 2. Operadores de Asignación

Combinan una operación con la asignación directa de un nuevo valor.

```javascript
let puntaje = 100;

puntaje += 50; // Equivalente a: puntaje = puntaje + 50 (150)
puntaje -= 20; // Equivalente a: puntaje = puntaje - 20 (130)
puntaje *= 2; // Equivalente a: puntaje = puntaje * 2  (260)
puntaje /= 4; // Equivalente a: puntaje = puntaje / 4  (65)
puntaje %= 5; // Equivalente a: puntaje = puntaje % 5  (0)
```

---

## 3. Operadores de Comparación

Comparan dos valores y devuelven un resultado booleano (`true` o `false`).

| Operador | Descripción                             | Ejemplo     | Resultado |
| :------- | :-------------------------------------- | :---------- | :-------- |
| `===`    | **Igualdad estricta** (Valor y Tipo)    | `5 === "5"` | `false`   |
| `!==`    | **Desigualdad estricta** (Valor o Tipo) | `5 !== "5"` | `true`    |
| `>`      | Mayor que                               | `10 > 5`    | `true`    |
| `<`      | Menor que                               | `3 < 1`     | `false`   |
| `>=`     | Mayor o igual que                       | `5 >= 5`    | `true`    |
| `<=`     | Menor o igual que                       | `4 <= 2`    | `false`   |

> 🚫 **REGLA DE ORO:** **NUNCA uses `==` ni `!=` (Igualdad/Desigualdad débil).**
> La igualdad débil realiza conversión automática de tipos (_Type Coercion_), provocando comportamientos insólitos e impredecibles:
>
> ```javascript
> 0 == ""; // true ❌ (Peligroso)
> false == "0"; // true ❌ (Peligroso)
> null == undefined; // true
>
> 0 === ""; // false ✅ (Seguro: tipos distintos)
> ```

---

## 4. Operadores Lógicos y Cortocircuito (_Short-Circuit_)

Se utilizan para evaluar múltiples condiciones booleanas.

### A. Evaluaciones Básicas

- **`&&` (AND):** Devuelve `true` solo si **ambas** condiciones son verdaderas.
- **`||` (OR):** Devuelve `true` si **al menos una** condición es verdadera.
- **`!` (NOT):** Invierte el valor booleano (`!true` es `false`).

```javascript
const tieneEdad = true;
const tieneLicencia = false;

const puedeConducir = tieneEdad && tieneLicencia; // false
```

### B. Comportamiento de Cortocircuito (Evaluación de Respaldo)

En JS, `&&` y `||` no siempre devuelven un booleano; devuelven el **último valor evaluado**:

```javascript
// || (OR) devuelve el primer valor TRUTHY que encuentra (útil para valores por defecto)
const nombreUsuario = "" || "Invitado"; // "Invitado"

// && (AND) si el primer valor es Falsy, detiene la ejecución y lo devuelve
const usuarioLogueado = true;
usuarioLogueado && console.log("Bienvenido de nuevo"); // Se ejecuta
```

### C. Operador de Fusión Nula (`??`) _(ES2020)_

A diferencia de `||` (que salta en cualquier valor _Falsy_ como `0` o `""`), `??` solo evalúa como reemplazo si el valor es estrictamente **`null`** o **`undefined`**.

```javascript
const vidas = 0;

// Problema con || (0 es falsy, por lo que ignora el 0 real)
const vidasFinalesOR = vidas || 3; // 3 ❌ (Incorrecto si el jugador tiene 0 vidas)

// Solución profesional con ??
const vidasFinalesNullish = vidas ?? 3; // 0 ✅ (Correcto)
```

---

## 5. Operador Ternario (`condicion ? expr1 : expr2`)

Es una forma abreviada de escribir una estructura `if / else` que **retorna un valor**.

```javascript
const edad = 20;

// ✅ USO CORRECTO: Asignación de un valor según condición
const tipoPersona = edad >= 18 ? "Adulto" : "Menor";
console.log(tipoPersona); // "Adulto"
```

> ⚠️ **Mala Práctica a Evitar:**
> No uses el ternario para ejecutar efectos secundarios (como hacer un `console.log`). Para ejecutar acciones, usa un `if` tradicional.
>
> ```javascript
> const isRaining = true;
>
> // ❌ MALA PRÁCTICA (Ternario usado como "if" para ejecutar comandos)
> isRaining ? console.log("Está lloviendo") : console.log("No llueve");
>
> // ✅ BUENA PRÁCTICA (Clara y directa)
> if (isRaining) {
>   console.log("Está lloviendo");
> } else {
>   console.log("No llueve");
> }
> ```

---

## 6. Valores Truthy y Falsy

En JavaScript, cualquier valor evaluado dentro de un contexto booleano (como un `if`) se convierte implícitamente a `true` o `false`.

### Lista Completa de Valores Falsy (Solo existen estos 8)

1. `false`
2. `0` (y `-0`)
3. `0n` (BigInt cero)
4. `""` (string vacío)
5. `null`
6. `undefined`
7. `NaN` (Not a Number)
8. `document.all` (Casuística histórica de navegadores)

### Valores Truthy

**Cualquier otro valor en JS es Truthy**, incluidos:

- `"0"` y `"false"` (strings no vacíos)
- `[]` (Arrays vacíos)
- `{}` (Objetos vacíos)
- `function(){}` (Funciones)

```javascript
// Ejemplo de verificación profesional
const listaUsuarios = [];

// Aunque el array esté vacío, un objeto/array en JS SIEMPRE es Truthy
if (listaUsuarios) {
  // ❌ Esto se ejecutará siempre, ¡cuidado!
}

// Forma correcta comprobando la propiedad .length:
if (listaUsuarios.length > 0) {
  // ✅ Solo se ejecuta si realmente hay elementos
}
```
