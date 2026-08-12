# 📌 Fundamentos de Python: Cadenas de Texto (Strings)

Las cadenas de texto (_strings_) en Python son secuencias inmutables de caracteres Unicode. Esto significa que una vez creada una cadena, no se puede modificar su contenido en una posición específica (por ejemplo, `texto[0] = 'a'` lanzará un error), sino que se deben generar nuevas cadenas a partir de operaciones o métodos.

---

## 1. Declaración y Características Principales

Las cadenas se pueden declarar indistintamente con comillas simples (`'`) o dobles (`"`). No existe diferencia sintáctica en Python entre ambas, lo que permite anidar comillas sin escapar caracteres si se combinan correctamente.

---

## 2. Operaciones Básicas con Cadenas

- **Concatenación (`+`):** Une dos o más cadenas.
- **Repetición (`*`):** Multiplica una cadena por un entero repitiendo su contenido.
- **Indexación (`[]`):** Accede a un carácter individual indicando su posición (comenzando en el índice `0` por la izquierda o `-1` empezando por el final).
- **Slicing (`[inicio:fin:paso]`):** Extrae una subcadena especificando un rango de índices.

---

## 3. Código de Ejemplo Completo

```python
# ==========================================
# 1. DECLARACIÓN Y CARACTERES ESPECIALES
# ==========================================

cadena_simple = 'Hola, mundo!'
cadena_doble = "Hola, mundo!"

# Saltos de línea (\n) y tabulaciones (\t)
print("Hola,\nmundo!")  # Imprime con salto de línea
print("Hola,\tmundo!")  # Imprime con tabulación horizontal


# ==========================================
# 2. OPERACIONES BÁSICAS Y SLICING
# ==========================================

print("Hola, " + "mundo!")  # Concatenación -> "Hola, mundo!"
print("Hola, " * 3)  # Repetición -> "Hola, Hola, Hola, "
print("Hola"[0])  # Indexación (primer carácter) -> 'H'
print("Hola"[:3])  # Slicing (desde el inicio hasta el índice 3 exclusivo) -> "Hol"


# ==========================================
# 3. FORMATEO DE CADENAS (F-STRINGS Y MÁS)
# ==========================================

# Método clásico .format()
print("Hola, {}!".format("mundo"))

# f-strings (Estándar moderno, más legible y rápido)
name = "John"
print(f"Hola, {name}!")

# El truco del "=" para depuración (Debugging) dentro de f-strings
edad = 29
print(f"{name=} {edad=}")  # Imprime: name='John' edad=29


# ==========================================
# 4. DESEMPAQUETADO DE CADENAS Y SLICING AVANZADO
# ==========================================

name = "John"
print(name[0])  # 'J'
print(name[-1])  # 'n' (último carácter)

# Desempaquetado directo de caracteres
first, last = name[0], name[-1]
print(first, last)  # J n


# ==========================================
# 5. MÉTODOS MÁS ÚTILES PARA STRINGS
# ==========================================

name = "  John Doe  "

print(name.upper())  # "  JOHN DOE  " (Mayúsculas)
print(name.lower())  # "  john doe  " (Minúsculas)
print(name.strip())  # "John Doe" (Elimina espacios en blanco al inicio y final)
print(name.replace("John", "Jane"))  # "  Jane Doe  " (Reemplaza subcadenas)
print(name.split())  # ['John', 'Doe'] (Divide la cadena en lista usando espacios por defecto)
print(" ".join(["John", "Doe"]))  # "John Doe" (Une elementos de una lista en un string)
print(name.strip().capitalize())  # "John doe" (Primera letra en mayúscula)
print("12345".isnumeric())  # True (Verifica si todos los caracteres son numéricos)
print(name.strip().startswith("Jo"))  # True (Verifica prefijo)
print(name.strip().endswith("Doe"))  # True (Verifica sufijo)


# ==========================================
# 6. PREGUNTAS TÍPICAS DE ENTREVISTA DE TRABAJO
# ==========================================

"""
PREGUNTA 1: ¿Qué significa que las cadenas de texto en Python sean "inmutables"?
RESPUESTA:
Significa que una vez que un objeto string es creado en memoria, su valor no puede ser alterado ni modificado
in-situ. Si intentas modificar un carácter específico de la cadena (ej. `s[0] = 'a'`), Python lanzará un `TypeError`.
Cualquier operación de modificación (como `.replace()` o concatenación) genera y devuelve un objeto de cadena completamente nuevo en memoria.

PREGUNTA 2: ¿Cuál es la diferencia exacta entre los métodos .split() sin argumentos y con un separador explícito?
RESPUESTA:
- Sin argumentos (`s.split()`): Divide la cadena utilizando cualquier secuencia de espacios en blanco como delimitador
  y además **elimina automáticamente los espacios múltiples** o de los extremos.
- Con un separador explícito (`s.split(',')`): Divide estrictamente basándose en el carácter proporcionado,
  pudiendo generar elementos vacíos (`''`) si hay separadores consecutivos.

PREGUNTA 3: ¿Cómo funciona el paso (step) negativo en el slicing de cadenas, por ejemplo, s[::-1]?
RESPUESTA:
El tercer parámetro del slicing indica el paso o dirección. Un paso negativo (`-1`) recorre la cadena
de derecha a izquierda (en orden inverso). Por lo tanto, `s[::-1]` es la forma idiomática y más eficiente en Python
para invertir una cadena de texto completa.

PREGUNTA 4: ¿Qué diferencia de rendimiento existe entre usar f-strings frente a la concatenación tradicional con "+" en bucles?
RESPUESTA:
Las f-strings se evalúan y optimizan a nivel de bytecode durante la compilación interna de Python, siendo considerablemente
más rápidas y eficientes en memoria. Concatenar strings grandes repetidamente dentro de un bucle usando `+` genera múltiples
objetos temporales intermedios debido a la inmutabilidad, degradando drásticamente el rendimiento (*string interning / allocation overhead*).
"""
```
