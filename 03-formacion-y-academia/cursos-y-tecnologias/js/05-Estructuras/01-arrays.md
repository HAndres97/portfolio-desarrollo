# Apuntes de JavaScript: Arrays (Arreglos / Colecciones)

Un **Array** es una estructura de datos ordenada y de tipo objeto que permite almacenar una colección de elementos (primitivos u otros objetos) bajo un mismo nombre de variable.

---

## 1. Declaración e Inicialización de Arrays

Existen dos formas principales de declarar un array en JavaScript:

### A. Sintaxis Literal (Recomendada)

Es la forma estándar, más legible y utilizada en la industria.

```javascript
// Array vacío
const numerosVacios = [];

// Array con elementos iniciales
const frutas = ["Manzana", "Plátano", "Naranja"];
```

### B. Constructor `new Array()`

Debe usarse con precaución debido a su comportamiento con números enteros.

```javascript
// Caso 1: Varios argumentos -> Crea un array con esos elementos
const lista = new Array(1, 2, 3); // [1, 2, 3]

// ⚠️ Caso 2: Un solo argumento NUMÉRICO -> Crea espacios vacíos (Sparse Array)
const miArray2 = new Array(3);
console.log(miArray2); // [ <3 empty items> ] -> Longitud 3, pero SIN ELEMENTOS
```

> 💡 **Consejo Senior:** Evita siempre `new Array()`. Utiliza la sintaxis literal `[]` para evitar errores cuando pases un único número por variable.

---

## 2. Acceso y Modificación de Elementos

Los arrays en JavaScript tienen **índices basados en cero** (`0-indexed`).

```javascript
const lenguajes = ["JavaScript", "Python", "Java"];

// Acceso mediante corchetes []
console.log(lenguajes[0]); // "JavaScript"
console.log(lenguajes[1]); // "Python"

// Modificación directa
lenguajes[1] = "TypeScript";
console.log(lenguajes); // ["JavaScript", "TypeScript", "Java"]

// Acceso al último elemento (Forma moderna con .at())
console.log(lenguajes.at(-1)); // "Java"
```

---

## 3. Métodos Comunes de Arrays

> ⚠️ **Diferencia Senior Importante:** Distingue siempre entre métodos **mutables** (modifican el array original) e **inmutables** (devuelven una copia nueva sin alterar el original).

### A. Agregar / Eliminar al Final o Inicio (**Mutables**)

| Método                  | Acción                                       | Devuelve                     |
| :---------------------- | :------------------------------------------- | :--------------------------- |
| **`push(...elems)`**    | Agrega uno o varios elementos al **final**.  | La nueva longitud del array. |
| **`pop()`**             | Elimina el **último** elemento.              | El elemento eliminado.       |
| **`unshift(...elems)`** | Agrega uno o varios elementos al **inicio**. | La nueva longitud del array. |
| **`shift()`**           | Elimina el **primer** elemento.              | El elemento eliminado.       |

```javascript
const frutas = ["Manzana", "Plátano"];

frutas.push("Uva"); // ["Manzana", "Plátano", "Uva"]
const ultima = frutas.pop(); // Elimina "Uva" (devuelve "Uva")

frutas.unshift("Fresa"); // ["Fresa", "Manzana", "Plátano"]
const primera = frutas.shift(); // Elimina "Fresa" (devuelve "Fresa")
```

---

### B. Propiedad `.length`

Devuelve la cantidad total de elementos presentes en el array.

```javascript
const lista = [10, 20, 30];
console.log(lista.length); // 3
```

---

### C. Copiar y Extraer Secciones: `.slice()` (**Inmutable**)

Extrae una porción del array sin modificar el original. Sintaxis: `slice(inicio, fin)` (no incluye el índice `fin`).

```javascript
const numeros = [1, 2, 3, 4, 5];

// Copia desde el índice 1 hasta el 4 (sin incluir el 4)
const subCopia = numeros.slice(1, 4); // [2, 3, 4]

// Clonar un array completo de forma inmutable
const copiaCompleta = numeros.slice(); // [1, 2, 3, 4, 5]
```

---

### D. Reemplazar, Eliminar o Insertar: `.splice()` (**Mutable**)

Modifica el array original en cualquier posición. Sintaxis: `splice(inicio, conteoEliminar, ...elementosAInsertar)`.

```javascript
const meses = ["Ene", "Marzo", "Abril"];

// Insertar en la posición 1 sin eliminar nada (0)
meses.splice(1, 0, "Feb");
console.log(meses); // ["Ene", "Feb", "Marzo", "Abril"]

// Eliminar 1 elemento en la posición 2
meses.splice(2, 1);
console.log(meses); // ["Ene", "Feb", "Abril"]
```

> 🌟 **Novedad Profesional (ES2023):** Si quieres usar la funcionalidad de `splice` de forma **inmutable**, utiliza el método moderno **`.toSpliced()`**, que devuelve un nuevo array con los cambios sin tocar el original.

---

## 4. Limpieza y Vaciado de Arrays

Existen varias formas de vaciar un array. Estas son las dos principales y sus diferencias en memoria:

```javascript
let miArray = [1, 2, 3, 4, 5];

// OPCIÓN 1: Modificar la propiedad .length (Recomendado si es const o referencias compartidas)
miArray.length = 0;
console.log(miArray); // [] (Limpia el array original en memoria)

// OPCIÓN 2: Reasignación (Solo si la variable fue declarada con 'let')
let otroArray = [1, 2, 3];
otroArray = []; // Crea una nueva referencia vacía en memoria
```

---

## 💡 Preguntas Típicas de Entrevista Técnica

### 1. ¿Por qué `push()` y `pop()` son más eficientes que `shift()` y `unshift()`?

- **Respuesta Senior:** `push()` y `pop()` operan en el **final del array** con una complejidad temporal de **$O(1)$** (tiempo constante), ya que no requieren reordenar el resto de elementos.
- `unshift()` y `shift()` operan en el **inicio del array** con una complejidad de **$O(n)$** (tiempo lineal), porque deben desplazar el índice de cada uno de los elementos restantes de la colección.

### 2. ¿Cómo se comportan los métodos de Array con las variables declaradas con `const`?

- **Respuesta Senior:** Como la variable `const` protege la **referencia en memoria** y no la mutabilidad del valor, métodos mutables como `.push()`, `.pop()` o `.splice()` funcionan perfectamente sobre un array `const`. Lo único prohibido con `const` es reasignar el array completo (`array = []`).

```javascript
const numeros = [1, 2, 3];
numeros.push(4); // ✅ VÁLIDO: Mutación interna
// numeros = [1, 2, 3, 4]; // ❌ ERROR: Reasignación de referencia
```

### 3. ¿Cómo distingues entre `.slice()` y `.splice()`?

- **Respuesta Senior:**
  - **`.slice()`** (con **C**): Es _Clean/Copy_ (inmutable). Extrae una sección y devuelve una **copia**, dejando el original intacto.
  - **`.splice()`** (con **P**): Es _Poison/Mutate_ (mutable). Modifica o "empalma" directamente el array **original**.
