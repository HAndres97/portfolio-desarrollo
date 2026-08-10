"""
Variables son uno de lo conceptos fundamentales de la programacion, ya que nos permiten
almacenar y manipular datos. Una variable no es más que un nombre que asocia un valor específico. En Python, no es necesario declarar el tipo de dato de una variable, ya que el lenguaje es dinámico y lo infiere automáticamente.
y en Python , su uso es muy flexible, lo que facilita su aprendizaje y aplicación en diferentes contextos. A continuación, se presentan algunos conceptos clave sobre las variables en Python:

Nomenclatura
- Escrbir en minusculas y en snake_case, es decir, separar las palabras con guiones bajos. Ejemplo: mi_variable

"""
my_int_variable = 10  # Variable de tipo entero
print(my_int_variable)  # Imprime el valor de la variable en la consola

my_float_variable = 3.14  # Variable de tipo flotante
print(my_float_variable)  # Imprime el valor de la variable en la consola

my_string_variable = "Hola, mundo!"  # Variable de tipo cadena de texto
print(my_string_variable)  # Imprime el valor de la variable en la consola

my_boolean_variable = True  # Variable de tipo booleano
print(my_boolean_variable)  # Imprime el valor de la variable en la consola

# Pasar un numero a string
my_int_to_str_variable = str(my_int_variable)  # Convertimos la variable entera a cadena de texto
print(my_int_to_str_variable)  # Imprime el valor de la variable convertida en la consola
print(type(my_int_to_str_variable))  # Imprime el tipo de dato de la variable convertida, que es str (cadena de texto)

# Pasar un string a numero
my_string_number_variable = "42"  # Variable de tipo cadena de texto que representa un número
my_str_to_int_variable = int(my_string_number_variable)  # Convertimos la variable de cadena de texto a entero
print(my_str_to_int_variable)  # Imprime el valor de la variable convertida en la consola
print(type(my_str_to_int_variable))  # Imprime el tipo de dato de la variable convertida, que es int (entero)

# print y concatencación de variables
print("El valor de la variable entera es: " + str(my_int_variable))

# Concatenación de cadenas de texto
print("El valor de la variable entera es: " + str(my_int_variable) + " y el valor de la variable flotante es: " + str(my_float_variable))

# Concatenación de cadenas de texto con f-string
print(f"El valor de la variable entera es: {my_int_variable} y el valor de la variable flotante es: {my_float_variable}")

# Concatenación de cadenas de texto con format
print("El valor de la variable entera es: {} y el valor de la variable flotante es: {}".format(my_int_variable, my_float_variable))

# Concatenacion con coma
print('Variable string:', my_string_variable, 'Variable int:', my_int_variable, 'Variable float:', my_float_variable, 'Variable boolean:', my_boolean_variable)

# len
print(len(my_string_variable))  # Imprime la longitud de la cadena de texto

# input no es lo mas habitual, si creamos scripts que se ejecutan en la terminal, pero es una forma de interactuar con el usuario y obtener datos de entrada.
name = input("Ingrese su nombre: ")
print("Hola,", name)

# Podemos asignar que una variable sea de un tipo de dato específico, sirve para documentar el código y para que los editores de código y linters puedan detectar errores de tipo.
address: str = "Calle Falsa 123"  # Variable de tipo cadena de texto
address = 123  # Reasignamos la variable a un valor de tipo entero
print(type(address))  # Imprime el tipo de dato de la variable en la consola, imprimirá <class 'int'>, ya que la variable fue reasignada a un valor de tipo entero