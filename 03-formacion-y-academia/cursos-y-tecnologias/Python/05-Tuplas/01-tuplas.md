# Apuntes de Python: Tuplas y Secuencias Inmutables

En Python, las **tuplas** (`tuple`) son colecciones **ordenadas, inmutables y heterogéneas** de elementos. A diferencia de las listas, una vez creada una tupla, sus elementos **no se pueden modificar, añadir ni eliminar** directamente en memoria.

Esta inmutabilidad no solo aporta seguridad frente a modificaciones accidentales en el código, sino que ofrece una optimización importante en el uso de memoria RAM y el rendimiento de ejecución.

---

## 1. Características Principales de las Tuplas

| Propiedad        | Descripción                                                           | Ejemplo                                       |
| ---------------- | --------------------------------------------------------------------- | --------------------------------------------- |
| **Inmutables**   | No permiten modificación _in-place_ tras su creación.                 | Intentar `tupla[0] = 5` lanza un `TypeError`. |
| **Ordenadas**    | Mantienen la posición exacta de inserción.                            | `(10, 20)` conserva el orden.                 |
| **Heterogéneas** | Pueden almacenar distintos tipos de datos.                            | `(1, "Python", 3.14, True)`                   |
| **Optimizadas**  | Ocupan menos espacio en memoria y se crean más rápido que las listas. | Ideal para datos de solo lectura.             |

---

## 2. Definición, Acceso y Trampa del Elemento Único

### ⚠️ La Trampa de la Tupla de un Solo Elemento

Para definir una tupla de un solo elemento con paréntesis, **es obligatorio incluir una coma final `,**`. De lo contrario, Python lo interpretará como un simple valor entre paréntesis (evaluación aritmética).

```python
# ❌ Esto NO es una tupla, es un entero (int)
falsa_tupla = 42
print(type(falsa_tupla))  # <class 'int'>

# ✅ Forma correcta de definir una tupla de 1 elemento:
tupla_unipersonal = (42,)
print(type(tupla_unipersonal))  # <class 'tuple'>

# Definición implícita (Packing de tuplas sin paréntesis)
tupla_sin_parentesis = 10, 20, 30
print(type(tupla_sin_parentesis))  # <class 'tuple'>

```

---

## 3. Operaciones, Métodos y Slicing

Dado que las tuplas son inmutables, únicamente cuentan con **dos métodos de búsqueda** nativos (`count` e `index`), minimizando el _overhead_ de la clase.

```python
# Creación con constructor y literales
frutas = ("manzana", "banana", "cereza", "manzana")
numeros = tuple(range(1, 5))  # (1, 2, 3, 4)

# ACCESO E INDEXACIÓN (0-indexed)
print(frutas[0])  # 'manzana' (Primer elemento)
print(frutas[-1])  # 'manzana' (Último elemento)

# BÚSQUEDA
print(frutas.count("manzana"))  # 2 (Número de ocurrencias)
print(frutas.index("banana"))  # 1 (Primer índice donde aparece)

# SLICING Y CONCATENACIÓN (Generan NUEVAS tuplas)
sub_tupla = frutas[1:3]  # ('banana', 'cereza')
combinada = frutas + (1, 2, 3)  # ('manzana', 'banana', 'cereza', 'manzana', 1, 2, 3)
repetida = (1, 2) * 3  # (1, 2, 1, 2, 1, 2)

# ELIMINACIÓN
# del frutas[0]     # ❌ TypeError: 'tuple' object doesn't support item deletion
del frutas  # ✅ Elimina la referencia de la tupla completa en memoria

```

---

## 4. Modificación Indirecta: Conversión a Lista

Si requieres modificar una tupla obligatoriamente, el patrón estándar es realizar un _casting_ temporal a `list`, alterar la estructura y reconvertir a `tuple`:

```python
tupla_original = ("A", "B", "C")

# 1. Convertir a lista (mutable)
lista_temp = list(tupla_original)

# 2. Modificar elementos
lista_temp.append("D")

# 3. Reconvertir a tupla (inmutable)
tupla_modificada = tuple(lista_temp)
print(tupla_modificada)  # ('A', 'B', 'C', 'D')

```

---

## 5. Código Refactorizado y Modernizado

```python
"""
Demostración avanzada de Tuplas y Desempaquetado en Python
"""

from typing import Tuple

# 1. Definición con Type Hinting
coordenadas_gps: Tuple[float, float] = (40.4167, -3.7032)  # Madrid

# 2. Desempaquetado Estructurado (Unpacking)
latitud, longitud = coordenadas_gps
print(f"{latitud=} {longitud=}")

# 3. Uso de Tuplas como retorno múltiple en funciones
def obtener_metricas_servidor() -> Tuple[str, int, float]:
    estado = "OK"
    puerto = 8080
    carga_cpu = 12.5
    return estado, puerto, carga_cpu  # Devuelve una tupla implícita


estado_sys, *detalles = obtener_metricas_servidor()
print(f"{estado_sys=}")  # 'OK'
print(f"{detalles=}")  # [8080, 12.5] (El operador * empaqueta el resto en lista)

```

---

## 💡 Buenas Prácticas y Consejos para Trabajar como un Profesional

### 1. Usa Tuplas para "Registros Heterogéneos" y Listas para "Colecciones Homogéneas"

- **Listas:** Guardan elementos del **mismo tipo** cuyo tamaño cambia con el tiempo (ej. `lista_precios = [10.5, 99.0, 4.5]`).
- **Tuplas:** Guardan datos de **diferente tipo** con una estructura fija donde la **posición del elemento tiene un significado sintáctico** (ej. `usuario = (101, "Carlos", True)`).

---

### 2. Aprovecha las Tuplas como Claves de Diccionarios (`dict`)

Debido a que son inmutables y generables en valor Hash (_hashable_), las tuplas **sí pueden ser usadas como claves dentro de un diccionario**, mientras que las listas lanzarán un error `TypeError: unhashable type: 'list'`.

```python
# ✅ Válido: Usar tuplas como coordenadas/claves compuestas
matriz_mapa = {
    (0, 0): "Inicio",
    (0, 1): "Bosque",
    (1, 0): "Montaña",
}

print(matriz_mapa[(0, 1)])  # 'Bosque'

```

---

### 3. Considera `NamedTuple` cuando la tupla tenga más de 3 elementos

Acceder a una tupla por índice como `usuario[2]` resulta difícil de leer en proyectos grandes. Utiliza `NamedTuple` de la librería nativa `typing` para asignar nombres descriptivos a las posiciones sin perder el rendimiento de las tuplas.

```python
from typing import NamedTuple


class Persona(NamedTuple):
    id: int
    nombre: str
    email: str


# Se instancia como una tupla pero permite acceso tipo atributo
usuario = Persona(1, "Ana", "ana@email.com")

print(usuario.nombre)  # 'Ana' (Limpio y legible)
print(usuario[1])  # 'Ana' (Mantiene retrocompatibilidad por índice)

```

---

## 💡 Preguntas Típicas de Entrevista Técnica

### 1. ¿Por qué una tupla consume menos memoria RAM que una lista con los mismos elementos?

Las **listas** son arreglos dinámicos que reservan espacio en memoria adicional (_over-allocation_) para permitir operaciones rápidas de `.append()` e `.insert()`. Las **tuplas** son inmutables y fijas, por lo que CPython asigna exactamente el bloque de memoria mínimo necesario para almacenar sus elementos.

```python
import sys

lista_ejemplo = [1, 2, 3, 4, 5]
tupla_ejemplo = (1, 2, 3, 4, 5)

print(sys.getsizeof(lista_ejemplo))  # ~104 bytes (Varía según arquitectura)
print(sys.getsizeof(tupla_ejemplo))  # ~80 bytes (Consumo menor)

```

---

### 2. ¿Qué es la "Falsa Inmutabilidad" o Inmutabilidad Superficial en Tuplas?

La tupla garantiza que sus **referencias internas** no cambiarán, pero **si contiene objetos mutables dentro (como una lista), los elementos de esa lista sí pueden ser modificados**.

```python
# Tupla que contiene un objeto mutable (una lista)
tupla_mixta = (1, 2, [100, 200])

# ❌ Intentar cambiar el puntero de la lista falla:
# tupla_mixta[2] = [300, 400] # TypeError

# ✅ Modificar el contenido de la lista interna SÍ funciona:
tupla_mixta[2].append(300)
print(tupla_mixta)  # (1, 2, [100, 200, 300])

```

---

### 3. ¿Cómo funciona la optimización por _Tuple Struct Interning_ en CPython?

CPython realiza pequeñas optimizaciones en segundo plano. Las tuplas vacías `()` son tratadas como un objeto _Singleton_ en memoria (siempre apuntan a la misma dirección `id()`). Además, cuando se destruyen tuplas pequeñas (de hasta 20 elementos), CPython no libera inmediatamente la memoria al sistema operativo, sino que las guarda en una lista interna de reciclaje para acelerar la creación de futuras tuplas.
