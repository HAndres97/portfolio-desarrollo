""" 
 Accede al segundo elemento de la tupla (100, 200, 300, 400, 500) y muéstralo. 
"""
tupla = (100, 200, 300, 400, 500)
print(f'El segundo elemento es {tupla[1]}')

# Se suele preferir el desempaqutado, le da un nombre claro a cada dato y evita numeros mágicos, indices sin significado en el codigo.
nueva_tupla = (100, 200, 300, 400, 500)

# Ignoramos el primer valor, extraemos el segundo en 'segundo' y descartamos el resto con *
_, segundo, *_ = tupla

print(f"El segundo elemento es {segundo}")