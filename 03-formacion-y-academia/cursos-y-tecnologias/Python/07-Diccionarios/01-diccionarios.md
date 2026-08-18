# Apuntes de Python: Diccionarios y Estructuras Clave-Valor

En Python, los **diccionarios** (`dict`) son colecciones **ordenadas, mutables y estructuradas en pares clave-valor** (_key-value_). Están implementados mediante **tablas Hash** optimizadas, lo que permite buscar, insertar y eliminar elementos mediante su clave de manera prácticamente instantánea.

Son la estructura de datos por excelencia para modelar registros, respuestas de APIs (JSON), configuraciones de aplicaciones y entidades de bases de datos.

---

## 1. Características Principales de los Diccionarios

| Propiedad             | Descripción                                                                 | Ejemplo                                               |
| :-------------------- | :-------------------------------------------------------------------------- | :---------------------------------------------------- |
| **Clave-Valor**       | Cada elemento consta de una clave única y un valor asociado.                | `{"id": 101, "nombre": "Ana"}`                        |
| **Claves Inmutables** | Las claves deben ser _hashables_ (strings, números, tuplas).                | `{"usuario": "admin"}` ✅ <br> `{[1, 2]: "error"}` ❌ |
| **Valores Libres**    | Los valores pueden ser de cualquier tipo (listas, diccionarios, funciones). | `{"tags": ["python", "backend"]}`                     |
| **Ordenados**         | Mantienen el orden de inserción de las claves (Estándar desde Python 3.7+). | El orden de inserción se respeta al iterar.           |

---

## 2. Definición, Acceso Seguro y la Trampa de `KeyError`

Para declarar un diccionario se utilizan llaves `{}` con pares `clave: valor` o el constructor `dict()`.

### ⚠️ Acceso Seguro: Diferencia entre `dict[clave]` y `.get()`

```python
# Declaración de diccionarios
usuario = {"id": 101, "nombre": "Carlos", "rol": "Admin"}
vacio = dict()  # o simplemente {}

# 1. Acceso directo por clave
print(usuario["nombre"])  # 'Carlos'

# ❌ Acceso directo a clave inexistente: Lanza KeyError y detiene la ejecución
# print(usuario["email"])  # KeyError: 'email'

# 2. Acceso SEGURO mediante .get() (Recomendado en producción)
print(usuario.get("email"))  # None (No lanza error)
print(usuario.get("email", "soporte@empresa.com"))  # Devuelve un valor por defecto si no existe

```

---

## 3. Modificación, Inserción, Eliminación y `fromkeys()`

Los diccionarios son mutables, lo que permite agregar nuevas claves, actualizar valores existentes o eliminarlos dinámicamente.

```python
config = {"puerto": 8080, "debug": True}

# INSERCIÓN Y ACTUALIZACIÓN
config["puerto"] = 9000  # Modifica la clave existente
config["host"] = "localhost"  # Agrega una nueva clave
config.update({"debug": False, "entorno": "prod"})  # Actualización masiva

# ELIMINACIÓN
# 1. del: Instrucción del lenguaje para eliminar una clave por completo
del config["debug"]

# 2. .pop(): Elimina la clave y DEVUELVE su valor (permite valor por defecto)
puerto_usado = config.pop("puerto", 80)

# 3. .clear(): Vacía el diccionario por completo -> {}
# config.clear()

# CREACIÓN DESDE LISTAS / ITERABLES: dict.fromkeys()
claves = ["id", "nombre", "email"]
# Crea un diccionario con claves inicializadas en un valor por defecto (por defecto None)
nuevo_usuario = dict.fromkeys(claves, "Desconocido")
print(nuevo_usuario)  # {'id': 'Desconocido', 'nombre': 'Desconocido', 'email': 'Desconocido'}

```

---

## 4. Métodos de Iteración, Comprobación y Diccionarios Anidados

```python
producto = {
    "sku": "PROD-101",
    "precio": 49.99,
    "detalles": {"marca": "Logitech", "stock": 150},  # Diccionario Anidado
}

# COMPROBACIÓN DE CLAVES (Operador in)
# Evalúa únicamente las CLAVES, no los valores
print("sku" in producto)  # True
print(49.99 in producto)  # False (49.99 es un valor, no una clave)

# OPERACIONES COMUNES DE ITERACIÓN
print(producto.keys())  # Vista con todas las claves -> dict_keys(['sku', 'precio', 'detalles'])
print(producto.values())  # Vista con todos los valores -> dict_values(['PROD-101', 49.99, {...}])
print(producto.items())  # Vista con tuplas (clave, valor) -> dict_items([('sku', 'PROD-101'), ...])

# Acceso a diccionarios anidados
print(producto["detalles"]["marca"])  # 'Logitech'

```

---

## 5. Código Refactorizado y Modernizado

```python
"""
Demostración avanzada de procesamiento de datos y fusión de diccionarios en Python
"""

from typing import Any, Dict

# 1. Definición estructurada con Type Hinting
metrica_servidor: Dict[str, Any] = {
    "host": "srv-01",
    "cpu_percent": 45.2,
    "servicios_activos": ["httpd", "sshd"],
}

# 2. Operadores de Fusión de Diccionarios (Merge | y Update |=) introducidos en Python 3.9+
defaults = {"host": "localhost", "puerto": 80, "timeout": 30}
custom = {"host": "192.168.1.1", "puerto": 8080}

# Fusión limpia en un nuevo diccionario usando el operador '|'
config_final = defaults | custom
print(f"{config_final=}")  # {'host': '192.168.1.1', 'puerto': 8080, 'timeout': 30}

# 3. Comprensión de Diccionarios (Dict Comprehension)
precios_eur = {"manzana": 1.5, "banana": 0.8, "cereza": 3.0}
# Convertir precios a dólares y filtrar los mayores a 1.0
precios_usd = {k: round(v * 1.1, 2) for k, v in precios_eur.items() if v > 1.0}
print(f"{precios_usd=}")  # {'manzana': 1.65, 'cereza': 3.3}

```

---

## 💡 Buenas Prácticas y Consejos para Trabajar como un Profesional

### 1. Usa `setdefault()` o `collections.defaultdict` para evitar comprobaciones manuales

Cuando agrupas datos en un diccionario, usar un `if key not in dict:` genera código verboso. `defaultdict` inicializa la clave automáticamente si no existe.

```python
from collections import defaultdict

# ❌ Forma tradicional verbosa:
agrupados = {}
for ciudad, persona in [("Madrid", "Ana"), ("Madrid", "Carlos"), ("BCN", "Pedro")]:
    if ciudad not in agrupados:
        agrupados[ciudad] = []
    agrupados[ciudad].append(persona)

# ✅ Forma profesional con defaultdict:
agrupados_profesional = defaultdict(list)
for ciudad, persona in [("Madrid", "Ana"), ("Madrid", "Carlos"), ("BCN", "Pedro")]:
    agrupados_profesional[ciudad].append(persona)  # Inicializa la lista automáticamente

```

---

### 2. Evita mutar un diccionario mientras lo estás iterando

Al igual que con las listas, añadir o eliminar claves dentro de un bucle `for k in mi_dict:` lanzará un error `RuntimeError: dictionary changed size during iteration`.

```python
# ❌ Error en ejecución:
# for k in mi_dict:
#     if mi_dict[k] < 0:
#         del mi_dict[k]

# ✅ Forma correcta (Iterar sobre una copia de las claves o usar Dict Comprehension):
precios = {"a": 10, "b": -5, "c": 20}
precios_limpios = {k: v for k, v in precios.items() if v >= 0}

```

---

### 3. Considera `dataclass` o `Pydantic` si la estructura de claves es fija

Si utilizas diccionarios para representar entidades concretas con atributos fijos (por ejemplo, `{"nombre": str, "edad": int}`), los diccionarios genéricos no ofrecen autocompletado ni validación de tipos. En proyectos profesionales backend, migra estas estructuras a `dataclasses` o esquemas de `Pydantic`.

---

## 💡 Preguntas Típicas de Entrevista Técnica

### 1. ¿Cómo garantiza Python la búsqueda en $\mathcal{O}(1)$ dentro de un diccionario?

Los diccionarios utilizan la función interna `hash(clave)` para transformar la clave en un índice numérico dentro de una tabla Hash en memoria. Esto permite saltar directamente a la posición física donde se encuentra el valor asignado, en lugar de recorrer los elementos uno a uno como en una lista ($\mathcal{O}(n)$).

---

### 2. ¿Por qué una lista o un conjunto no pueden utilizarse como claves de un diccionario?

Porque las claves de un diccionario deben ser **inmutables y hashables** (_hashable_). Las listas y conjuntos son objetos mutables; si su contenido cambiara, su valor Hash cambiaría, imposibilitando recuperar el valor asociado en la memoria. Para usar una secuencia como clave, debes convertirla a **tupla** (`tuple`) o a **conjunto inmutable** (`frozenset`).

```python
# ❌ Lanza TypeError: unhashable type: 'list'
# d = {[1, 2]: "valor"}

# ✅ Válido: Usar una tupla inmutable como clave compuesta
d = {(1, 2): "valor"}

```

---

### 3. ¿Qué diferencia hay entre la copia superficial (`.copy()`) y la copia profunda (`copy.deepcopy()`) en diccionarios anidados?

El método `.copy()` crea una nueva instancia del diccionario raíz, pero **los subdiccionarios o listas anidadas dentro siguen apuntando a la misma dirección de memoria**. Para duplicar completamente la estructura a todos los niveles, se requiere `copy.deepcopy()`.

```python
import copy

original = {"a": 1, "nested": {"b": 2}}

# Copia superficial
copia_superficial = original.copy()
copia_superficial["nested"]["b"] = 99
print(original["nested"]["b"])  # 99 (¡Afectó al original!)

# Copia profunda
copia_profunda = copy.deepcopy(original)
copia_profunda["nested"]["b"] = 555
print(original["nested"]["b"])  # 99 (Intacto y aislado)

```
