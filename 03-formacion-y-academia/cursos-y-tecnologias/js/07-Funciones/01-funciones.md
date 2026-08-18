# Apuntes de JavaScript: Funciones, Scope y Programación Funcional

Una **función** es un bloque de código reutilizable diseñado para realizar una tarea específica. Nos permite estructurar el código de forma modular, evitar la repetición (_DRY - Don't Repeat Yourself_) y gestionar ámbitos (_scopes_) aislados.

---

## 1. Declaración de Funciones (_Function Declaration_)

Es la forma tradicional de definir una función utilizando la palabra clave `function`.

```javascript
// Declaración de la función
function saludar() {
  console.log("¡Hola, bienvenido al curso de JS!");
}

// Invocación o llamada
saludar();
```

> 💡 **Efecto Hoisting en Declaraciones:**
> Las funciones declaradas con `function` sufren **Hoisting completo**. Esto significa que el motor de JS las eleva al inicio del archivo durante la fase de compilación, por lo que puedes llamarlas **antes** de la línea donde están escritas en el código.

---

## 2. Parámetros y Argumentos

- **Parámetros:** Son los nombres de las variables locales que se definen en la firma de la función.
- **Argumentos:** Son los valores reales que le pasamos a la función cuando la invocamos.

```javascript
function sumar(a, b) {
  // 'a' y 'b' son Parámetros
  console.log(a + b);
}

sumar(5, 10); // '5' y '10' son Argumentos
```

---

## 3. Parámetros con Valores por Defecto (ES6)

Permiten asignar valores predeterminados a los parámetros en caso de que no se le pasen argumentos al llamar a la función o se envíe `undefined`.

```javascript
function saludarUsuario(nombre = "Invitado", rol = "Lector") {
  console.log(`Hola ${nombre}, tu rol es:${rol}`);
}

saludarUsuario("Ana", "Admin"); // "Hola Ana, tu rol es: Admin"
saludarUsuario(); // "Hola Invitado, tu rol es: Lector"
```

---

## 4. Retorno de Valores (`return`)

La instrucción `return` indica el valor que la función devuelve hacia afuera al finalizar su ejecución. Además, **detiene inmediatamente la ejecución** de la función.

```javascript
function calcularAreaRectangulo(base, altura) {
  if (base <= 0 || altura <= 0) {
    return 0; // Guard clause: Salida temprana si los datos son inválidos
  }

  return base * altura;
}

const area = calcularAreaRectangulo(5, 4);
console.log(area); // 20
```

> ⚠️ Si una función no tiene una sentencia `return` explícita, devolverá **`undefined`** por defecto.

---

## 5. Funciones Anónimas y Expresiones de Función

Una **función anónima** es aquella que no tiene un nombre explícito. Habitualmente se asigna a una variable (**Expresión de Función**).

```javascript
// Expresión de función anónima
const multiplicar = function (a, b) {
  return a * b;
};

console.log(multiplicar(3, 4)); // 12
```

> 💡 **Atención:** A diferencia de las declaraciones de función, las expresiones de función guardadas en `const` o `let` **NO se pueden llamar antes de ser declaradas** (están sujetas a la TDZ).

---

## 6. Funciones Flecha (_Arrow Functions_ - ES6)

Son una sintaxis moderna, concisa y elegante para escribir expresiones de funciones.

```javascript
// Sintaxis estándar
const restar = (a, b) => {
  return a - b;
};

// Retorno Implícito (Si solo tiene 1 línea, podemos omitir llaves y 'return')
const duplicar = (num) => num * 2;

console.log(duplicar(5)); // 10
```

---

## 7. Funciones Anidadas, Scope y Closures (Clausuras)

En JavaScript podemos declarar funciones dentro de otras funciones. Las funciones internas tienen acceso a las variables de su propio ámbito, al ámbito de la función padre y al ámbito global (**Scope Chain**).

```javascript
function crearContador() {
  let contador = 0; // Variable privada en el scope de la función padre

  return function () {
    contador++; // La función hija "recuerda" y modifica la variable del padre
    return contador;
  };
}

const miContador = crearContador();

console.log(miContador()); // 1
console.log(miContador()); // 2
console.log(miContador()); // 3
```

> 🌟 **Concepto Senior (Closure / Clausura):**
> Un **Closure** ocurre cuando una función interna "recuerda" y conserva el acceso al ámbito (_scope_) de la función que la creó, incluso después de que la función externa haya terminado de ejecutarse.

---

## 8. Funciones de Orden Superior (_Higher-Order Functions - HOF_)

Una **Función de Orden Superior** es aquella que cumple al menos una de estas dos condiciones:

1. Recibe una o más funciones como argumentos (_Callbacks_).
2. Devuelve una función como resultado.

```javascript
// HOF que recibe una función callback como argumento
function ejecutarOperacion(a, b, operacionCallback) {
  return operacionCallback(a, b);
}

const suma = (x, y) => x + y;
const producto = (x, y) => x * y;

console.log(ejecutarOperacion(4, 2, suma)); // 6
console.log(ejecutarOperacion(4, 2, producto)); // 8
```

---

## 9. Uso del Método `.forEach()` en Arrays

`.forEach()` es una Función de Orden Superior nativa de los Arrays. Ejecuta una función _callback_ por cada elemento de la colección.

```javascript
const lenguajes = ["JavaScript", "Python", "TypeScript"];

// Recibe un callback con los parámetros: (elemento, indice, arrayCompleto)
lenguajes.forEach((lenguaje, index) => {
  console.log(`${index + 1}.${lenguaje}`);
});
```

> ⚠️ **Recordatorio:** `.forEach()` **no devuelve nada** (`undefined`) y no se puede interrumpir con `break` ni `continue`. Úsalo solo para ejecutar efectos secundarios (como mostrar cosas en pantalla o registrar datos).

---

## 💡 Preguntas Típicas de Entrevista Técnica

### 1. ¿Cuál es la diferencia principal entre una Función Tradicional y una Arrow Function respecto al contexto `this`?

- **Respuesta Senior:**
  - Las **funciones tradicionales** tienen su propio enlace dinámico de `this`, cuyo valor depende de _cómo_ o _quién_ invoque la función.
  - Las **Arrow Functions** NO tienen su propio contexto `this`, sino que lo heredan de forma léxica del ámbito superior donde fueron definidas (**Lexical `this`**). Tampoco tienen el objeto especial `arguments` ni pueden usarse como constructores con `new`.

```javascript
const usuario = {
  nombre: "Carlos",
  // Función tradicional: 'this' apunta al objeto 'usuario'
  saludarTradicional: function () {
    console.log(`Hola, soy ${this.nombre}`);
  },
  // Arrow function: 'this' hereda del scope global (Window/Undefined)
  saludarArrow: () => {
    console.log(`Hola, soy ${this.nombre}`);
  },
};

usuario.saludarTradicional(); // "Hola, soy Carlos"
usuario.saludarArrow(); // "Hola, soy undefined"
```

### 2. ¿Qué es un Closure y para qué se utiliza en aplicaciones reales?

- **Respuesta Senior:** Un **Closure** es la combinación de una función y el entorno léxico en el que fue declarada. Se utiliza en el mundo real para:
  1. **Encapsulamiento y privacidad de datos:** Crear variables "privadas" a las que no se pueda acceder ni modificar directamente desde fuera.
  2. **Fábricas de funciones (_Factory Functions_):** Crear funciones configurables con un estado inicial.
  3. **Patrón Módulo en JS.**
