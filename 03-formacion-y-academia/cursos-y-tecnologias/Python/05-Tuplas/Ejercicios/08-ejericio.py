""" 
 Convierte la tupla ("rojo", "verde", "azul") en una lista, cambia el segundo elemento a "amarillo" y vuelve a convertirla en una tupla.
 Imprime la tupla resultante. 
"""
tupla = ("rojo", "verde", "azul")
#Lo pasamos a lista 
tupla = list(tupla)
print(tupla)
#Lo modificamos
tupla[1] = "amarillo"
print(tupla)

#Lo volvemos a pasar a tupla
tupla = tuple(tupla)
print(tupla)