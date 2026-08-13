""" 
Invierte la lista [100, 200, 300, 400, 500] e imprímela.
"""
lista = list(range(100,600,100))
print(lista)
lista.reverse()
print(lista)
""" 
Al igual que ocurria con .append(), .extend() o .sort(), el método .reverse()
modifica la lista directamente en memoria (in-place) y devuelve None.
Por eso, cuando haces print(lista.reverse()), lo que estás imprimiendo es el valor de retorno del método (que es None)

1- reverse() - no consume memoria extra porque reutiliza la misma lista
2- Slicing [::-1] Crea una lista nueva, usala solo si necesitas mantener la lista original intacta o quieres
asignarle directamente a un variable o un print()
"""
#print(lista.reverse())

