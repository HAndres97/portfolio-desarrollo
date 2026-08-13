""" 
Concatena las listas [1, 2, 3] y [4, 5, 6] y almacena el resultado en una nueva lista.
Imprime la lista resultante.
"""
lista_1 = [1, 2, 3]
lista_2 = [4, 5, 6]

lista = lista_1 + lista_2
print(lista)

""" 
Para grande volumenes de datos
Si estás concatenando listas gigantescas (por ejemplo, con cientos de miles de registros), hacer l1 + l2 o [*l1, *l2] consume bastante memoria RAM al duplicar los datos inmediatamente.

En proyectos de alto rendimiento se utiliza el módulo nativo itertools:
import itertools

# No crea una nueva lista en RAM inmediatamente; va entregando los elementos uno a uno
para_recorrer = itertools.chain(lista_1, lista_2)

for elemento in para_recorrer:
    print(elemento)
"""