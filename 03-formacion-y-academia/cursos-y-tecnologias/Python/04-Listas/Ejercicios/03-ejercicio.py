""" 
Agrega el número 6 al final de la lista [1, 2, 3, 4, 5] e imprímela. 
"""
lista_numeros = list(range(1,6))
lista_numeros.append(6) # No puede usar range porque toma el objeto tal cual y lo pone al final de la lista, extend en cambio itera y añade uno por uno al final

print(lista_numeros)

lista_numeros.extend(range(7,13))
print(lista_numeros)

lista_numeros.extend([14,56,78]) # Añade multiplos elementos al final.
print(lista_numeros)
