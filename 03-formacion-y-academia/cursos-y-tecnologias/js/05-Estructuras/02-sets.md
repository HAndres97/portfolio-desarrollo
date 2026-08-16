# Apuntes de JavaScript: Colecciones de Valores Únicos (`Set`)

Un **`Set`** es una estructura de datos nativa (introducida en ES6) que permite almacenar una colección de valores **únicos** de cualquier tipo (primitivos u objetos). No admite elementos duplicados: si intentas agregar un valor que ya existe, el `Set` simplemente lo ignorará.

---

## 1. Declaración e Inicialización de Sets

Para crear un `Set` se utiliza el constructor `new Set()`. Puedes crearlo vacío o inicializarlo pasándole un objeto iterable (como un `Array`).

```javascript
// 1. Declaración de un Set vacío
const miSet = new Set();

// 2. Inicialización a partir de un Array existente
const miSet2 = new Set([1, 2, 4, 5]);

console.log(miSet2); // Set(4) { 1, 2, 4, 5 }

// Si el iterable de origen tiene duplicados, el Set los elimina automáticamente
const setSinDuplicados = new Set([1, 1, 2, 2, 3]);
console.log(setSinDuplicados); // Set(3) { 1, 2, 3 }
```

---

## 2. Operaciones Comunes con `Set`

A diferencia de los Arrays, un `Set` **no tiene índices** (`set[0]` devolverá `undefined`). Toda la interacción se realiza mediante sus métodos nativos:

| Método / Propiedad   | Descripción                                   | Ejemplo            | Devuelve                                  |
| :------------------- | :-------------------------------------------- | :----------------- | :---------------------------------------- |
| **`.add(valor)`**    | Añade un nuevo elemento al conjunto.          | `miSet.add(10)`    | El propio `Set` (permite encadenamiento). |
| **`.has(valor)`**    | Comprueba si un valor existe en el conjunto.  | `miSet.has(10)`    | `true` o `false`.                         |
| **`.delete(valor)`** | Elimina un valor específico.                  | `miSet.delete(10)` | `true` (si existía) o `false`.            |
| **`.clear()`**       | Elimina todos los elementos del conjunto.     | `miSet.clear()`    | `undefined`.                              |
| **`.size`**          | Propiedad que devuelve el total de elementos. | `miSet.size`       | Número entero.                            |

```javascript
const carrito = new Set();

// .add() - Agregar elementos (se pueden encadenar)
carrito.add("Camiseta").add("Pantalón").add("Camiseta"); // "Camiseta" no se duplicará

console.log(carrito.size); // 2

// .has() - Comprobar existencia
console.log(carrito.has("Camiseta")); // true
console.log(carrito.has("Zapatos")); // false

// .delete() - Eliminar un elemento
carrito.delete("Pantalón");
console.log(carrito.has("Pantalón")); // false
```

---

## 3. Conversión entre `Set` y `Array`

Es una técnica indispensable en el día a día para alternar entre la flexibilidad de los métodos de Array (`.map()`, `.filter()`) y la garantía de unicidad de `Set`.

### De `Array` a `Set`

```javascript
const arrayOriginal = [1, 2, 3, 3, 4];
const conjunto = new Set(arrayOriginal);
```

### De `Set` a `Array`

Se utiliza el **Operador Spread (`...`)** o **`Array.from()`**:

```javascript
const miSet = new Set(["Madrid", "Barcelona", "Valencia"]);

// Opción 1: Operador Spread [...] (Recomendado y más limpio)
const arrayCiudades = [...miSet];

// Opción 2: Array.from()
const arrayCiudades2 = Array.from(miSet);

console.log(arrayCiudades); // ["Madrid", "Barcelona", "Valencia"]
```

---

## 4. Patrón Profesional: Eliminar Duplicados de un Array en 1 Línea

Este es uno de los _one-liners_ más utilizados en código JavaScript profesional:

```javascript
const listaConDuplicados = ["JS", "Python", "JS", "Java", "Python"];

// Eliminación de duplicados mediante la combinación Array -> Set -> Array
const listaLimpia = [...new Set(listaConDuplicados)];

console.log(listaLimpia); // ["JS", "Python", "Java"]
```

---

## 🌟 Métodos Nuevos de Conjuntos (ES2024)

En las versiones modernas de JavaScript se han incorporado métodos nativos para operaciones matemáticas de conjuntos directamente sobre `Set`:

```javascript
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

// Intersección (elementos presentes en ambos)
const comunes = setA.intersection(setB); // Set(1) { 3 }

// Unión (combina todos los elementos de ambos sin repetir)
const todos = setA.union(setB); // Set(5) { 1, 2, 3, 4, 5 }

// Diferencia (elementos de A que NO están en B)
const soloEnA = setA.difference(setB); // Set(2) { 1, 2 }
```

---

## 💡 Preguntas Típicas de Entrevista Técnica

### 1. ¿Por qué `.has()` en un `Set` es más eficiente que `.includes()` en un `Array`?

- **Respuesta Senior:**
  - En un **`Array`**, `.includes()` realiza una búsqueda lineal examinando elemento por elemento, lo que tiene una complejidad temporal de **$O(n)$**.
  - En un **`Set`**, los datos se almacenan internamente mediante tablas hash (_hash tables_). El método `.has()` realiza una búsqueda directa con una complejidad temporal media de **$O(1)$** (tiempo constante), sin importar el tamaño de la colección.

### 2. ¿Cómo maneja un `Set` la unicidad de los Objetos?

- **Respuesta Senior:** Un `Set` compara valores primitivos por su valor exacto, pero los **objetos y arrays** se comparan por su **referencia en memoria** (no por su contenido).

```javascript
const miSet = new Set();

// Objetos con el mismo contenido pero DIFERENTE referencia en memoria
miSet.add({ id: 1 });
miSet.add({ id: 1 });

console.log(miSet.size); // 2 ⚠️ (Se guardan ambos porque son referencias distintas)

const objetoUnico = { id: 2 };
miSet.add(objetoUnico);
miSet.add(objetoUnico);

console.log(miSet.size); // 3 ✅ (No se duplica porque es exactamente la misma referencia)
```
