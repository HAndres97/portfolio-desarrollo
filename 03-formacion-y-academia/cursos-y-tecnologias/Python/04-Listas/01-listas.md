---

### 🛠️ Código corregido listo para copiar y pegar

Aquí tienes **todo el documento arreglado y pulido**:

```markdown
# Apuntes de Python: Listas y Estructuras de Secuencia

En Python, las **listas** (`list`) son colecciones **ordenadas, mutables y heterogéneas** de elementos. A diferencia de las cadenas de texto (_strings_) que son inmutables, las listas permiten modificar, agregar, reordenar y eliminar sus elementos directamente en memoria (_in-place_) sin necesidad de crear un nuevo objeto.

Son una de las estructuras de datos fundamentales en Python y se implementan internamente como **arreglos dinámicos de punteros a objetos**.

---

## 1. Características Principales de las Listas

| Propiedad        | Descripción                                                                   | Ejemplo                              |
| ---------------- | ----------------------------------------------------------------------------- | ------------------------------------ |
| **Ordenadas**    | Mantienen el orden exacto de inserción de sus elementos.                      | `[1, 2, 3]` conserva sus posiciones. |
| **Mutables**     | Su contenido se puede modificar sin cambiar la referencia de memoria.         | `lista[0] = 99`                      |
| **Heterogéneas** | Pueden almacenar diferentes tipos de datos dentro de la misma lista.          | `[10, "Python", True, 3.14]`         |
| **Anidadas**     | Pueden contener otras listas formando matrices o estructuras n-dimensionales. | `[[1, 2], [3, 4]]`                   |

---

## 2. Acceso a Elementos, Slicing y Mutabilidad

El acceso a los elementos de una lista se realiza mediante un índice numérico basado en cero (**0-indexed**).

### ⚠️ Diferencia entre Indexación Explicita y Slicing

```python
lista = [10, 20, 30, 40, 50]

# Indexación directa (Acceso a un solo elemento)
print(lista[0])  # 10 (Primer elemento)
print(lista[-1])  # 50 (Último elemento usando índices negativos)

# ❌ Error común: Intentar acceder a un índice que no existe lanza un IndexError
# print(lista[10]) # IndexError: list index out of range

# Slicing: extraer sublistas -> [inicio:fin:paso]
print(lista[1:4])  # [20, 30, 40] (Índice 1 inclusive hasta el 4 exclusivo)
print(lista[::-1])  # [50, 40, 30, 20, 10] (Forma idiomática para invertir)

```

---

## 3. Modificación, Búsqueda y Limpieza

### 🛠️ Métodos clave y su impacto en memoria

```python
# Creación de listas
frutas = ["manzana", "banana", "cereza"]
numeros = list(range(1, 6))  # Usando constructor list() -> [1, 2, 3, 4, 5]

# AGREGAR ELEMENTOS
frutas.append("durazno")  # Añade al FINAL de la lista
frutas.insert(1, "mango")  # Inserta en el ÍNDICE especificado (desplaza el resto)
frutas.extend(["uva", "pera"])  # Concatena múltiples elementos al final

# ELIMINAR ELEMENTOS
frutas.remove("banana")  # Elimina la PRIMERA coincidencia por VALOR
eliminado = frutas.pop(2)  # Elimina y DEVUELVE el elemento en esa posición (por defecto el último)
del frutas[0]  # Instrucción del lenguaje para eliminar un índice o rango por posición

# BÚSQUEDA Y REPETICIÓN
print(frutas.count("durazno"))  # Cuenta cuántas veces aparece un elemento
print(frutas.index("durazno"))  # Devuelve el primer índice donde se encuentra el elemento

# ORDENACIÓN (Modificación in-place vs Función integrada)
numeros_desordenados = [5, 2, 9, 1]

# 1. Método .sort(): Modifica la lista ORIGINAL (devuelve None)
numeros_desordenados.sort()  # Lista pasa a ser [1, 2, 5, 9]
numeros_desordenados.sort(reverse=True)  # Orden descendente -> [9, 5, 2, 1]

# 2. Método .reverse(): Invierte el orden actual sin ordenar
numeros_desordenados.reverse()

# COPIAR Y LIMPIAR
copia_lista = frutas.copy()  # Copia superficial (Shallow copy)
frutas.clear()  # Vacía la lista por completo -> []

```

---

## 4. El Peligro de las Copias Superficiales (_Shallow Copy vs Deep Copy_)

Cuando asignas una lista a otra variable usando el operador `=`, **no estás duplicando la lista**, estás copiando la **referencia en memoria**.

```python
# ❌ Error clásico en código de producción:
lista_a = [1, 2, 3]
lista_b = lista_a  # Ambas apuntan al MISMO objeto en memoria

lista_b.append(99)
print(lista_a)  # [1, 2, 3, 99] (¡La lista A se modificó!)

# ✅ Copia correcta para listas de una dimensión (Shallow Copy):
lista_correcta = lista_a.copy()  # O bien usando slicing: lista_a[:]
lista_correcta.append(555)
print(lista_a)  # [1, 2, 3, 99] (Inalterada)

```

---

## 5. Código Refactorizado y Modernizado

```python
"""
Demostración avanzada de operaciones con Listas en Python
"""

# 1. Definición y Heterogeneidad
datos_usuario: list = [101, "Carlos", 85.5, True, ["Python", "JS"]]

# 2. Slicing avanzado y Desempaquetado (Unpacking)
primer_id, *datos_medios, habilidades = datos_usuario

print(f"{primer_id=}")  # primer_id=101
print(f"{datos_medios=}")  # datos_medios=['Carlos', 85.5, True]
print(f"{habilidades=}")  # habilidades=['Python', 'JS']

# 3. Concatenación y Repetición
sublista_a = [1, 2]
sublista_b = [3, 4]
lista_combinada = sublista_a + sublista_b  # [1, 2, 3, 4]
lista_repetida = sublista_a * 3  # [1, 2, 1, 2, 1, 2]

# 4. Ordenación avanzada utilizando funciones Lambda como clave (key)
palabras = ["Python", "C", "JavaScript", "Java"]
# Ordenar por longitud de la palabra (de menor a mayor)
palabras.sort(key=len)
print(palabras)  # ['C', 'Java', 'Python', 'JavaScript']

```

---

## 💡 Preguntas Típicas de Entrevista Técnica

### 1. ¿Cuál es la complejidad algorítmica (Notación Big-O) de insertar o eliminar elementos en una lista?

- **Al final de la lista (`.append()` / `.pop()`):** Es **$\mathcal{O}(1)$ (Tiempo constante)**. Es extremadamente rápido porque no requiere reorganizar el resto de elementos en memoria.
- **Al principio o en medio (`.insert(0, v)` / `.remove()` / `del lista[i]`):** Es **$\mathcal{O}(n)$ (Tiempo lineal)**. Python debe desplazar (_shift_) todos los elementos posteriores una posición en la memoria física para mantener el orden contiguo.

---

### 2. ¿Qué diferencia hay entre `.sort()` y la función integrada `sorted()`?

- **`lista.sort()`:** Es un **método** de la clase `list`. Modifica la lista existente _in-place_ y **devuelve `None**`. Es más eficiente en memoria si no necesitas conservar el orden original.
- **`sorted(iterable)`:** Es una **función global** de Python. Acepta cualquier iterable (listas, tuplas, diccionarios, sets) y **devuelve una NUEVA lista** con los elementos ordenados, dejando la lista original intacta.

```python
numeros = [3, 1, 4, 2]

# Usando sorted()
nuevos_numeros = sorted(numeros)
print(numeros)  # [3, 1, 4, 2] (Intacta)
print(nuevos_numeros)  # [1, 2, 3, 4] (Nueva instancia)

# Usando .sort()
resultado = numeros.sort()
print(resultado)  # None ⚠️ (No devuelve la lista)
print(numeros)  # [1, 2, 3, 4] (Modificada)

```

---

### 3. ¿Qué ocurre con las copias superficiales (`.copy()`) cuando la lista contiene objetos mutables anidados?

Una copia superficial (`.copy()` o `lista[:]`) crea una nueva lista contenedor, pero **los elementos internos que sean mutables (como listas anidadas o diccionarios) siguen compartiendo la misma referencia en memoria**.

Para realizar una copia totalmente independiente en todos los niveles de anidamiento, se debe utilizar `copy.deepcopy()`.

```python
import copy

matriz_original = [[1, 2], [3, 4]]

# Copia superficial
copia_superficial = matriz_original.copy()
copia_superficial[0][0] = 999
print(matriz_original[0][0])  # 999 (¡Afectó a la matriz original!)

# Copia profunda (Deep Copy)
matriz_real = [[1, 2], [3, 4]]
copia_profunda = copy.deepcopy(matriz_real)
copia_profunda[0][0] = 999
print(matriz_real[0][0])  # 1 (Intacta y aislada)

```

---

### 4. ¿Por qué NO debes modificar una lista mientras la estás recorriendo en un bucle `for`?

Modificar el tamaño de una lista (añadir o eliminar elementos con `.remove()` o `.pop()`) mientras la iteras genera **comportamientos erráticos y bugs silenciosos**, ya que el índice interno del bucle `for` sigue avanzando mientras la lista cambia de tamaño dinámicamente.

```python
# ❌ Mala práctica: Intento de eliminar números pares
numeros = [1, 2, 3, 4, 5, 6]
for n in numeros:
    if n % 2 == 0:
        numeros.remove(n)
print(
    numeros
)  # [1, 3, 5] en algunos casos, pero omite verificar ciertos elementos adyacentes!

# ✅ Forma correcta (Filtrar creando una nueva lista mediante List Comprehension):
numeros = [1, 2, 3, 4, 5, 6]
impares = [n for n in numeros if n % 2 != 0]
print(impares)  # [1, 3, 5] (Limpio y seguro)

```

---

## 💡 Buenas Prácticas y Consejos para Trabajar como un Profesional

### 1. Usa Comprensión de Listas (_List Comprehensions_) en lugar de bucles `for` tradicionales

La comprensión de listas es la forma idiomática (_pythonic_) de crear o filtrar listas. No solo es más limpia y legible, sino que se ejecuta más rápido a nivel interno de CPython.

```python
# ❌ Enfoque tradicional (verboso y más lento):
cuadrados = []
for x in range(10):
    if x % 2 == 0:
        cuadrados.append(x**2)

# ✅ Enfoque Pythonic profesional (Limpio y optimizado):
cuadrados = [x**2 for x in range(10) if x % 2 == 0]

```

---

### 2. Comprobación de lista vacía: Apóyate en la "Verdad Truthy/Falsy"

En Python, las colecciones vacías (`[]`, `""`, `{}`) se evalúan implícitamente como `False` en contextos booleanos. No necesitas contar la longitud con `len()`.

```python
lista_tareas = []

# ❌ Mala práctica (Innecesario y poco pythonic):
if len(lista_tareas) == 0:
    print("No hay tareas pendientes")

# ✅ Forma profesional:
if not lista_tareas:
    print("No hay tareas pendientes")

```

---

### 3. Usa `enumerate()` cuando necesites tanto el índice como el elemento

Evita el patrón clásico de otros lenguajes de hacer `range(len(lista))`. `enumerate()` es más limpio y previene errores de índices desfasados (_off-by-one errors_).

```python
lenguajes = ["Python", "JavaScript", "TypeScript"]

# ❌ Estilo tipo C/Java (evitar):
for i in range(len(lenguajes)):
    print(f"{i}: {lenguajes[i]}")

# ✅ Forma profesional con enumerate():
for indice, lenguaje in enumerate(lenguajes, start=1):
    print(f"{indice}: {lenguaje}")

```

---

### 4. Escoge la Estructura de Datos adecuada para el trabajo

Aunque las listas son versátiles, **no siempre son la mejor opción**:

- **Si el número de elementos es fijo y no va a cambiar:** Usa una **Tupla** (`tuple`). Consume menos memoria y es más rápida.
- **Si necesitas buscar elementos frecuentemente (`if x in coleccion`):** Buscar en una lista requiere tiempo $\mathcal{O}(n)$. Un **Conjunto** (`set`) realiza la búsqueda en tiempo constante $\mathcal{O}(1)$.
- **Si insertas/eliminas elementos constantemente al principio:** Usar `.insert(0, elem)` en una lista es lento ($\mathcal{O}(n)$). Utiliza `collections.deque` de la librería estándar, que permite inserciones eficientes por ambos extremos en $\mathcal{O}(1)$.

```python
from collections import deque

# Cola de alto rendimiento para procesamiento masivo
cola_pedidos = deque(["Pedido_1", "Pedido_2"])
cola_pedidos.appendleft("Pedido_Urgente")  # O(1) de velocidad

```

```

```
