# Apuntes de JavaScript: Bucles y Control de Iteración

Los **bucles** (o bucles de repetición) son estructuras de control que permiten ejecutar de forma repetitiva un bloque de código mientras se cumpla una condición específica o para recorrer cada elemento de una colección de datos.

---

## 1. Bucle Tradicional: `for`

Se utiliza principalmente cuando **se conoce de antemano el número exacto de iteraciones**.

Sintaxis: `for (inicialización; condición; incremento)`

```javascript
// Imprime los números del 0 al 4 (5 iteraciones)
for (let i = 0; i < 5; i++) {
  console.log(`Iteración número: ${i}`);
}
```

- **Inicialización (`let i = 0`):** Se ejecuta una sola vez al inicio. Debe usarse `let` porque el valor del contador irá cambiando.
- **Condición (`i < 5`):** Se evalúa antes de cada iteración. Si da `true`, el bloque se ejecuta; si da `false`, el bucle termina.
- **Incremento (`i++`):** Se ejecuta al final de cada ciclo para actualizar el contador.

---

## 2. Bucle Basado en Condición: `while`

Evalúa una condición booleana **antes** de cada iteración. Se utiliza cuando **no se conoce cuántas veces se repetirá la tarea**, sino solo la condición de parada.

```javascript
let contador = 0;

while (contador < 3) {
  console.log(`Contador actual: ${contador}`);
  contador++; // ⚠️ CRUCIAL: Debe haber una instrucción que altere la condición para evitar un bucle infinito
}
```

---

## 3. Bucle Garantizado: `do...while`

A diferencia de `while`, este bucle evalúa la condición **después** de ejecutar el bloque de código. **Garantiza que el bloque se ejecutará al menos una vez**, independientemente de si la condición es verdadera o falsa de entrada.

```javascript
let intentos = 0;

do {
  intentos++;
  console.log(`Intento número: ${intentos}`);
} while (intentos < 0); // La condición es falsa desde el inicio, pero el bloque ya se ejecutó 1 vez
```

---

## 4. Iteración de Colecciones: `for...of`

Introducido en ES6, es la forma estándar, más directa y legible de recorrer elementos de cualquier **objeto iterable** (`Array`, `Set`, `Map`, `String`, `NodeList`, etc.).

```javascript
// Iteración sobre un Array
const frutas = ["Manzana", "Plátano", "Naranja"];

for (const fruta of frutas) {
  console.log(fruta); // Accede directamente al valor de cada elemento
}

// Iteración sobre un Set
const setNumeros = new Set([10, 20, 30]);

for (const num of setNumeros) {
  console.log(num);
}
```

> 💡 **Buenas Prácticas:**
> Dentro de un `for...of`, utiliza la variable de iteración como `const` (ej: `for (const elemento of lista)`). Dado que en cada ciclo se crea un nuevo enlace de bloque local, `const` evita reasignaciones accidentales dentro del bucle.

---

## 5. Control de Flujo dentro de Bucles (`break` y `continue`)

JavaScript proporciona dos sentencias clave para interrumpir o alterar el comportamiento estándar de un bucle:

### A. `break` (Interrupción Total)

Detiene inmediatamente la ejecución del bucle y sale de él, continuando con el código que esté a continuación.

```javascript
const numeros = [1, 2, 3, 4, 5, 6];

for (const num of numeros) {
  if (num === 4) {
    console.log("Encontrado el 4, interrumpiendo bucle...");
    break; // Sale inmediatamente del bucle
  }
  console.log(`Número: ${num}`);
}
// Imprime: 1, 2, 3 y se detiene.
```

### B. `continue` (Salto de Iteración)

Omite el resto del código del ciclo actual y salta directamente a la evaluación de la siguiente iteración.

```javascript
const numeros = [1, 2, 3, 4, 5];

for (const num of numeros) {
  if (num % 2 === 0) {
    continue; // Salta los números pares
  }
  console.log(`Número impar: ${num}`);
}
// Imprime: 1, 3, 5
```

---

## 💡 Preguntas Típicas de Entrevista Técnica

### 1. ¿Cuál es la diferencia entre `for...of` y `for...in`?

- **Respuesta Senior:**
  - **`for...of`**: Recorre los **VALORES** de un objeto _iterable_ (`Array`, `Set`, `Map`, `String`).
  - **`for...in`**: Recorre las **CLAVES o NOMBRES DE PROPIEDADES** (índices) de un _Objeto_ o `Array`.

```javascript
const lista = ["a", "b", "c"];

// for...in devuelve los ÍNDICES (claves)
for (const i in lista) {
  console.log(i); // "0", "1", "2"
}

// for...of devuelve los VALORES
for (const val of lista) {
  console.log(val); // "a", "b", "c"
}
```

> ⚠️ **Regla Senior:** Evita usar `for...in` para recorrer Arrays. `for...in` recorre propiedades enumerables en cualquier orden (incluidas las heredadas del prototipo), lo que puede causar fallos de rendimiento o comportamientos inesperados.

### 2. ¿Se pueden usar `break` o `continue` dentro de un método `.forEach()` de Array?

- **Respuesta Senior:** **No**. El método `.forEach()` ejecuta una función _callback_ por cada elemento de la lista y no admite las sentencias de control `break` o `continue` (provocarán un error de sintaxis `SyntaxError`). Si necesitas cancelar la iteración antes de tiempo, debes usar un bucle tradicional `for`, un `for...of`, o métodos como `.some()` / `.every()`.
