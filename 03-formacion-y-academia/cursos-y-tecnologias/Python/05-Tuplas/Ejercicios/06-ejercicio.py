""" 
Concatena dos tuplas: (1, 2, 3) y (4, 5, 6) e imprime la tupla resultante. 
"""
tupla_1 = (1, 2, 3)
tupla_2 = (4, 5, 6)

tupla_completa = tupla_1 + tupla_2

print(tupla_completa)
#Podemos crear una nueva tupla con algo mas
tupla_v2 = (*tupla_1, 999,*tupla_2)
print(tupla_v2)