# Apuntes de JavaScript: Condicionales y Toma de Decisiones

Las **estructuras condicionales** permiten alterar el flujo de ejecución de un programa ejecutando diferentes bloques de código según se cumplan o no determinadas condiciones (evaluaciones booleanas).

---

## 1. Estructura `if / else if / else`

Es la forma fundamental de toma de decisiones en programación.

```javascript
const edad = 18;

if (edad >= 18) {
  console.log("Acceso permitido: Usuario mayor de edad");
} else if (edad >= 16) {
  console.log("Acceso restringido: Requiere autorización tutelada");
} else {
  console.log("Acceso denegado: Usuario menor de edad");
}
```

> 💡 **Regla de Legibilidad (Guard Clauses / Salida Temprana):**
> En funciones profesionales, evita anidar muchos `if/else`. Evalúa las condiciones de fallo/salida primero para mantener la función plana.
>
> ```javascript
> // ❌ Anidamiento innecesario
> function procesarUsuario(usuario) {
>   if (usuario) {
>     if (usuario.esActivo) {
>       // Lógica principal...
>     }
>   }
> }
>
> // ✅ Salida temprana (Guard Clauses)
> function procesarUsuario(usuario) {
>   if (!usuario || !usuario.esActivo) return;
>
>   // Lógica principal a nivel raíz
> }
> ```

---

## 2. Operador Ternario (`condicion ? expr1 : expr2`)

Es una forma reducida de escribir una evaluación `if/else` en una sola línea. **Se utiliza cuando necesitas evaluar y retornar un valor.**

```javascript
const puntuacion = 85;

// Retorna un string según la condición y lo guarda en la constante
const resultado = puntuacion >= 50 ? "Aprobado" : "Suspenso";
console.log(resultado); // "Aprobado"
```

> ⚠️ **Mala Práctica a Evitar:**
> No encadenes múltiples ternarios (ternarios anidados). Hacen que el código sea ilegible y difícil de mantener.
>
> ```javascript
> // ❌ Ilegible y peligroso
> const nota = calificacion > 90 ? "A" : calificacion > 80 ? "B" : "C";
> ```

---

## 3. Estructura `switch`

Permite evaluar una variable o expresión contra múltiples casos posibles (`case`). Es ideal cuando tienes una sola variable con varios valores discretos bien definidos.

```javascript
const rolUsuario = "EDITOR";

switch (rolUsuario) {
  case "ADMIN":
    console.log("Acceso total al sistema");
    break; // 👈 CRUCIAL: Detiene la ejecución para no saltar al siguiente caso
  case "EDITOR":
    console.log("Acceso de modificación de contenido");
    break;
  case "LECTOR":
    console.log("Acceso de solo lectura");
    break;
  default: // Se ejecuta si no coincide con ningún 'case'
    console.log("Rol no reconocido en la plataforma");
}
```

> ⚠️ **El Peligro del `break` Olvidado:**
> Si olvidas poner el `break`, la ejecución continuará hacia el siguiente `case` sin importar si la condición coincide o no (comportamiento conocido como _Fall-through_).

---

## 4. Patrón Avanzado Senior: Diccionario de Handlers (Objeto Literal)

En código profesional moderno, cuando un `switch` empieza a crecer con muchos casos, se suele sustituir por un **Objeto Literal** o **Lookup Table**. Es más limpio, fácil de testear y modular.

```javascript
// Definición de acciones/roles mediante un objeto
const rolesPermisos = {
  ADMIN: "Acceso total al sistema",
  EDITOR: "Acceso de modificación de contenido",
  LECTOR: "Acceso de solo lectura",
};

const rol = "EDITOR";

// Acceso directo por clave con valor por defecto mediante el operador '??'
const mensaje = rolesPermisos[rol] ?? "Rol no reconocido en la plataforma";

console.log(mensaje); // "Acceso de modificación de contenido"
```

---

## 💡 Pregunta Típica de Entrevista Técnica

### ¿Cuándo debo utilizar `switch` en lugar de un `if / else if` y qué ventajas tiene en rendimiento?

- **Uso:** Se utiliza `switch` cuando se evalúa **una única variable** contra múltiples valores exactos y discretos (strings, números). Se prefiere `if / else if` cuando se evalúan **rangos de valores** (ej: `edad > 18 && edad < 65`), condiciones lógicas complejas (`&&`, `||`) o diferentes variables a la vez.
- **Rendimiento:** En términos de rendimiento puro, para pocos casos la diferencia es insignificante. Sin embargo, cuando hay muchísimas opciones (decenas de casos), algunos motores de JS pueden optimizar un `switch` o una búsqueda en un Objeto mediante tablas Hash (O(1)), mientras que un `if / else if` evaluará secuencialmente condición por condición de arriba a abajo (O(n)).
