""" 
 Inserta el número 15 en la posición 2 de la lista [10, 20, 30, 40, 50].
"""
lista_numeros = list(range(10,60,10))
lista_numeros.insert(2,15)# En listas grandes es lento, si en un futuro quiero agregar algo con collection.deque()
print(lista_numeros)