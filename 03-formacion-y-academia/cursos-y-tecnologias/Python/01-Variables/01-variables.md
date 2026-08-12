# 📌 Fundamentos de Python: Variables y Tipado

Las **variables** son contenedores para almacenar datos en memoria. En Python, una variable se crea en el momento en que le asignas un valor por primera vez mediante el operador `=`.

---

## 1. Características Principales de Python

- **Tipado Dinámico:** No necesitas declarar el tipo de variable. Python infiere automáticamente el tipo de dato en tiempo de ejecución.
- **Tipado Fuerte:** Python no realiza conversiones de tipo implícitas e incompatibles. Por ejemplo, intentar sumar una cadena y un número (`"Texto" + 5`) lanzará un `TypeError`.
- **Todo es un objeto:** En Python, las variables no almacenan los valores directamente; almacenan **referencias a objetos** en memoria.

---

## 2. Convenciones de Nomenclatura (PEP 8)

Según la guía de estilo oficial de Python (**PEP 8**):

- **Variables y funciones:** Usar minúsculas y separar palabras con guión bajo (`snake_case`). Ejemplo: `mi_variable`.
- **Constantes:** Usar mayúsculas completas (`SNAKE_CASE`).
- **Nombres descriptivos:** Evitar nombres de una sola letra salvo en contadores de bucles (`i`, `j`).

---

## 3. Código de Ejemplo Completo

```python
# ==========================================
# 1. TIPOS DE DATOS BÁSICOS
# ==========================================

my_int_variable = 10  # Variable de tipo entero (int)
print(my_int_variable)  # Imprime: 10

my_float_variable = 3.14  # Variable de tipo flotante (float)
print(my_float_variable)  # Imprime: 3.14

my_string_variable = "Hola, mundo!"  # Variable de tipo cadena de texto (str)
print(my_string_variable)  # Imprime: Hola, mundo!

my_boolean_variable = True  # Variable de tipo booleano (bool)
print(my_boolean_variable)  # Imprime: True


# ==========================================
# 2. CONVERSIÓN DE TIPOS (CASTING)
# ==========================================

# Pasar un número entero a string
my_int_to_str_variable = str(my_int_variable)
print(my_int_to_str_variable)  # Imprime: "10"
print(type(my_int_to_str_variable))  # Imprime: <class 'str'>

# Pasar un string a número entero
my_string_number_variable = "42"
my_str_to_int_variable = int(my_string_number_variable)
print(my_str_to_int_variable)  # Imprime: 42
print(type(my_str_to_int_variable))  # Imprime: <class 'int'>


# ==========================================
# 3. SALIDA DE DATOS Y CONCATENACIÓN
# ==========================================

# Concatenación tradicional con "+" (requiere convertir enteros a string implícita/explícitamente)
print("El valor de la variable entera es: " + str(my_int_variable))

# Concatenación múltiple tradicional
print(
    "El valor de la variable entera es: "
    + str(my_int_variable)
    + " y el valor de la variable flotante es: "
    + str(my_float_variable)
)

# Concatenación con f-strings (RECOMENDADO: Estándar moderno en Python 3.6+)
print(
    f"El valor de la variable entera es: {my_int_variable} y el valor de la variable flotante es: {my_float_variable}"
)

# Concatenación con el método .format()
print(
    "El valor de la variable entera es: {} y el valor de la variable flotante es: {}".format(
        my_int_variable, my_float_variable
    )
)

# Impresión con comas (inserta espacios automáticamente entre argumentos)
print(
    "Variable string:",
    my_string_variable,
    "Variable int:",
    my_int_variable,
    "Variable float:",
    my_float_variable,
    "Variable boolean:",
    my_boolean_variable,
)


# ==========================================
# 4. FUNCIONES BÁSICAS DE ENTRADA Y MEDIDA
# ==========================================

# len(): Devuelve la cantidad de caracteres de una cadena
print(len(my_string_variable))  # Imprime: 13

# input(): Interactúa con el usuario desde la terminal (SIEMPRE devuelve un str)
name = input("Ingrese su nombre: ")
print("Hola,", name)


# ==========================================
# 5. ANOTACIONES DE TIPO (TYPE HINTING)
# ==========================================

# Ayuda a documentar el código y permite a los linters/IDEs detectar errores
address: str = "Calle Falsa 123"

# En ejecución, Python sigue siendo dinámico y permite reasignar otros tipos:
address = 123
print(type(address))  # Imprime: <class 'int'>


# ==========================================
# 6. PREGUNTAS TÍPICAS DE ENTREVISTA DE TRABAJO
# ==========================================

"""
PREGUNTA 1: ¿Qué significa que Python sea un lenguaje de tipado dinámico y fuertemente tipado?
RESPUESTA:
- Dinámico: Significa que el tipo de una variable se determina en tiempo de ejecución y no requiere
  declarar el tipo explícitamente al crearla.
- Fuertemente tipado: Significa que Python no realiza conversiones de tipo automáticas o implícitas
  si la operación no es válida (por ejemplo, realizar `"3" + 4` lanzará un TypeError).

PREGUNTA 2: ¿Las anotaciones de tipo (Type Hints) impiden que reasignes un valor de otro tipo a una variable?
RESPUESTA:
No. Los Type Hints (`variable: str = "texto"`) son únicamente informativos para el programador
y para herramientas de análisis estático (como Mypy, VS Code o PyCharm). En tiempo de ejecución,
Python ignora los Type Hints y permite reasignar cualquier tipo.

PREGUNTA 3: ¿Qué diferencia hay entre concatenar con "+", usar comas en print() y usar f-strings?
RESPUESTA:
- Con `+`: Exige convertir manualmente los números a `str` mediante `str()` para evitar errores.
- Con comas `,`: `print()` convierte los datos automáticamente y añade un espacio separador por defecto.
- Con `f-strings`: Evalúa las variables directamente dentro de la cadena `{}`. Es más limpio, legible
  y ofrece el mejor rendimiento en ejecución a nivel de bytecode.

PREGUNTA 4: Si ejecutas `a = 10` y luego `b = a`, ¿qué ocurre exactamente en la memoria?
RESPUESTA:
En Python todo es un objeto. Al hacer `a = 10`, se crea el objeto entero `10` en memoria y `a`
almacena una referencia (puntero) a ese objeto. Al hacer `b = a`, la variable `b` pasa a almacenar
exactamente la misma referencia hacia el objeto `10` en memoria.
"""
```
