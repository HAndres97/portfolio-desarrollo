# Apuntes de JavaScript: Estructuras Clave-Valor (`Map`)

Un **`Map`** es una colección de pares clave-valor (introducida en ES6) donde **tanto las claves como los valores pueden ser de cualquier tipo de dato** (primitivos, objetos, funciones o elementos del DOM). A diferencia de los objetos literales comunes, los pares se recuerdan en el orden exacto en el que fueron insertados.

---

## 1. Declaración e Inicialización de Maps

Para instanciar un `Map` se utiliza el constructor `new Map()`. Puede crearse vacío o inicializarse pasando un **array de arrays de dos elementos** (pares `[clave, valor]`).

```javascript
// 1. Declaración de un Map vacío
let myMap = new Map();

// 2. Inicialización con valores iniciales mediante pares [clave, valor]
const myMap2 = new Map([
  ["name", "Andres"],
  ["age", 29],
  ["role", "Developer"],
]);

console.log(myMap2); // Map(3) { 'name' => 'Andres', 'age' => 29, 'role' => 'Developer' }
```

---

## 2. Métodos Comunes y Propiedad `.size`

Toda la manipulación y consulta en un `Map` se realiza a través de su API de métodos dedicada:

| Método / Propiedad       | Descripción                                    | Ejemplo                | Devuelve                                  |
| :----------------------- | :--------------------------------------------- | :--------------------- | :---------------------------------------- |
| **`.set(clave, valor)`** | Establece o actualiza un par clave-valor.      | `myMap.set("id", 101)` | El propio `Map` (permite encadenamiento). |
| **`.get(clave)`**        | Obtiene el valor asociado a una clave.         | `myMap.get("id")`      | El valor o `undefined` si no existe.      |
| **`.has(clave)`**        | Comprueba si existe una clave.                 | `myMap.has("id")`      | `true` o `false`.                         |
| **`.delete(clave)`**     | Elimina una clave y su valor.                  | `myMap.delete("id")`   | `true` (si existía) o `false`.            |
| **`.clear()`**           | Elimina todas las entradas del Map.            | `myMap.clear()`        | `undefined`.                              |
| **`.size`**              | Propiedad que devuelve el número de elementos. | `myMap.size`           | Número entero.                            |

```javascript
const usuarios = new Map();

// .set() - Agregar o actualizar datos (encadenable)
usuarios
  .set("usr1", { nombre: "Ana", activo: true })
  .set("usr2", { nombre: "Carlos", activo: false });

// .get() - Lectura de valores
console.log(usuarios.get("usr1")); // { nombre: "Ana", activo: true }

// .has() - Comprobación de existencia de la clave
console.log(usuarios.has("usr2")); // true

// .size - Cantidad total de pares
console.log(usuarios.size); // 2

// .delete() - Eliminación por clave
usuarios.delete("usr2");
console.log(usuarios.has("usr2")); // false
```

---

## 3. Recorrido de Maps (`keys()`, `values()`, `entries()`)

Los `Map` son iterables nativos y mantienen el orden original de inserción. Proporcionan tres iteradores principales para recorrer su contenido:

```javascript
const config = new Map([
  ["theme", "dark"],
  ["language", "es"],
  ["notifications", true],
]);

// 1. .keys() -> Recorre solo las CLAVES
for (const clave of config.keys()) {
  console.log(`Clave: ${clave}`);
}

// 2. .values() -> Recorre solo los VALORES
for (const valor of config.values()) {
  console.log(`Valor: ${valor}`);
}

// 3. .entries() -> Recorre pares [clave, valor] (comportamiento por defecto)
for (const [clave, valor] of config.entries()) {
  console.log(`${clave} =>${valor}`);
}

// Recorrido directo con .forEach()
config.forEach((valor, clave) => {
  console.log(`forEach: ${clave} =${valor}`);
});
```

---

## 4. Diferencias Clave: `Map` vs. Objetos Literales (`{}`)

| Característica      | Objeto Literal (`{}`)                                                               | `Map`                                                                    |
| :------------------ | :---------------------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| **Tipos de Clave**  | Solo `String` o `Symbol` (otros tipos se convierten a String automáticamente).      | **Cualquier tipo**: Objetos, Funciones, Números, Booleanos, etc.         |
| **Orden de Claves** | No totalmente garantizado en versiones antiguas (complejo según la especificación). | **Garantizado**: Orden exacto de inserción.                              |
| **Tamaño/Longitud** | Manual (`Object.keys(obj).length`).                                                 | Directo con la propiedad `.size`.                                        |
| **Rendimiento**     | Optimizado para propiedades fijas predefinidas.                                     | Mejor rendimiento en **inserciones y eliminaciones masivas frecuentes**. |
| **Iterabilidad**    | Requiere `Object.keys()`, `Object.values()` u `Object.entries()`.                   | Iterable directamente con `for...of` o `.forEach()`.                     |

---

## 💡 Preguntas Típicas de Entrevista Técnica

### 1. ¿Cómo funcionan los Objetos o Funciones cuando se usan como Clave en un `Map`?

- **Respuesta Senior:** Un `Map` identifica las claves de tipo Objeto o Función mediante **igualdad de referencia en memoria** (usando el algoritmo _SameValueZero_). Dos objetos con las mismas propiedades pero distintas referencias en memoria se consideran claves totalmente diferentes.

```javascript
const mapa = new Map();

const objA = { id: 1 };
const objB = { id: 1 };

mapa.set(objA, "Usuario A");
mapa.set(objB, "Usuario B");

console.log(mapa.size); // 2 ✅ (Tienen referencias en memoria distintas)
console.log(mapa.get({ id: 1 })); // undefined ⚠️ (Objeto nuevo creado al vuelo, referencia distinta)
console.log(mapa.get(objA)); // "Usuario A" ✅ (Misma referencia)
```

### 2. ¿Cuándo deberías elegir un `Map` en lugar de un Objeto literal (`{}`)?

- **Respuesta Senior:**
  1. Cuando las **claves no sean cadenas conocidas de antemano** o necesites que las claves sean objetos / elementos del DOM.
  2. Cuando necesites hacer **inserciones y borrados dinámicos continuos** de claves en tiempo de ejecución (mejor rendimiento).
  3. Cuando necesites conocer el número exacto de elementos de forma frecuente (`.size` es $O(1)$) o mantener un **orden de inserción garantizado**.
