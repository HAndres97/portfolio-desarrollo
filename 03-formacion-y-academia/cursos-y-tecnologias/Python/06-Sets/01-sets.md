# Apuntes de Python: Conjuntos (Sets) y Operaciones de Teoría de Conjuntos

En Python, los **conjuntos** (`set`) son colecciones **no ordenadas, mutables y de elementos únicos e inmutables** (_hashables_). Se basan en el concepto matemático de conjuntos y están implementados internamente mediante **tablas Hash**, lo que permite realizar operaciones de búsqueda, inserción y eliminación con una eficiencia extrema.

---

## 1. Características Principales de los Sets

| Propiedad                     | Descripción                                                                    | Ejemplo                                            |
| ----------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------- |
| **Elementos Únicos**          | Elimina automáticamente cualquier elemento duplicado.                          | `set([1, 1, 2])` pasa a ser `{1, 2}`.              |
| **No Ordenados**              | Los elementos no mantienen un orden ni posición fija (no soportan indexación). | `conjunto[0]` lanza un `TypeError`.                |
| **Búsqueda $\mathcal{O}(1)$** | Comprobar la existencia de un elemento (`x in s`) es casi instantáneo.         | Ideal para filtrados masivos.                      |
| **Elementos Hashables**       | Los elementos internos deben ser inmutables (números, strings, tuplas).        | Un `set` no puede contener listas ni diccionarios. |

---

## 2. Definición, Inicialización y la Trampa del Set Vacío

### ⚠️ La Trampa del Set Vacío

Para declarar un conjunto con elementos se utilizan llaves `{}`. Sin embargo, para declarar un **set vacío**, es obligatorio usar el constructor `set()`. Si utilizas `{}` sin elementos, Python creará un **diccionario vacío** (`dict`).

```python
# ❌ Esto NO es un set vacío, es un diccionario (dict)
falso_set = {}
print(type(falso_set))  # <class 'dict'>

# ✅ Forma correcta de definir un set vacío:
set_correcto = set()
print(type(set_correcto))  # <class 'set'>

# Declaración con literales (elimina duplicados automáticamente)
frutas = {"manzana", "banana", "manzana", "cereza"}
print(frutas)  # {'manzana', 'banana', 'cereza'} (Orden no garantizado)

```

---

## 3. Modificación, Búsqueda y Métodos de Eliminación

Dado que los conjuntos no tienen índices, la inserción y eliminación se realizan directamente por valor.

### 🛠️ Diferencia clave entre `.remove()` y `.discard()`

```python
lenguajes = {"Python", "JavaScript", "C++"}

# INSERCIÓN Y BÚSQUEDA
lenguajes.add("TypeScript")  # Inserción de un solo elemento
lenguajes.update(["Go", "Rust"])  # Inserción múltiple desde un iterable

# Búsqueda en O(1)
print("Python" in lenguajes)  # True

# ELIMINACIÓN
# 1. .remove(): Elimina el valor, pero lanza KeyError si el elemento NO existe
lenguajes.remove("C++")
# lenguajes.remove("Java")  # ❌ KeyError: 'Java'

# 2. .discard(): Elimina el valor de forma SEGURA (no lanza error si no existe)
lenguajes.discard("Java")  # ✅ No hace nada y el programa continúa

# 3. .pop(): Extrae y devuelve un elemento ALEATORIO (al no haber orden)
elemento_eliminado = lenguajes.pop()

# 4. .clear(): Vacía el conjunto por completo
lenguajes.clear()  # set()

```

---

## 4. Transformación de Sets a Listas (Deduplicación)

El caso de uso más habitual en producción para los conjuntos es **eliminar duplicados de una lista** mediante la conversión de tipos (_casting_):

```python
lista_duplicados = [1, 2, 2, 3, 4, 4, 4, 5]

# Deduplicación rápida
lista_limpia = list(set(lista_duplicados))
print(lista_limpia)  # [1, 2, 3, 4, 5]

# ⚠️ Nota: Al convertir a set y volver a list, no se garantiza conservar el orden original.

```

---

## 5. Operaciones Avanzadas de Teoría de Conjuntos

Python permite realizar operaciones matemáticas entre conjuntos tanto mediante **métodos** como mediante **operadores sobrecargados**.

```python
set_a = {1, 2, 3, 4}
set_b = {3, 4, 5, 6}

# 1. UNIÓN (Elementos de A, B o ambos)
union_set = set_a.union(set_b)  # Método
union_operador = set_a | set_b  # Operador '|' -> {1, 2, 3, 4, 5, 6}

# 2. INTERSECCIÓN (Elementos presentes en AMBOS conjuntos)
interseccion_set = set_a.intersection(set_b)  # Método
interseccion_operador = set_a & set_b  # Operador '&' -> {3, 4}

# 3. DIFERENCIA (Elementos presentes en A pero NO en B)
diferencia_set = set_a.difference(set_b)  # Método
diferencia_operador = set_a - set_b  # Operador '-' -> {1, 2}

# 4. DIFERENCIA SIMÉTRICA (Elementos en A o B, pero NO en ambos)
dif_simetrica = set_a.symmetric_difference(set_b)  # Método
dif_simetrica_op = set_a ^ set_b  # Operador '^' -> {1, 2, 5, 6}

# 5. SUBCONJUNTOS Y SUPERCONJUNTOS (Evaluación booleana)
pequeno = {1, 2}
print(pequeno.issubset(set_a))  # True (pequeno ⊆ set_a)
print(set_a.issuperset(pequeno))  # True (set_a ⊇ pequeno)
print(set_a.isdisjoint(set_b))  # False (Tienen elementos en común)

```

---

## 6. Código Refactorizado y Modernizado

```python
"""
Demostración avanzada de procesamiento de datos con Sets en Python
"""

from typing import Set

# 1. Definición con Type Hinting
usuarios_activos: Set[str] = {"usr_101", "usr_102", "usr_103"}
usuarios_premium: Set[str] = {"usr_102", "usr_105"}

# 2. Identificar usuarios activos que NO son premium (Diferencia)
activos_estandar = usuarios_activos - usuarios_premium
print(f"{activos_estandar=}")  # {'usr_101', 'usr_103'}

# 3. Set Comprehension (Comprensión de Conjuntos)
# Crear un conjunto con los cuadrados de números pares deduplicados
numeros = [1, 2, 2, 3, 4, 4, 5, 6]
cuadrados_pares: Set[int] = {x**2 for x in numeros if x % 2 == 0}
print(f"{cuadrados_pares=}")  # {16, 4, 36}

```

---

## 💡 Buenas Prácticas y Consejos para Trabajar como un Profesional

### 1. Usa `set` en lugar de `list` para búsquedas frecuentes con el operador `in`

Buscar un elemento con `x in lista` requiere tiempo **$\mathcal{O}(n)$** (recorre la lista elemento por elemento). Buscar en un conjunto `x in conjunto` requiere tiempo constante **$\mathcal{O}(1)$**, independientemente de si el conjunto tiene 10 o 10.000.000 de elementos.

```python
# ❌ Lento en grandes volúmenes de datos (O(n)):
ids_bloqueados = [1001, 1002, 1003, 1004]
if usuario_id in ids_bloqueados:
    ...

# ✅ Rendimiento profesional O(1):
ids_bloqueados = {1001, 1002, 1003, 1004}
if usuario_id in ids_bloqueados:
    ...

```

---

### 2. Conserva el orden al deduplicar usando `dict.fromkeys()`

Si necesitas eliminar duplicados de una lista pero **es crítico mantener el orden de aparición original**, convertir a `set()` no te servirá. Usa `dict.fromkeys()` (los diccionarios en Python 3.7+ preservan el orden de inserción):

```python
lista_ordenada = ["a", "b", "a", "c", "b"]

# ❌ Pierde el orden:
print(list(set(lista_ordenada)))  # Puede devolver ['c', 'a', 'b']

# ✅ Mantiene el orden de aparición original:
lista_deduplicada = list(dict.fromkeys(lista_ordenada))
print(lista_deduplicada)  # ['a', 'b', 'c']

```

---

### 3. Utiliza `frozenset` si necesitas un conjunto inmutable o usarlo como clave

Un `set` es mutable, por lo que no es _hashable_ y no puede usarse como clave de diccionario o dentro de otro conjunto. Para estos casos existe `frozenset` (la versión inmutable de un set).

```python
# Creación de un conjunto inmutable
conjunto_fijo = frozenset([1, 2, 3])

# ✅ Válido: Usarlo como clave de un diccionario
permisos = {conjunto_fijo: "Acceso_Total"}

```

---

## 💡 Preguntas Típicas de Entrevista Técnica

### 1. ¿Por qué los elementos de un `set` deben ser inmutables (_hashables_)?

Porque los conjuntos utilizan una **tabla Hash** para almacenar y buscar elementos instantáneamente. El valor Hash de un objeto se calcula a partir de sus datos. Si el objeto fuera mutable (como una lista), sus datos podrían cambiar, alterando su Hash e invirtiendo o corrompiendo la ubicación del elemento en la tabla de memoria.

---

### 2. ¿Qué diferencia sintáctica y de ejecución existe entre los métodos de conjuntos (`union`) y sus operadores (`|`)?

- **Operadores (`|`, `&`, `-`, `^`):** Requieren estrictamente que **ambos operandos sean objetos de tipo `set**`.
- **Métodos (`.union()`, `.intersection()`, etc.):** Aceptan **cualquier objeto iterable** (listas, tuplas, generadores) como argumento, convirtiéndolo internamente de forma automática.

```python
s = {1, 2}
l = [2, 3]

# print(s | l)             # ❌ TypeError: unsupported operand type(s) for |: 'set' and 'list'
print(s.union(l))  # ✅ Devuelve {1, 2, 3}

```

---

### 3. ¿Cuál es la diferencia de rendimiento entre `set.intersection()` y filtrar mediante una lista por comprensión?

`set.intersection()` está implementado directamente en código C dentro de CPython. Ejecuta la búsqueda en tiempo **$\mathcal{O}(\min(len(A), len(B)))$**, siendo órdenes de magnitud más rápido que iterar manualmente con un `for` o una lista de comprensión **$\mathcal{O}(n \times m)$**.
