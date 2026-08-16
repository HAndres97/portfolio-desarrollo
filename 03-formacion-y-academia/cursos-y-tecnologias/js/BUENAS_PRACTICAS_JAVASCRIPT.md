# 🟨 Guía Profesional de Buenas Prácticas en JavaScript (ES6+)

Una referencia completa y práctica sobre estándares de código, manejo de asincronía, tipado, optimización y arquitectura limpia en JavaScript moderno.

---

## 📌 1. Declaración de Variables: `const` y `let`

> [!WARNING]
> **Olvídate por completo de `var`**. Posee un comportamiento de alcance de función (_function scope_) y elevación (_hoisting_) que produce errores difíciles de depurar.

- **Usa `const` por defecto:** Para todas tus variables y referencias a funciones o módulos. Garantiza que la reasignación de la variable esté bloqueada.
- **Usa `let` únicamente cuando la variable cambie de valor:** Para contadores, acumuladores en bucles o estados que se reasignen explícitamente.

```javascript
// ❌ MAL
var nombre = "Carlos";
var edad = 25;

// ✅ BIEN
const NOMBRE = "Carlos"; // Constante con valor inmutable
let edad = 25; // Cambiará con el tiempo
edad = 26;
```

---

## 🎨 2. Convenciones de Nombres y Estilo de Código

| Elemento                        | Convención                  | Ejemplo                           |
| ------------------------------- | --------------------------- | --------------------------------- |
| **Variables y Funciones**       | `camelCase`                 | `obtenerUsuario()`, `totalSumado` |
| **Clases y Componentes**        | `PascalCase`                | `UsuarioAdmin`, `BotonSubmit`     |
| **Constantes Globales**         | `UPPER_SNAKE_CASE`          | `MAX_REINTENTOS`, `API_URL`       |
| **Variables Privadas (Clases)** | Prefijo `#` (Nativo ES2022) | `#clavePrivada`                   |

---

## 🚀 3. Sintaxis Moderna y "Clean Code" (ES6+)

### A) Desestructuración (_Destructuring_)

Extrae valores de objetos o arrays de forma limpia y directa.

```javascript
const usuario = { id: 1, nombre: "Andrés", rol: "DevOps" };

// ❌ MAL
const nombre = usuario.nombre;
const rol = usuario.rol;

// ✅ BIEN
const { nombre, rol } = usuario;
```

### B) Operador Spread / Rest (`...`)

Usa el operador de propagación para clonar o fusionar objetos y arrays sin mutar los originales.

```javascript
const capacidadesOriginales = ["HTML", "CSS"];
// Crear un nuevo array sin mutar el original
const habilidades = [...capacidadesOriginales, "JavaScript", "Node.js"];

// Clonar y actualizar un objeto de forma inmutable
const usuarioActualizado = {
  ...usuario,
  rol: "Senior Lead",
};
```

### C) Parámetros por Defecto y Plantillas de Texto (_Template Literals_)

```javascript
// ❌ MAL: Concatenación tradicional y validación manual
function saludar(nombre) {
  var usuario = nombre || "Invitado";
  return "Hola, " + usuario + "!";
}

// ✅ BIEN: Parámetros por defecto y Template Strings con comillas invertidas (`)
const saludar = (nombre = "Invitado") => `Hola, ${nombre}!`;
```

### D) Encadenamiento Opcional (`?.`) y Coalescencia Nula (`??`)

Evita errores de `TypeError: Cannot read properties of undefined`.

```javascript
const usuario = {
  perfil: {
    direccion: { ciudad: "Madrid" },
  },
};

// Encadenamiento opcional: Si 'configuracion' o 'tema' no existen, devuelve undefined sin romper el código
const ciudad = usuario?.perfil?.direccion?.ciudad;

// Coalescencia nula (??): Asigna valor por defecto SOLO si es null o undefined (a diferencia de ||)
const puerto = process.env.PORT ?? 3000;
```

---

## ⚡ 4. Manejo Profesional de Asincronía: `async` / `await`

Sustituye el anidamiento de promesas (`.then()`) o _Callback Hell_ por la sintaxis limpia de `async/await` acompañada de bloques `try/catch`.

```javascript
// ❌ MAL: Promesas encadenadas difíciles de leer
function obtenerDatos() {
  fetch("[https://api.ejemplo.com/datos](https://api.ejemplo.com/datos)")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

// ✅ BIEN: Async/Await con manejo explícito de errores
const obtenerDatos = async () => {
  try {
    const respuesta = await fetch(
      "[https://api.ejemplo.com/datos](https://api.ejemplo.com/datos)",
    );

    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error("Fallo al obtener los datos:", error.message);
    throw error; // Re-lanzar si la capa superior necesita manejarlo
  }
};
```

### Ejecución de Asincronía en Paralelo (`Promise.all`)

No uses `await` secuencialmente dentro de un bucle si las peticiones son independientes entre sí:

```javascript
// ❌ LENTO: Espera a que termine la petición 1 para iniciar la 2
const usuario = await obtenerUsuario();
const productos = await obtenerProductos();

// ✅ RÁPIDO: Ejecuta ambas peticiones en paralelo al mismo tiempo
const [usuario, productos] = await Promise.all([
  obtenerUsuario(),
  obtenerProductos(),
]);
```

---

## 🧹 5. Métodos de Arrays Funcionales e Inmutabilidad

Evita bucles `for` tradicionales o métodos que mutan el array original (`push`, `splice`). Prefiere métodos declarativos que devuelven un nuevo array:

- **`map()`:** Transforma cada elemento.
- **`filter()`:** Filtra elementos bajo una condición.
- **`reduce()`:** Acumula o transforma el array en un único valor/objeto.
- **`some()` / `every()`:** Comprobaciones booleanas.

```javascript
const productos = [
  { nombre: "Teclado", precio: 50, activo: true },
  { nombre: "Ratón", precio: 25, activo: false },
  { nombre: "Monitor", precio: 200, activo: true },
];

// Obtener los nombres en mayúsculas de solo los productos activos
const productosActivosMayus = productos
  .filter((producto) => producto.activo)
  .map((producto) => producto.nombre.toUpperCase());

// Calcular el total de precios
const totalPrecio = productos.reduce(
  (acumulado, prod) => acumulado + prod.precio,
  0,
);
```

---

## 🔒 6. Comparaciones Estrictas y Evitación de Tipos Débiles

> [!WARNING]
> Usa **siempre** la comparación estricta `===` y `!==`. Evita la comparación débil `==` que realiza conversión implícita de tipos (_Type Coercion_).

```javascript
// ❌ MAL
0 == "0"; // true (Peligro)
false == ""; // true (Peligro)

// ✅ BIEN
0 === "0"; // false
false === ""; // false
```

---

## 🧩 7. Módulos de JavaScript (ES Modules)

Organiza el código en ficheros pequeños y reutilizables utilizando `export` e `import` nativos.

```javascript
// 📁 mathUtils.js
export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;

// 📁 main.js
import { sumar, restar } from "./mathUtils.js";

console.log(sumar(10, 5));
```

---

## 🛠️ 8. Herramientas de Calidad de Código (Linters)

Para garantizar un estándar profesional uniforme en tus proyectos JavaScript:

1. **ESLint:** Herramienta esencial para analizar código estático y detectar errores en tiempo de desarrollo.
2. **Prettier:** Formateador automático de código que unifica pestañas, comillas (simples o dobles) y puntos y comas.

### Configuración típica (`.prettierrc`):

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

---

## 💡 9. Resumen de Reglas de Oro

> [!TIP]
>
> 1. **Funciones Pequeñas y Flecha (_Arrow Functions_):** Mantenlas cortas con una sola responsabilidad.
> 2. **Evita la Mutación del Estado:** Trabaja de forma inmutable devolviendo nuevas copias de objetos/arrays.
> 3. **Gestión Limpia de Errores:** Valida las entradas e implementa bloques `try/catch` alrededor de operaciones I/O o red.
> 4. **Considera evolucionar a TypeScript:** Para proyectos de gran escala, TypeScript añade un sistema de tipado estático sobre JS que previene el 90% de los errores en tiempo de compilación.
