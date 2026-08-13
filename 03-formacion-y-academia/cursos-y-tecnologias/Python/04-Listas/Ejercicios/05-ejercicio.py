""" 
Elimina el primer valor 30 de la lista [10, 20, 30, 30, 40, 50]. 
"""
lista = [10, 20, 30, 30, 30, 40, 50]
lista.remove(30)

print(lista)

#Si no existe lo que va a borrar da error ValueError : list.remove(x) : x not a list
elemento_a_borrar = 30

if elemento_a_borrar in lista:
    lista.remove(elemento_a_borrar)

print(lista)

#Si queremo quedarnos solo con los numeros que no sean 30
# Primer num resultado donde va el filtrado que hacemos 
lista = [num for num in lista if num != 30]
print(lista)