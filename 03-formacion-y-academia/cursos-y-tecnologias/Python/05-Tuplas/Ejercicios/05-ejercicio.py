""" 
Encuentra el índice de la primera aparición de la cadena "Python" en la tupla ("Java", "Python", "JavaScript", "Python").
"""
tupla = ("Java", "Python", "JavaScript", "Python")
print(f'Indice de la primera aparicion de la cadena "Python" :  {tupla.index("Python")}')

#Primero asegurarse de que este lo buscado
lenguaje_buscado = "C++"
if lenguaje_buscado in tupla:
    posicion = tupla.index(lenguaje_buscado)
    print(f'Encontrado en el indice : {posicion}')
else:
    print(f'El lenguaje buscado {lenguaje_buscado} no esta presente en la tupla')