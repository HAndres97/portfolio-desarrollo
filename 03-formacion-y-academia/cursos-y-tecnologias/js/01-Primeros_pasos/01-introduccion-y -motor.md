# Apuntes de JavaScript: Introducción y Diferencias con Java

**JavaScript (JS)** es un lenguaje de programación interpretado, de alto nivel, dinámico y multiparadigma. Es el motor fundamental de la Web moderna.

> 💡 **Dato Histórico:** Fue creado por Brendan Eich en 1995 en tan solo 10 días para Netscape Navigator. El nombre "JavaScript" fue una estrategia de marketing para aprovechar la popularidad de Java en aquel momento, pero **no comparten diseño ni arquitectura**.

---

## 1. Cuadro Comparativo: Java vs. JavaScript

| Característica   | Java                                                                                            | JavaScript                                                                                                  |
| :--------------- | :---------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- |
| **Paradigma**    | Orientado a Objetos basado en **Clases** estricto.                                              | Multiparadigma: **Orientado a Objetos basado en Prototipos**, Funcional e Imperativo.                       |
| **Ejecución**    | Compilado a _Bytecode_ y ejecutado en la Máquina Virtual de Java (**JVM**).                     | Interpretado / Compilado _Just-In-Time_ (JIT) en el **Navegador** o entornos como **Node.js / Deno / Bun**. |
| **Tipado**       | **Estático y Fuerte** (las variables requieren declarar su tipo explícitamente en compilación). | **Dinámico y Débil** (las variables adquieren el tipo del valor asignado en tiempo de ejecución).           |
| **Sintaxis**     | Rígida, verbosa y estructurada.                                                                 | Flexible y concisa.                                                                                         |
| **Casos de Uso** | Backend masivo, Android, aplicaciones empresariales, sistemas embebidos.                        | Desarrollo Web (Frontend y Backend), Apps Móviles (React Native), Desktop (Electron).                       |

---

## 2. Corrección Importante sobre POO en JavaScript

En tu apunte original mencionabas que _"ambos soportan la programación basada en clases"_.

Es clave entender esto a nivel senior:

- En **Java**, las clases son moldes reales e inflexibles.
- En **JavaScript**, la POO se basa en **Prototipos**. Cuando en JS moderno (ES6+) escribes la palabra clave `class`, es simplemente **azúcar sintáctico** (_Syntactic Sugar_). Por debajo, el motor de JS sigue usando herencia prototípica.

```javascript
// En JS escribimos "class", pero por debajo sigue siendo un objeto prototípico
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
}
```

---

## 3. ¿Cómo ejecuta el código el Motor V8? (V8 Engine)

El **V8** es el motor de código abierto creado por Google (escrito en C++) que impulsa a **Google Chrome**, **Brave**, **Edge** y al entorno de servidor **Node.js**.

### Proceso de Ejecución de V8:

1. **Parsing:** Toma el código JS plano y lo convierte en un Árbol de Sintaxis Abstracta (**AST** - _Abstract Syntax Tree_).
2. **Ignition (Intérprete):** Convierte el AST en _Bytecode_ para empezar a ejecutar el programa rápidamente sin esperar a compilarlo todo.
3. **TurboFan (Compilador JIT):** Mientras el programa corre, analiza qué funciones se repiten mucho (_Hot Code_) y las compila a **código máquina optimizado** para que vayan a velocidad de rayo.

```
Código JS  --->  AST  --->  Bytecode (Ignition)  --->  Código Máquina (TurboFan)
```

---

## 4. Primer Código en JavaScript

```javascript
/**
 * Envía un mensaje estándar a la consola del entorno de ejecución.
 * Útil para depuración rápida durante el desarrollo.
 */
console.log("Hola, Mundo");
```

> ⚠️ **Práctica Profesional:** Aunque `console.log()` es excelente para estudiar y depurar, en aplicaciones reales de producción debe limpiarse o sustituirse por un sistema de _logging_ avanzado (como Pino o Winston) para no saturar la memoria ni exponer datos sensibles.
