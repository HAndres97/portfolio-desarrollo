# Apuntes de JavaScript: Tipos de Datos y Sistema de Tipado

JavaScript es un lenguaje de **tipado dinámico y débil**. Esto significa que las variables no están atadas a un tipo de dato fijo, sino que el tipo lo determina el valor asignado en tiempo de ejecución.

Los tipos de datos se dividen en dos categorías principales: **Primitivos** y **Objetos (No Primitivos)**.

---

## 1. Tipos Primitivos (Inmutables y Pasados por Valor)

Un valor primitivo es aquel que **no es un objeto** y **no tiene métodos propios**. Son inmutables (su valor en memoria no se puede modificar, solo reemplazar) y cuando los asignas o pasas a una función, se copian por **valor**.

Existen exactamente **7 tipos primitivos**:

| Tipo                    | Descripción                                                          | Ejemplo                         |
| :---------------------- | :------------------------------------------------------------------- | :------------------------------ |
| **`string`**            | Secuencia de caracteres/texto.                                       | `"Juan"`, `'Hola'`              |
| **`number`**            | Números enteros y de punto flotante (IEEE 754).                      | `30`, `3.14`, `NaN`, `Infinity` |
| **`boolean`**           | Representa una entidad lógica.                                       | `true`, `false`                 |
| **`null`**              | Ausencia intencional de valor u objeto.                              | `null`                          |
| **`undefined`**         | Variable declarada pero a la que no se le ha asignado valor.         | `let x;`                        |
| **`symbol`** _(ES6)_    | Identificador único e inmutable (muy usado para claves de objetos).  | `Symbol("id")`                  |
| **`bigint`** _(ES2020)_ | Enteros de precisión arbitraria para números mayores a $2^{53} - 1$. | `9007199254740991n`             |

---

## 2. Tipos No Primitivos / Objetos (Mutables y Pasados por Referencia)

Cualquier valor en JS que no sea un primitivo es una instancia de **`Object`**. Se almacenan en la memoria Heap y cuando se asignan a otra variable, lo que se copia es su **referencia en memoria**.

- **`Object`**: Colección de pares clave-valor (`{ nombre: "Juan" }`).
- **`Array`**: Subtipo de objeto especial para colecciones ordenadas (`[1, 2, 3]`).
- **`Function`**: Subtipo de objeto ejecutable (`function() {}`).

---

## 3. El Operador `typeof` y sus Trampas Profesionales

El operador `typeof` devuelve una cadena que indica el tipo del valor evaluado.

```javascript
typeof "Juan"; // "string"
typeof 30; // "number"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof Symbol(); // "symbol"
typeof 10n; // "bigint"
typeof function () {}; // "function"
```

### ⚠️ El Bug Histórico: `typeof null === "object"`

En la primera versión de JavaScript (1995), los valores se guardaban en etiquetas de tipo de 32 bits. La etiqueta para objetos era `000`. Dado que `null` representaba el puntero nulo (`0x00`), su etiqueta era `000`, provocando que `typeof null` devolviera `"object"`.

> **Pregunta típica de entrevista:** ¿Por qué no se corrige este error?  
> **Respuesta Senior:** Porque arreglarlo rompería millones de páginas web antiguas que dependen de ese comportamiento (_break backward compatibility_).

### 🛠️ Cómo comprobar tipos de forma segura en producción:

```javascript
const valorNull = null;
const lista = [1, 2, 3];

// ❌ Mala práctica para comprobar si algo es un objeto
console.log(typeof valorNull === "object"); // true (Falso positivo)

// ✅ Forma correcta de comprobar null
console.log(valorNull === null); // true

// ❌ typeof lista devuelve "object" (no te dice si es un Array)
console.log(typeof lista); // "object"

// ✅ Forma correcta de comprobar si es un Array (ES6)
console.log(Array.isArray(lista)); // true
```

---

## 4. Diferencia entre `null` y `undefined`

- **`undefined`**: Significa que **el motor de JavaScript** no ha encontrado un valor asignado (falta de inicialización explícita).
- **`null`**: Significa que **el programador** ha asignado explícitamente esa variable para indicar que está vacía o sin valor.

```javascript
let telefono; // JS asigna 'undefined' automáticamente
let direccion = null; // El desarrollador declara explícitamente que no hay dirección
```

---

## 5. Código Refactorizado y Modernizado

```javascript
/**
 * Declaración de variables aplicando tipos primitivos y referencias
 */
const nombre = "Juan";
const edad = 30;
const esEstudiante = true;
const direccion = null;
let telefono; // undefined
const idUnico = Symbol("id");
const granEntero = 1234567890123456789012345678901234567890n;

// Comprobaciones de tipo avanzadas
console.log(typeof nombre); // "string"
console.log(typeof granEntero); // "bigint"
console.log(direccion === null); // true (Forma segura)
console.log(typeof telefono === "undefined"); // true
```

---

## 💡 Preguntas Típicas de Entrevista Técnica

### 1. ¿Cuál es la diferencia entre Paso por Valor y Paso por Referencia?

- **Paso por Valor:** Aplica a los **tipos primitivos** (`string`, `number`, `boolean`, etc.). Al asignar o pasar la variable a una función, se crea una **copia independiente** del valor en memoria.
- **Paso por Referencia:** Aplica a los **objetos y arrays**. Las variables no guardan el valor directamente, sino una **dirección de memoria** (puntero/referencia). Si modificas el objeto desde una variable, el cambio se reflejará en todas las variables que apunten a esa misma dirección.

```javascript
// Paso por Valor (Primitivos)
let a = 10;
let b = a; // Copia el valor '10'
b = 20;
console.log(a); // 10 (Imperturbable)

// Paso por Referencia (Objetos)
const usuario1 = { nombre: "Ana" };
const usuario2 = usuario1; // Copia la REFERENCIA de memoria
usuario2.nombre = "Pedro";
console.log(usuario1.nombre); // "Pedro" (¡Ambos apuntan al mismo objeto!)
```

---

### 2. ¿Qué significa `NaN` y por qué `NaN === NaN` devuelve `false`?

`NaN` significa **_Not a Number_**, aunque irónicamente su `typeof` devuelve `"number"`. Representa un valor numérico no representable o el resultado de una operación matemática no válida (por ejemplo, `"hola" * 2`).

Según el estándar **IEEE 754** (que rige la matemática de coma flotante en los lenguajes de programación), **un valor indeterminado no se puede considerar igual a otro valor indeterminado**. Por eso, `NaN` es el único valor en JavaScript que no es igual a sí mismo.

```javascript
console.log(NaN === NaN); // false ❌

// 🛠️ Forma correcta y segura de comprobar NaN (ES6):
console.log(Number.isNaN(NaN)); // true ✅
```

---

### 3. ¿Qué es la Coerción de Tipos (_Type Coercion_)?

Es la **conversión automática o implícita** que realiza el motor de JavaScript cuando evalúa valores de diferentes tipos de datos dentro de una misma expresión.

```javascript
// Coerción a String (el operador '+' concatena si hay un string)
console.log("5" + 2); // "52"

// Coerción a Number (operadores como '-', '*', '/' fuerzan conversión a número)
console.log("5" - 2); // 3

// Evaluaciones sorprendentes por Coerción Implícita:
console.log([] + {}); // "[object Object]"
console.log(true + true); // 2 (true se convierte a 1)
```

> 💡 **Consejo Senior:** Para evitar bugs provocados por la Coerción de Tipos implícita, utiliza siempre el operador de igualdad estricta (`===`) y realiza conversiones de tipo explícitas (como `Number("5")` o `String(123)`).
