""" 
Usa la función len() para calcular cuántos caracteres tiene tu nombre completo, almacenado en una variable. 
"""
name = "Christian Andres Herrera Andrade"
print(len(name))

# Si lo queremos sin espacios, podemos usar el método replace() para eliminar los espacios y luego calcular la longitud
name_no_spaces = name.replace(" ", "")  # Eliminamos los espacios de la variable name
print(len(name_no_spaces))  # Calculamos la longitud de la variable name_no_spaces y la imprimimos en la consola

# Tambien podemos usar el método split() para separar la cadena en palabras y luego unirlas sin espacios usando join()
name_split = name.split()  # Separamos la cadena en palabras usando el método split()
name_joined = "".join(name_split)  # Unimos las palabras sin espacios usando el método join()
print(len(name_joined))  # Calculamos la longitud de la variable name_joined y la imprimimos en la consola

