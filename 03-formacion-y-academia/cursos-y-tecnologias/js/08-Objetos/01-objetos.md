# Apuntes de JavaScript: Objetos Literales y Programación Orientada a Objetos

En JavaScript, un **Objeto** es una colección de propiedades de tipo par **clave-valor**. Las claves son cadenas o símbolos (_Strings_ / _Symbols_), mientras que los valores pueden ser primitivos, otros objetos o funciones (denominadas **métodos**).

---

## 1. Sintaxis Básica de Objetos Literales

La forma más directa y estándar de crear un objeto es mediante la **sintaxis literal** usando llaves `{}`.

```javascript
const usuario = {
  nombre: "Christian",
  edad: 29,
  esDesarrollador: true,
  tecnologias: ["JavaScript", "Python"],
};
```

---

## 2. Acceso, Modificación y Eliminación de Propiedades

### A. Acceso a Propiedades

- **Notación por punto (`.`):** Es la más común y legible.
- **Notación por corchetes (`[]`):** Es obligatoria cuando el nombre de la clave está en una variable dinámica o contiene caracteres especiales/espacios.

```javascript
console.log(usuario.nombre); // "Christian"

// Acceso dinámico por corchetes
const claveABuscar = "edad";
console.log(usuario[claveABuscar]); // 29
```

### B. Modificación y Adición

Si la clave ya existe, actualiza su valor; si no existe, la crea dinámicamente.

```javascript
usuario.edad = 30; // Modificación
usuario.ciudad = "Madrid"; // Adición de nueva propiedad
```

### C. Eliminación (`delete`)

Se utiliza la palabra clave `delete` para eliminar por completo una clave y su valor.

```javascript
delete usuario.esDesarrollador;
console.log(usuario.esDesarrollador); // undefined
```

---

## 3. Métodos en Objetos y Uso de `this`

Un **método** es una función que pertenece a un objeto y le permite realizar acciones utilizando sus propios datos mediante la palabra clave **`this`**.

```javascript
const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  velocidad: 0,

  // Método del objeto (Sintaxis concisa ES6)
  acelerar(incremento) {
    this.velocidad += incremento; // 'this' referencia al propio objeto 'coche'
    console.log(`Velocidad actual: ${this.velocidad} km/h`);
  },
};

coche.acelerar(50); // "Velocidad actual: 50 km/h"
```

---

## 4. Objetos Anidados

Un objeto puede contener otros objetos como propiedades, permitiendo estructurar información compleja.

```javascript
const cliente = {
  id: "USR-101",
  perfil: {
    nombre: "Ana",
    contacto: {
      email: "ana@email.com",
      telefono: "600000000",
    },
  },
};

// Acceso directo a propiedades anidadas
console.log(cliente.perfil.contacto.email); // "ana@email.com"

// 🌟 Tip de Seguridad (Optional Chaining '?.' - ES2020):
// Evita errores fatales si una propiedad intermedia es null o undefined
console.log(cliente.perfil?.direccion?.calle); // undefined (en lugar de dar un error de lectura)
```

---

## 5. Comparación e Igualdad de Objetos

Dos objetos en JavaScript **NUNCA son iguales mediante `===` o `==`**, a menos que apunten a la **misma referencia física en memoria**.

```javascript
const objA = { x: 1 };
const objB = { x: 1 };
const objC = objA; // Copia la REFERENCIA en memoria

console.log(objA === objB); // false ❌ (Son objetos distintos en memoria Heap)
console.log(objA === objC); // true  ✅ (Apuntan al mismo espacio en memoria)
```

> 🛠️ **Cómo realizar una comparación profunda (_Deep Equality_):**
> Para comparar si dos objetos tienen las mismas claves y valores internos, se debe recorrer recursivamente sus propiedades o utilizar librerías especializadas (como `lodash.isEqual`).

---

## 6. Iteración sobre Objetos

Existen varias formas de recorrer un objeto:

### A. Bucle `for...in`

Recorre todas las claves enumerables de un objeto.

```javascript
const producto = { nombre: "Teclado", precio: 50, stock: 10 };

for (const clave in producto) {
  console.log(`${clave}:${producto[clave]}`);
}
```

### B. Métodos Estáticos de `Object` (Recomendado en JS Moderno)

```javascript
// Object.keys() -> Devuelve un Array con los NOMBRES de las claves
console.log(Object.keys(producto)); // ["nombre", "precio", "stock"]

// Object.values() -> Devuelve un Array con los VALORES
console.log(Object.values(producto)); // ["Teclado", 50, 10]

// Object.entries() -> Devuelve un Array de pares [clave, valor]
console.log(Object.entries(producto));
// [ ["nombre", "Teclado"], ["precio", 50], ["stock", 10] ]
```

---

## 7. Funciones Constructoras y Fábrica de Instancias

Antes de la llegada de las Clases (`class`) en ES6, se utilizaban **Funciones Constructoras** combinadas con el operador `new` para instanciar múltiples objetos similares.

```javascript
// Función Constructora (Por convención, el nombre empieza en Mayúscula)
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre}`);
  };
}

// Creación de instancias individuales
const persona1 = new Persona("Laura", 25);
const persona2 = new Persona("Pablo", 32);

persona1.saludar(); // "Hola, me llamo Laura"
```

---

## 💡 Preguntas Típicas de Entrevista Técnica

### 1. ¿Cómo clonar o copiar un Objeto sin mantener la referencia original?

- **Respuesta Senior:**
  - **Copia Superficial (_Shallow Copy_):** Usa el **Operador Spread (`...`)** o `Object.assign()`. Copia el primer nivel de propiedades, pero los objetos anidados seguirán compartiendo referencia.
  - **Copia Profunda (_Deep Copy_):** Usa el método nativo moderno **`structuredClone(objeto)`** (ES2022).

```javascript
const original = { a: 1, b: { c: 2 } };

// Copia Superficial (Spread operator)
const copiaSuperficial = { ...original };

// Copia Profunda (Estructura completamente nueva en memoria)
const copiaProfunda = structuredClone(original);
```

### 2. ¿Qué ocurre si intentas modificar una propiedad de un objeto declarado con `const`?

- **Respuesta Senior:** La variable `const` bloquea la **reasignación de la referencia en memoria**, pero **no congela el contenido** del objeto. Por tanto, puedes modificar, añadir o borrar sus propiedades sin problema. Si deseas que un objeto sea completamente inmutable, debes usar **`Object.freeze(objeto)`**.

```javascript
const config = { modo: "oscuro" };

config.modo = "claro"; // ✅ PERMITIDO

// Congelar el objeto para evitar cambios futuros
Object.freeze(config);
config.modo = "alto-contraste"; // ❌ Ignorado en modo normal, lanza TypeError en strict mode
```
