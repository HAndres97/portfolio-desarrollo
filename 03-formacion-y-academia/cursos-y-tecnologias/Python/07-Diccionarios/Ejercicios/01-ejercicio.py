# 1. Crea un diccionario con las claves name, age, y country, asignando valores a cada una.
# Imprime el diccionario.
persona = {"name":"Andres Herrera","age":29,"country":"Madrid"}
print(persona)

#2. Accede al valor de la clave name en el diccionario.

print(f"El valor de la clave name es: {persona["name"]}")

#3. Añade una nueva clave job con el valor "Programador" al diccionario del punto anterior.
# Imprime el diccionario actualizado.
persona["job"] = "Programador"
print(persona)
# Si la clave no existe, devuelve None (o un valor por defecto) en lugar de romper con KeyError:
empleo = persona.get("job", "Sin empleo registrado")

#4. Modifica el valor de la clave age en el diccionario para que sea 38.
# Imprime el diccionario actualizado.
persona["age"] = 38
print(f"La edad actualizada es {persona["age"]}")


#5. Elimina la clave country del diccionario e imprime el diccionario resultante.
del persona["country"]
print(f"Actualizada tras eliminacion de country: {persona}")

# Borra 'country' y si no existe, no rompe el programa:
pais_eliminado = persona.pop("country", None)


#6. Crea un diccionario donde las claves sean números del 1 al 5 y los valores sean sus cuadrados (ejemplo: 1: 1, 2: 4, ...).
claves = tuple(range(1,6))
valores = list(x**2 for x in range(1,6))
numeros = dict(zip(claves,valores))
print(numeros)


#Una sola linea 
# La forma pythonica en 1 sola línea limpia:
numeros = {x: x**2 for x in range(1, 6)}


#7. Verificacion si la clave age esta presente.
profesor = {"name": "Brais", "age": 37, "country": "Galicia"}
print(f"La clave edad esta en el dict profesor : {"age" in profesor}")

#8.  Imprime solo las claves del diccionario.
print(f"LAs claves del diccionario {profesor.keys()}")

#9. Convierte las claves del diccinario en una lista e imprime los resultados
lista_claves = list(profesor.keys())
print(lista_claves)

#10. Crea un nuevo diccionario a partir de una lista de claves ["name", "age", "job"] usando fromkeys(),
# asignando a todas las claves el valor "Desconocido". 
claves_nuevas = ["name", "age", "job"]
nuevo_diccionario = dict.fromkeys(claves_nuevas,"Desconocido")
print(nuevo_diccionario)