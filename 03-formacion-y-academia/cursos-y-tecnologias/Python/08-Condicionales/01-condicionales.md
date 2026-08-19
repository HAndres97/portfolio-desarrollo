# Apuntes de Python: Estructuras de Control Condicionales

Las **estructuras condicionales** son herramientas fundamentales en programación que permiten alterar el flujo de ejecución de un programa tomando decisiones lógicas. En Python, se implementan mediante las sentencias `if`, `elif` y `else`, evaluando expresiones que resultan en un valor booleano (`True` o `False`).

Python no utiliza llaves `{}` para delimitar los bloques de código como otros lenguajes (C++, Java, JavaScript); en su lugar, se basa estrictamente en la **indentación (sangría de 4 espacios)**.

---

## 1. Funcionamiento y Sintaxis de las Sentencias Condicionales

| Sentencia  | Descripción                                                                                                                                              |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`if`**   | Evalúa una condición inicial. Si es `True`, ejecuta su bloque de código.                                                                                 |
| **`elif`** | Abreviatura de _else if_. Evalúa condiciones adicionales solo si todas las condiciones anteriores resultaron `False`. Puedes encadenar múltiples `elif`. |
| **`else`** | Se ejecuta como caso por defecto cuando **ninguna** de las condiciones previas (`if` / `elif`) resultó ser `True`. Es opcional.                          |

---

## 2. Definición, Anidamiento y Operadores Ternarios

### ⚠️ La Importancia de la Indentación y el Orden de Evaluación

El flujo de evaluación es secuencial: Python evalúa las condiciones de arriba a abajo y **ejecuta únicamente el primer bloque que resulte ser `True**`, ignorando el resto de la cadena condicional.

```python
# Evaluador de calificaciones
nota = 85

# 1. Estructura if / elif / else
if nota >= 90:
    print("Excelente")
elif nota >= 80:
    print("Notable")  # Se ejecuta este bloque y finaliza la evaluación
elif nota >= 70:
    print("Aprobado")
else:
    print("Suspenso")

# 2. Condicionales Anidados
usuario_activo = True
es_admin = False

if usuario_activo:
    if es_admin:
        print("Acceso total al panel de administración")
    else:
        print("Acceso a panel de usuario estándar")
else:
    print("Cuenta desactivada")

# 3. Operador Ternario (Expresión Condicional de una sola línea)
# Sintaxis: valor_si_true if condicion else valor_si_false
estado = "Mayor de edad" if nota >= 18 else "Menor de edad"

```

---

## 3. Código Refactorizado y Modernizado

```python
"""
Demostración avanzada de Estructuras Condicionales y Guard Clauses en Python
"""

from typing import Optional


def procesar_pago(
    monto: float, saldo_disponible: float, tarjeta_valida: bool
) -> str:
    """Procesa una transacción bancaria aplicando cláusulas de guarda (Guard Clauses)."""

    # 1. Cláusulas de Guarda (Retornos tempranos para evitar anidamientos profundos)
    if not tarjeta_valida:
        return "Error: Tarjeta no válida o expirada."

    if monto <= 0:
        return "Error: El monto a pagar debe ser mayor a cero."

    if monto > saldo_disponible:
        return "Error: Saldo insuficiente."

    # 2. Caso de éxito final
    saldo_restante = saldo_disponible - monto
    return f"Pago exitoso. Saldo restante: {saldo_restante:.2f}€"


# Ejecución de prueba
resultado = procesar_pago(
    monto=45.50, saldo_disponible=100.00, tarjeta_valida=True
)
print(f"{resultado=}")

```

---

## 💡 Buenas Prácticas y Consejos para Trabajar como un Profesional

### 1. Aplica "Guard Clauses" (Cláusulas de Guarda) para evitar la "Pirámide del Infierno"

Anidar múltiples niveles de `if` dentro de otros `if` (_Arrow Anti-pattern_ / Pirámide de la Muerte) dificulta la lectura del código. Trata de validar los casos de error al inicio de las funciones y haz un `return` temprano.

```python
# ❌ Mala práctica (Anidamiento innecesario):
def validar_usuario(usuario):
    if usuario is not None:
        if usuario.is_active:
            if usuario.has_permission:
                hacer_algo()


# ✅ Forma profesional con Guard Clauses:
def validar_usuario(usuario):
    if usuario is None or not usuario.is_active or not usuario.has_permission:
        return

    hacer_algo()

```

---

### 2. Aprovecha la Evaluación de Valores "Truthy" y "Falsy"

En Python no necesitas comparar explícitamente variables booleanas con `== True` o verificar si una lista no está vacía con `len(lista) > 0`.

```python
elementos = ["datos"]
es_valido = True

# ❌ Verboso y poco pythonic:
if es_valido == True and len(elementos) > 0:
    print("Hay datos")

# ✅ Forma profesional:
if es_valido and elementos:
    print("Hay datos")

```

---

### 3. Considera la sentencia `match / case` (Python 3.10+) en lugar de largos `elif`

Si estás evaluando una variable contra múltiples valores específicos, utiliza el _Structural Pattern Matching_ (`match / case`) introducido en Python 3.10, equivalente al `switch` de otros lenguajes pero mucho más potente.

```python
codigo_estado = 404

# ✅ Sintaxis moderna con match/case:
match codigo_estado:
    case 200:
        print("OK")
    case 400 | 404:  # Permite evaluar múltiples casos juntos
        print("Error del Cliente")
    case 500:
        print("Error del Servidor")
    case _:  # Caso por defecto (equivalente al else)
        print("Estado desconocido")

```

---

## 💡 Preguntas Típicas de Entrevista Técnica

### 1. ¿Cómo influye el orden de las condiciones en el rendimiento cuando se encadenan sentencias `elif`?

Python evalúa las condiciones en orden secuencial. Colocar las condiciones **más probables o más baratas de procesar computacionalmente** al principio del `if` / `elif` optimiza el rendimiento, ya que Python omitirá la evaluación de todas las ramas subsecuentes en cuanto una condición resulte ser `True`.

---

### 2. ¿Qué ocurre durante la "Evaluación de Cortocircuito" (_Short-Circuit Evaluation_) en expresiones condicionales complejas?

Cuando combinas condiciones con `and` u `or`:

- En un **`and`**: Si la primera condición evalúa a `False`, Python **no evalúa la segunda**, pues el resultado final ya será `False`.
- En un **`or`**: Si la primera condición evalúa a `True`, Python **no evalúa la segunda**, pues el resultado final ya será `True`.

```python
# La función de la derecha NUNCA se ejecuta si la primera es False
if False and funcion_pesada_o_con_error():
    pass

```

---

### 3. ¿Qué diferencia existe entre evaluar `if x:` frente a `if x is not None:`?

- **`if x:`**: Evalúa la verdad booleana (_Truthy/Falsy_). Devuelve `False` si `x` es `None`, `0`, `""` (string vacío), `[]` (lista vacía) o `{}` (diccionario vacío).
- **`if x is not None:`**: Verifica estrictamente la identidad del objeto en memoria contra el _Singleton_ `None`. Si `x = 0` o `x = []`, la condición seguirá siendo `True`.

```python
valor = 0

if valor:  # ❌ Evalúa a False porque 0 es "Falsy"
    print("Tiene valor")

if valor is not None:  # ✅ Evalúa a True porque 0 no es None
    print("Existe y es un número")

```
