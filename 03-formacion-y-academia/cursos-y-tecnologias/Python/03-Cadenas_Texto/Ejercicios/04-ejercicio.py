"""
Desempaqueta los caracteres de la palabra “Python” en variables separadas y luego imprímelos uno por uno. 
"""
palabra = "Pyhton"
a, b, c, d, e, f = palabra  # Desempaquetamos los caracteres de la palabra "Python" en variables separadas
print(a)  # Imprimimos la variable a que contiene el primer carácter 'P'
print(b)  # Imprimimos la variable b que contiene el segundo carácter 'y'
print(c)  # Imprimimos la variable c que contiene el tercer carácter 't'
print(d)  # Imprimimos la variable d que contiene el cuarto carácter 'h'
print(e)  # Imprimimos la variable e que contiene el quinto carácter 'o'
print(f)  # Imprimimos la variable f que contiene el sexto carácter 'n'

# Extra

datos_usuario =("Juan", "Pérez", 29, "Madrid", "Desarrollador", "Python")
nombre,apellido,*detalles = datos_usuario
print(nombre)  # Imprimimos la variable nombre que contiene el primer elemento 'Juan'
print(apellido)  # Imprimimos la variable apellido que contiene el segundo elemento 'Pérez'
print(detalles)  # Imprimimos la variable detalles que contiene el resto de los elementos ['29', 'Madrid', 'Desarrollador', 'Python']