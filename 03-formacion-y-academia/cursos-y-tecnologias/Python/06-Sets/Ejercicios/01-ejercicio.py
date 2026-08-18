""" 
1. Crea un set con los números del 1 al 5 e imprímelo.
2. Añade el número 6 al set {1, 2, 3, 4, 5} e imprímelo.
3. Intenta añadir el número 5 al set {1, 2, 3, 4, 5} nuevamente. ¿Qué sucede?
4. Verifica si el número 3 está en el set {1, 2, 3, 4, 5} e imprime el resultado.
5. Elimina el número 4 del set {1, 2, 3, 4, 5} e imprime el set resultante.
6. Usa el método clear() para vaciar un set y luego imprime su longitud. 
7. Convierte el set {"manzana", "naranja", "plátano"} en una lista e imprime el primer elemento de la lista. 
8. Realiza la unión de dos sets: {1, 2, 3} y {4, 5, 6}, e imprime el set resultante. 
9. Calcula la diferencia entre los sets {1, 2, 3, 4} y {3, 4, 5, 6} e imprime el resultado. 
10. Elimina un set llamado my_set usando del y luego intenta imprimirlo para ver el resultado. 
"""
#Crea un set
set_numeros = {1,2,3,4,5}
#Añadir numerosd
set_numeros.add(6)
#Añadir el numero 5
set_numeros.add(5)
print(set_numeros) # Ya existe asi que no se incluye
#Verifca si el numero 3 esta en el set e imprimelo
verificacion = 3 in set_numeros
print(f"El numero 3 esta en el set = {verificacion}")
#Eliminamos el numero 4 del set
set_numeros.discard(4)
print(set_numeros)
#Vaciamos el set
set_numeros.clear()
print(len(set_numeros))

#Convertir a lista
set_frutas = {"manzana","naranja","platano"}
lista_frutas = list(set_frutas)
print(lista_frutas[0])

#Union de dos sets
set_principal = {1,2,3}
set_secundario ={3,4,5}
set_union = set_principal.union(set_secundario)
print(set_union)

#Diferencia
set_tercero = {1,2,3,4}
set_cuarto = {3,4,5,6}
set_diferencia = set_tercero.symmetric_difference(set_cuarto)
print(set_diferencia)

#Eliminación
my_set = set()
del my_set

print(my_set)
