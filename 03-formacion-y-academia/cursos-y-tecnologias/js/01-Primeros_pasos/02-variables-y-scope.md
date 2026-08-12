# Apuntes de JavaScript: Variables, Ámbitos y Hoisting

Las **variables** son contenedores con nombre que nos permiten almacenar, recuperar y manipular datos en memoria durante la ejecución de un programa.

---

## 1. Cuadro Comparativo de Declaraciones

| Característica        | `var`                                   | `let`                                   | `const`                                 |
| :-------------------- | :-------------------------------------- | :-------------------------------------- | :-------------------------------------- |
| **Ámbito (_Scope_)**  | Función / Global                        | Bloque (`{ ... }`)                      | Bloque (`{ ... }`)                      |
| **Reasignación**      | Sí                                      | Sí                                      | **No** (Valor inmutable de referencia)  |
| **Redeclaración**     | Sí (Genera bugs silenciosos)            | No                                      | No                                      |
| **Hoisting**          | Elevada e inicializada como `undefined` | Elevada en la **TDZ** (sin inicializar) | Elevada en la **TDZ** (sin inicializar) |
| **Uso en producción** | ❌ **Completamente en desuso**          | ✅ Para valores que cambian             | ✅ **Opción por defecto siempre**       |

---

## 2. El Matiz Técnico Clave: Hoisting y la Temporal Dead Zone (TDZ)

A diferencia de lo que se suele pensar, **`let` y `const` SÍ sufren Hoisting** (el motor de JS las eleva al inicio de su bloque durante la fase de compilación). La diferencia real con `var` está en cómo se **inicializan**:

### A. El Hoisting de `var`

Cuando declaras una variable con `var`, JS la eleva al inicio de la función y la inicializa inmediatamente con `undefined`.

```javascript
console.log(edadVar); // Output: undefined (¡No da error, pero vale undefined!)
var edadVar = 30;
```

### B. El Hoisting de `let` y `const` (TDZ)

JS reconoce la existencia de la variable al inicio del bloque, pero la coloca en la **Zona Muerta Temporal (TDZ)**. Si intentas acceder a ella antes de su línea de declaración, el programa lanza un error explícito (`ReferenceError`) en lugar de devolver `undefined`.

```javascript
console.log(edadLet); // ❌ ReferenceError: Cannot access 'edadLet' before initialization
let edadLet = 30;
```

> 💡 **Beneficio Senior:** La TDZ es excelente porque detecta errores de lectura temprana antes de que el programa siga ejecutándose con datos `undefined` corruptos.

---

## 3. `const` y la Mutabilidad de Objetos / Arrays

Declarar una variable con `const` **NO significa que el valor sea inmutable**, sino que **la referencia en memoria no se puede reasignar**.

```javascript
// 1. Con primitivos (String, Number, Boolean) -> Inmutable
const edad = 30;
// edad = 31; // ❌ TypeError: Assignment to constant variable.

// 2. Con Objetos o Arrays -> EL CONTENIDO SÍ PUEDE MUTAR
const usuario = { nombre: "Juan", edad: 30 };

// ✅ PERMITIDO: Modificar o añadir propiedades internas
usuario.edad = 31;
usuario.ciudad = "Madrid";

console.log(usuario); // { nombre: "Juan", edad: 31, ciudad: "Madrid" }

// ❌ NO PERMITIDO: Reasignar el objeto completo (cambiar la referencia)
// usuario = { nombre: "Pedro" }; // TypeError
```

---

## 4. Ámbito de Bloque (_Block Scope_)

Un **bloque** en JS es cualquier código delimitado por llaves `{ ... }` (bloques `if`, `for`, `while` o simples bloques de código).

```javascript
if (true) {
  var variableVar = "Soy accesible fuera";
  let variableLet = "Solo existo aquí dentro";
}

console.log(variableVar); // "Soy accesible fuera" (var ignora el bloque)
// console.log(variableLet); // ❌ ReferenceError: variableLet is not defined
```

---

## 5. Ejemplo de Código Refactorizado a Nivel Profesional

```javascript
/**
 * Uso de variables con estándares modernos (ES6+)
 */

// 1. Usamos const por defecto para valores que no reasignamos
const nombre = "Juan";
const apellido = "Pérez";

// 2. Usamos let si el valor va a cambiar con el tiempo
let edad = 30;
edad = 31; // Cumpleaños

// 3. Template Literals en lugar de concatenación con '+'
const presentacion = `Mi nombre es ${nombre} ${apellido} y tengo${edad} años.`;

console.log(presentacion);
```
