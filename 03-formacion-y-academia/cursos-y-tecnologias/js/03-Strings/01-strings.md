# Apuntes de JavaScript: Cadenas de Texto (Strings)

Los **Strings** (o cadenas de texto) son secuencias de caracteres utilizadas para representar texto.

---

## 1. Propiedades y Acceso Básico

### Longitud (`.length`)

Devuelve la cantidad total de caracteres (incluyendo espacios).

```javascript
const nombre = "Juan";
console.log(nombre.length); // 4
```

### Acceso a Caracteres

Se accede a cada posición usando corchetes `[]` e índices basados en cero (`0`).

```javascript
const nombre = "Juan";
console.log(nombre[0]); // "J"
```

---

## 2. Concatenación y Template Literals

### Concatenación Tradicional (`+`)

Suma cadenas usando el operador de adición.

```javascript
const nombre = "Juan";
const apellido = "Pérez";
const nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto); // "Juan Pérez"
```

### Template Literals (Recomendado en ES6+)

Utiliza comillas invertidas (`` ` ``) e interpolación con `${variable}`. Es la forma estándar y más limpia.

```javascript
const nombre = "Juan";
const apellido = "Pérez";

// Interpolación directa de variables y expresiones
const saludo = `Mi nombre es ${nombre}${apellido}`;
console.log(saludo); // "Mi nombre es Juan Pérez"
```

---

## 3. Métodos Comunes de Strings

> **Nota importante:** En JavaScript, los Strings son **inmutables**. Ningún método modifica la cadena original; siempre devuelven una nueva cadena.

| Método           | Descripción                             | Ejemplo de Entrada     | Resultado                    |
| :--------------- | :-------------------------------------- | :--------------------- | :--------------------------- |
| `.toUpperCase()` | Convierte todo a mayúsculas             | `"Juan".toUpperCase()` | `"JUAN"`                     |
| `.toLowerCase()` | Convierte todo a minúsculas             | `"Juan".toLowerCase()` | `"juan"`                     |
| `.trim()`        | Elimina espacios al inicio y final      | `"  Juan  ".trim()`    | `"Juan"`                     |
| `.includes(sub)` | Comprueba si contiene una subcadena     | `"Juan".includes("u")` | `true`                       |
| `.indexOf(sub)`  | Devuelve el primer índice donde aparece | `"Juan".indexOf("u")`  | `1` _(Ojo: en JS es base 0)_ |

### Métodos para Transformar o Extraer

#### `.replace(patron, reemplazo)`

Reemplaza la primera coincidencia encontrada.

```javascript
const nombre = "Juan";
const modificado = nombre.replace("Juan", "Pedro");
console.log(modificado); // "Pedro"
```

#### `.split(separador)`

Divide el string en un **Array** según el delimitador indicado.

```javascript
const texto = "Juan,Pérez";
const arrayNombres = texto.split(",");
console.log(arrayNombres); // ["Juan", "Pérez"]
```

#### `.slice(inicio, fin)`

Extrae una sección desde el índice `inicio` hasta `fin` (sin incluir `fin`).

```javascript
const nombre = "Juan";
const recortado = nombre.slice(0, 3);
console.log(recortado); // "Jua"
```

#### `.concat(...strings)`

Concatena una o más cadenas (menos común que usar Template Literals).

```javascript
const nombre = "Juan";
const apellido = "Pérez";
const completo = nombre.concat(" ", apellido);
console.log(completo); // "Juan Pérez"
```
