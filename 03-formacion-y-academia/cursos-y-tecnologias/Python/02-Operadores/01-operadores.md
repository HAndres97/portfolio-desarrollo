# 📌 Fundamentos de Python: Operadores

Los **operadores** son símbolos especiales en Python que le indican al intérprete que realice operaciones matemáticas, lógicas o de manipulación de datos sobre uno o más operandos (variables o valores).

---

## 1. Clasificación de Operadores

1. **Aritméticos:** Operaciones matemáticas estándar (suma, resta, multiplicación, exponente...).
2. **Comparación:** Evalúan relaciones entre valores y siempre devuelven un booleano (`True` o `False`).
3. **Asignación (Aritmética Compuesta):** Combinan una operación matemática con la reasignación inmediata de la variable.
4. **Incremento / Decremento:** En Python **no existen** los operadores `++` o `--` (como en C, C++ o JavaScript). Se utiliza la asignación compuesta `+=` y `-=`.
5. **Lógicos:** Combinan expresiones booleanas usando palabras clave reservadas (`and`, `or`, `not`).

---

## 2. Código de Ejemplo Completo

```python
# ==========================================
# 1. OPERADORES ARITMÉTICOS
# ==========================================

a = 10
b = 3

print(a + b)  # Suma -> 13
print(a - b)  # Resta -> 7
print(a * b)  # Multiplicación -> 30
print(a / b)  # División flotante -> 3.3333333333333335 (Siempre devuelve float)
print(a % b)  # Módulo (resto de la división) -> 1 (Útil para saber si un número es par: n % 2 == 0)
print(a**b)  # Potencia (10 elevado a 3) -> 1000
print(9**0.5)  # Potencia con decimales (Raíz cuadrada de 9) -> 3.0
print(a // b)  # División entera (trunca los decimales hacia abajo) -> 3

# Sobrecarga de operadores en Cadenas (Strings)
# Multiplicar un string por un entero lo repite esa cantidad de veces:
print("Hola" * 3)  # Imprime: "HolaHolaHola"


# ==========================================
# 2. OPERADORES DE COMPARACIÓN
# ==========================================

x = 5
y = 10

print(x == y)  # Igualdad -> False
print(x != y)  # Desigualdad -> True
print(x > y)  # Mayor que -> False
print(x < y)  # Menor que -> True
print(x >= 5)  # Mayor o igual que -> True
print(x <= y)  # Menor o igual que -> True

# Comparación de Cadenas de Texto (Lexicográfica / ASCII)
# En Python las cadenas se comparan carácter a carácter según su orden en la tabla ASCII / Unicode:
print("a" > "b")  # Imprime: False (El valor ASCII de 'a' es 97 y el de 'b' es 98)
print("a" == "a")  # Imprime: True
print("Hola" < "hola")  # Imprime: True (Las MAYÚSCULAS tienen valores ASCII menores que las minúsculas)


# ==========================================
# 3. OPERADORES DE ASIGNACIÓN, INCREMENTO Y DECREMENTO
# ==========================================

numero = 10  # Asignación simple

# Incremento y decremento
numero += 5  # Equivalente a: numero = numero + 5 (Resultado: 15)
numero -= 2  # Equivalente a: numero = numero - 2 (Resultado: 13)

# Otros operadores de asignación compuesta
numero *= 2  # Equivalente a: numero = numero * 2 (Resultado: 26)
numero /= 2  # Equivalente a: numero = numero / 2 (Resultado: 13.0)
numero %= 5  # Equivalente a: numero = numero % 5 (Resultado: 3.0)
numero **= 2  # Equivalente a: numero = numero ** 2 (Resultado: 9.0)
numero //= 2  # Equivalente a: numero = numero // 2 (Resultado: 4.0)


# ==========================================
# 4. OPERADORES LÓGICOS
# ==========================================

es_mayor_de_edad = True
tiene_carnet = False

# and: Devuelve True SOLO si AMBAS condiciones son True
print(es_mayor_de_edad and tiene_carnet)  # False

# or: Devuelve True si AL MENOS UNA de las condiciones es True
print(es_mayor_de_edad or tiene_carnet)  # True

# not: Invierte el valor booleano (True -> False, False -> True)
print(not es_mayor_de_edad)  # False


# ==========================================
# 5. PREGUNTAS TÍPICAS DE ENTREVISTA DE TRABAJO
# ==========================================

"""
PREGUNTA 1: ¿Por qué no existen los operadores incrementales ++ o -- en Python?
RESPUESTA:
En Python los enteros (`int`) son objetos inmutables. El operador `++` en otros lenguajes modifica la variable
en memoria directamente. En Python se decidió usar la sintaxis explícita `x += 1` para mantener la filosofía
del Zen de Python: "Lo explícito es mejor que lo implícito". Además, poner `++x` en Python no da un error de sintaxis,
sino que se interpreta como dos operadores unarios positivos seguidos (`+(+x)`).

PREGUNTA 2: ¿Qué diferencia hay entre la división / y la división entera //?
RESPUESTA:
- El operador `/` realiza una división real y SIEMPRE devuelve un número flotante (`float`), incluso si el resultado es exacto (ej. `4 / 2` devuelve `2.0`).
- El operador `//` realiza una división entera truncando el resultado hacia abajo (*floor division*), devolviendo un entero si ambos operandos eran enteros.

PREGUNTA 3: ¿Cómo funciona la evaluación de cortocircuito (Short-Circuit Evaluation) en los operadores lógicos?
RESPUESTA:
Python evalúa las expresiones de izquierda a derecha y se detiene en cuanto conoce el resultado final:
- En una cadena de `and`: Si el primer elemento es `False`, Python NO evalúa el resto porque la expresión completa ya es falsa.
- En una cadena de `or`: Si el primer elemento es `True`, Python NO evalúa el resto porque la expresión completa ya es verdadera.
Esto es crucial para evitar errores como la división por cero: `x != 0 and (10 / x) > 2`.

PREGUNTA 4: ¿Cómo compara Python dos cadenas de texto cuando usamos operadores como `<` o `>`?
RESPUESTA:
Compara las cadenas carácter por carácter (orden lexicográfico) utilizando el valor numérico Unicode/ASCII de cada carácter (mediante la función interna `ord()`).
Por ejemplo, `"A"` (65) es menor que `"a"` (97), por lo que `"A" < "a"` resulta en `True`.
"""
```
