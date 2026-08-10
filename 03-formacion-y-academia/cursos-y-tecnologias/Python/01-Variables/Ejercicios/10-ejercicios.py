""" 
Usa un tipo de dato forzado para declarar una variable phone, asegurándote de que siempre será un número.
Luego, cambia su valor a un número diferente y verifica el tipo de la variable con type().
"""
num_phone : int = 1234567890  # Declaramos la variable num_phone como un número
print(num_phone)  # Imprimimos el valor inicial de la variable num_phone
num_phone = 9876543210  # Cambiamos el valor de la variable num_phone a otro número
print(num_phone)  # Imprimimos el nuevo valor de la variable num_phone
print(type(num_phone))  # Imprimimos el tipo de la variable num_phone